# Netblade Backend API

Backend API for Netblade - A comprehensive financial education and trading insights platform.

## Features

- 🔐 **Authentication & Authorization** - JWT-based auth with secure password hashing
- 👤 **User Management** - Profiles, settings, avatars, and preferences
- 📊 **Dashboard Analytics** - User stats, achievements, and progress tracking
- 📚 **Learning System** - Course management, progress tracking, and completion
- 💹 **Market Data** - Real-time market prices, scanners, and economic calendar
- 💬 **Community** - Posts, comments, likes, shares, and social features
- 📰 **Content Management** - Articles, insights, and educational content
- 🎖️ **Gamification** - Stars, coins, badges, and achievements

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** Express Validator
- **File Upload:** Multer + Cloudinary
- **Security:** Helmet, CORS, Rate Limiting

## Project Structure

```
netblade-backend/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Utility functions
│   ├── validators/      # Input validation
│   └── server.js        # Entry point
├── .env.example         # Environment variables template
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository
```bash
cd netblade-backend
```

2. Install dependencies
```bash
npm install
```

3. Setup environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start MongoDB (if running locally)
```bash
mongod
```

5. Run the development server
```bash
npm run dev
```

The API will be available at `http://localhost:5000`

## API Documentation

### Base URL
```
http://localhost:5000/api/v1
```

### Authentication Endpoints

```
POST   /auth/register          - Register new user
POST   /auth/login             - Login user
POST   /auth/logout            - Logout user
GET    /auth/me                - Get current user
POST   /auth/forgot-password   - Request password reset
PUT    /auth/reset-password    - Reset password
```

### User Endpoints

```
GET    /users/profile          - Get user profile
PUT    /users/profile          - Update user profile
PUT    /users/avatar           - Upload profile avatar
PUT    /users/password         - Change password
GET    /users/:username        - Get user by username
POST   /users/:id/follow       - Follow user
DELETE /users/:id/unfollow     - Unfollow user
GET    /users/:id/followers    - Get user followers
GET    /users/:id/following    - Get user following
```

### Course Endpoints

```
GET    /courses                - Get all courses
GET    /courses/:id            - Get course details
GET    /courses/:id/lessons    - Get course lessons
POST   /courses/:id/enroll     - Enroll in course
GET    /courses/my-courses     - Get enrolled courses
PUT    /courses/:id/progress   - Update course progress
```

### Market Data Endpoints

```
GET    /market/live-prices     - Get real-time market prices
GET    /market/scanner         - Market scanner data
GET    /market/calendar        - Economic calendar
GET    /market/alerts          - User market alerts
POST   /market/alerts          - Create market alert
```

### Community Endpoints

```
GET    /community/posts        - Get all posts
POST   /community/posts        - Create new post
GET    /community/posts/:id    - Get post details
PUT    /community/posts/:id    - Update post
DELETE /community/posts/:id    - Delete post
POST   /community/posts/:id/like    - Like post
POST   /community/posts/:id/comment - Comment on post
```

### Article Endpoints

```
GET    /articles               - Get all articles
GET    /articles/:id           - Get article details
GET    /articles/category/:cat - Get articles by category
```

## Environment Variables

See `.env.example` for all required environment variables.

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Rate limiting
- CORS protection
- Helmet security headers
- Input validation and sanitization
- XSS protection
- NoSQL injection prevention

## Error Handling

All errors follow a consistent format:

```json
{
  "success": false,
  "error": "Error message here",
  "statusCode": 400
}
```

## Success Response

All successful responses follow this format:

```json
{
  "success": true,
  "data": { },
  "message": "Optional success message"
}
```

## Development

```bash
# Run in development mode with auto-reload
npm run dev

# Run in production mode
npm start
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

MIT License - see LICENSE file for details
