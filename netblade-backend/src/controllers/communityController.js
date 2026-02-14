import Post from '../models/Post.js';
import User from '../models/User.js';

// @desc    Get all posts
// @route   GET /api/v1/community/posts
// @access  Public
export const getPosts = async (req, res, next) => {
  try {
    const { category, limit = 20, page = 1, sort = '-createdAt' } = req.query;

    const query = { isDeleted: false };
    if (category) query.category = category;

    const posts = await Post.find(query)
      .populate('author', 'firstName lastName username avatar level')
      .populate('comments.author', 'firstName lastName username avatar')
      .sort(sort)
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await Post.countDocuments(query);

    res.status(200).json({
      success: true,
      count: posts.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / parseInt(limit)),
      data: posts
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single post
// @route   GET /api/v1/community/posts/:id
// @access  Public
export const getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'firstName lastName username avatar level bio')
      .populate('comments.author', 'firstName lastName username avatar');

    if (!post || post.isDeleted) {
      return res.status(404).json({
        success: false,
        error: 'Post not found',
        statusCode: 404
      });
    }

    // Increment views
    post.views += 1;
    await post.save();

    res.status(200).json({
      success: true,
      data: post
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new post
// @route   POST /api/v1/community/posts
// @access  Private
export const createPost = async (req, res, next) => {
  try {
    const { content, category, tags } = req.body;

    const post = await Post.create({
      author: req.user.id,
      content,
      category: category || 'General',
      tags: tags || []
    });

    await post.populate('author', 'firstName lastName username avatar level');

    // Award coins for posting
    await User.findByIdAndUpdate(req.user.id, {
      $inc: { coins: 5, stars: 2 }
    });

    res.status(201).json({
      success: true,
      data: post,
      message: 'Post created successfully. You earned 5 coins and 2 stars!'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update post
// @route   PUT /api/v1/community/posts/:id
// @access  Private
export const updatePost = async (req, res, next) => {
  try {
    let post = await Post.findById(req.params.id);

    if (!post || post.isDeleted) {
      return res.status(404).json({
        success: false,
        error: 'Post not found',
        statusCode: 404
      });
    }

    // Make sure user is post owner
    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to update this post',
        statusCode: 403
      });
    }

    const { content, category, tags } = req.body;
    
    post.content = content || post.content;
    post.category = category || post.category;
    post.tags = tags || post.tags;
    post.isEdited = true;
    
    await post.save();
    await post.populate('author', 'firstName lastName username avatar level');

    res.status(200).json({
      success: true,
      data: post,
      message: 'Post updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete post
// @route   DELETE /api/v1/community/posts/:id
// @access  Private
export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post || post.isDeleted) {
      return res.status(404).json({
        success: false,
        error: 'Post not found',
        statusCode: 404
      });
    }

    // Make sure user is post owner or admin
    if (post.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to delete this post',
        statusCode: 403
      });
    }

    post.isDeleted = true;
    post.deletedAt = new Date();
    await post.save();

    res.status(200).json({
      success: true,
      message: 'Post deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Like/Unlike post
// @route   POST /api/v1/community/posts/:id/like
// @access  Private
export const likePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post || post.isDeleted) {
      return res.status(404).json({
        success: false,
        error: 'Post not found',
        statusCode: 404
      });
    }

    const likeIndex = post.likes.indexOf(req.user.id);

    if (likeIndex > -1) {
      // Unlike
      post.likes.splice(likeIndex, 1);
      await post.save();
      
      return res.status(200).json({
        success: true,
        message: 'Post unliked',
        liked: false,
        likeCount: post.likes.length
      });
    } else {
      // Like
      post.likes.push(req.user.id);
      await post.save();

      // Award stars to post author
      if (post.author.toString() !== req.user.id) {
        await User.findByIdAndUpdate(post.author, {
          $inc: { stars: 1 }
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Post liked',
        liked: true,
        likeCount: post.likes.length
      });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Comment on post
// @route   POST /api/v1/community/posts/:id/comment
// @access  Private
export const commentOnPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post || post.isDeleted) {
      return res.status(404).json({
        success: false,
        error: 'Post not found',
        statusCode: 404
      });
    }

    const comment = {
      author: req.user.id,
      content: req.body.content
    };

    post.comments.push(comment);
    await post.save();

    await post.populate('comments.author', 'firstName lastName username avatar');

    // Award coins for commenting
    await User.findByIdAndUpdate(req.user.id, {
      $inc: { coins: 2 }
    });

    // Award stars to post author for engagement
    if (post.author.toString() !== req.user.id) {
      await User.findByIdAndUpdate(post.author, {
        $inc: { stars: 1 }
      });
    }

    res.status(201).json({
      success: true,
      data: post.comments[post.comments.length - 1],
      message: 'Comment added successfully. You earned 2 coins!'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user's posts
// @route   GET /api/v1/community/posts/user/:username
// @access  Public
export const getUserPosts = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.params.username });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
        statusCode: 404
      });
    }

    const posts = await Post.find({ author: user._id, isDeleted: false })
      .populate('author', 'firstName lastName username avatar level')
      .sort('-createdAt')
      .limit(20);

    res.status(200).json({
      success: true,
      count: posts.length,
      data: posts
    });
  } catch (error) {
    next(error);
  }
};
