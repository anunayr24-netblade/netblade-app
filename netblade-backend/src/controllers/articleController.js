import Article from '../models/Article.js';

// @desc    Get all articles
// @route   GET /api/v1/articles
// @access  Public
export const getArticles = async (req, res, next) => {
  try {
    const { category, featured, search, limit = 20, page = 1 } = req.query;

    const query = { isPublished: true };

    if (category && category !== 'All') query.category = category;
    if (featured) query.isFeatured = featured === 'true';
    if (search) {
      query.$text = { $search: search };
    }

    const articles = await Article.find(query)
      .populate('author', 'firstName lastName username avatar')
      .sort({ isFeatured: -1, publishedAt: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await Article.countDocuments(query);

    res.status(200).json({
      success: true,
      count: articles.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / parseInt(limit)),
      data: articles
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single article
// @route   GET /api/v1/articles/:id
// @access  Public
export const getArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id)
      .populate('author', 'firstName lastName username avatar bio')
      .populate('comments.author', 'firstName lastName username avatar');

    if (!article || !article.isPublished) {
      return res.status(404).json({
        success: false,
        error: 'Article not found',
        statusCode: 404
      });
    }

    // Increment views
    article.views += 1;
    await article.save();

    res.status(200).json({
      success: true,
      data: article
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get article by slug
// @route   GET /api/v1/articles/slug/:slug
// @access  Public
export const getArticleBySlug = async (req, res, next) => {
  try {
    const article = await Article.findOne({ slug: req.params.slug, isPublished: true })
      .populate('author', 'firstName lastName username avatar bio')
      .populate('comments.author', 'firstName lastName username avatar');

    if (!article) {
      return res.status(404).json({
        success: false,
        error: 'Article not found',
        statusCode: 404
      });
    }

    // Increment views
    article.views += 1;
    await article.save();

    res.status(200).json({
      success: true,
      data: article
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Like/Unlike article
// @route   POST /api/v1/articles/:id/like
// @access  Private
export const likeArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({
        success: false,
        error: 'Article not found',
        statusCode: 404
      });
    }

    const likeIndex = article.likes.indexOf(req.user.id);

    if (likeIndex > -1) {
      // Unlike
      article.likes.splice(likeIndex, 1);
      await article.save();

      return res.status(200).json({
        success: true,
        message: 'Article unliked',
        liked: false,
        likeCount: article.likes.length
      });
    } else {
      // Like
      article.likes.push(req.user.id);
      await article.save();

      return res.status(200).json({
        success: true,
        message: 'Article liked',
        liked: true,
        likeCount: article.likes.length
      });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Bookmark/Unbookmark article
// @route   POST /api/v1/articles/:id/bookmark
// @access  Private
export const bookmarkArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({
        success: false,
        error: 'Article not found',
        statusCode: 404
      });
    }

    const bookmarkIndex = article.bookmarks.indexOf(req.user.id);

    if (bookmarkIndex > -1) {
      // Remove bookmark
      article.bookmarks.splice(bookmarkIndex, 1);
      await article.save();

      return res.status(200).json({
        success: true,
        message: 'Bookmark removed',
        bookmarked: false
      });
    } else {
      // Add bookmark
      article.bookmarks.push(req.user.id);
      await article.save();

      return res.status(200).json({
        success: true,
        message: 'Article bookmarked',
        bookmarked: true
      });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Comment on article
// @route   POST /api/v1/articles/:id/comment
// @access  Private
export const commentOnArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({
        success: false,
        error: 'Article not found',
        statusCode: 404
      });
    }

    const comment = {
      author: req.user.id,
      content: req.body.content
    };

    article.comments.push(comment);
    await article.save();

    await article.populate('comments.author', 'firstName lastName username avatar');

    res.status(201).json({
      success: true,
      data: article.comments[article.comments.length - 1],
      message: 'Comment added successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get articles by category
// @route   GET /api/v1/articles/category/:category
// @access  Public
export const getArticlesByCategory = async (req, res, next) => {
  try {
    const articles = await Article.find({
      category: req.params.category,
      isPublished: true
    })
      .populate('author', 'firstName lastName username avatar')
      .sort('-publishedAt')
      .limit(20);

    res.status(200).json({
      success: true,
      count: articles.length,
      data: articles
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get featured articles
// @route   GET /api/v1/articles/featured
// @access  Public
export const getFeaturedArticles = async (req, res, next) => {
  try {
    const articles = await Article.find({
      isFeatured: true,
      isPublished: true
    })
      .populate('author', 'firstName lastName username avatar')
      .sort('-publishedAt')
      .limit(5);

    res.status(200).json({
      success: true,
      count: articles.length,
      data: articles
    });
  } catch (error) {
    next(error);
  }
};
