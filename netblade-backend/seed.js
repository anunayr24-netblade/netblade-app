import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './src/models/User.js';
import Course from './src/models/Course.js';
import Article from './src/models/Article.js';
import Achievement from './src/models/Achievement.js';
import connectDB from './src/config/database.js';

dotenv.config();

const toSlug = (title) => title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

// Sample courses data
const courses = [
  {
    title: 'Market Foundations',
    description: 'Complete guide to market structure, participants, regulatory bodies, supply & demand, asset classes, order types, and trading mechanics.',
    level: 'Beginner',
    category: 'Market Foundations',
    topics: ['Market Structure', 'Participants', 'Regulatory Bodies', 'Supply & Demand', 'Asset Classes', 'Order Types'],
    lessons: 11,
    duration: '6 weeks',
    color: 'teal',
    coursePath: '/market-foundations',
    isPublished: true,
    isFeatured: true,
    modules: [
      {
        moduleNumber: 1,
        title: 'Introduction to Markets',
        description: 'Understanding the basics of financial markets',
        lessons: [
          {
            lessonNumber: 1,
            title: 'What are Financial Markets?',
            description: 'Introduction to financial markets and their role',
            content: 'Financial markets are platforms where buyers and sellers trade financial assets...',
            duration: 15
          }
        ]
      }
    ]
  },
  {
    title: 'Technical Analysis',
    description: 'Master chart reading, patterns, indicators, and trading strategies.',
    level: 'Intermediate',
    category: 'Technical Analysis',
    topics: ['Chart patterns', 'Support & resistance', 'Trend analysis', 'Trading strategies'],
    lessons: 12,
    duration: '6 weeks',
    color: 'green',
    coursePath: '/technical-analysis',
    isPublished: true,
    isFeatured: true,
    modules: []
  },
  {
    title: 'Risk Management',
    description: 'Risk management, position sizing, and trader mindset.',
    level: 'All Levels',
    category: 'Risk Management',
    topics: ['Position sizing', 'Risk/reward ratios', 'Stop losses', 'Portfolio management'],
    lessons: 6,
    duration: '3 weeks',
    color: 'red',
    coursePath: '/risk-management',
    isPublished: true,
    modules: []
  }
];

// Sample articles
const articles = [
  {
    title: 'Understanding Market Cycles: From Bull to Bear',
    excerpt: 'Learn how to identify and navigate different market phases to optimize your trading strategy.',
    content: `
      <h1>Understanding Market Cycles</h1>
      <p>Market cycles are natural fluctuations in the economy and financial markets...</p>
      <h2>The Four Phases</h2>
      <p>1. Accumulation Phase - Smart money starts buying...</p>
    `,
    category: 'Market Analysis',
    tags: ['market cycles', 'trading', 'analysis'],
    readTime: '5 min read',
    isPublished: true,
    isFeatured: true,
    metaTitle: 'Understanding Market Cycles',
    metaDescription: 'Learn about market cycles and how to trade them'
  },
  {
    title: 'Risk Management: The Foundation of Successful Trading',
    excerpt: 'Discover why risk management is more important than finding the perfect trading strategy.',
    content: `
      <h1>Risk Management in Trading</h1>
      <p>Risk management is the cornerstone of successful trading...</p>
    `,
    category: 'Risk Management',
    tags: ['risk management', 'trading', 'strategy'],
    readTime: '7 min read',
    isPublished: true,
    isFeatured: false
  }
];

// Sample achievements
const achievements = [
  {
    name: 'First Steps',
    description: 'Complete your first lesson',
    icon: '📚',
    category: 'Learning',
    criteria: 'lessons_completed',
    threshold: 1,
    points: 10,
    coins: 50,
    rarity: 'Common'
  },
  {
    name: 'Course Master',
    description: 'Complete your first course',
    icon: '🏅',
    category: 'Learning',
    criteria: 'courses_completed',
    threshold: 1,
    points: 50,
    coins: 200,
    rarity: 'Rare'
  },
  {
    name: 'Community Member',
    description: 'Create your first post',
    icon: '💬',
    category: 'Community',
    criteria: 'posts_created',
    threshold: 1,
    points: 10,
    coins: 50,
    rarity: 'Common'
  },
  {
    name: '100 Stars',
    description: 'Earn 100 stars',
    icon: '🌟',
    category: 'Milestone',
    criteria: 'stars_earned',
    threshold: 100,
    points: 50,
    coins: 250,
    rarity: 'Rare'
  }
];

const seedData = async () => {
  try {
    console.log('🌱 Starting database seed...');

    // Connect to database
    await connectDB();

    // Clear existing data (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('🗑️  Clearing existing data...');
      await User.deleteMany({});
      await Course.deleteMany({});
      await Article.deleteMany({});
      await Achievement.deleteMany({});
      console.log('✅ Existing data cleared');
    }

    // Create admin user
    console.log('👤 Creating admin user...');
    const adminUser = await User.create({
      firstName: 'Admin',
      lastName: 'User',
      username: 'admin',
      email: 'admin@netblade.com',
      password: 'Admin@123',
      role: 'admin',
      isVerified: true,
      bio: 'Netblade platform administrator',
      stars: 1000,
      coins: 5000,
      level: 'Expert'
    });
    console.log('✅ Admin user created:', adminUser.email);

    // Create sample user
    console.log('👤 Creating sample user...');
    const sampleUser = await User.create({
      firstName: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      email: 'john@example.com',
      password: 'Password@123',
      role: 'user',
      isVerified: true,
      bio: 'Passionate trader learning technical analysis',
      stars: 342,
      coins: 1890,
      level: 'Intermediate',
      experienceLevel: 'intermediate'
    });
    console.log('✅ Sample user created:', sampleUser.email);

    // Create courses
    console.log('📚 Creating courses...');
    const createdCourses = await Course.insertMany(
      courses.map(course => ({
        ...course,
        createdBy: adminUser._id,
        slug: toSlug(course.title)
      }))
    );
    console.log(`✅ ${createdCourses.length} courses created`);

    // Create articles
    console.log('📰 Creating articles...');
    const createdArticles = await Article.insertMany(
      articles.map(article => ({
        ...article,
        author: adminUser._id,
        slug: toSlug(article.title),
        ...(article.isPublished ? { publishedAt: new Date() } : {})
      }))
    );
    console.log(`✅ ${createdArticles.length} articles created`);

    // Create achievements
    console.log('🏆 Creating achievements...');
    const createdAchievements = await Achievement.insertMany(achievements);
    console.log(`✅ ${createdAchievements.length} achievements created`);

    console.log('\n✨ Database seeded successfully!');
    console.log('\n📝 Login Credentials:');
    console.log('   Admin: admin@netblade.com / Admin@123');
    console.log('   User:  john@example.com / Password@123');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
