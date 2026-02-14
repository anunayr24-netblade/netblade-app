# Netblade Backend - Quick Setup Guide

## Prerequisites Checklist
- ✅ Node.js v18+ installed
- ✅ MongoDB installed and running (or MongoDB Atlas account)
- ✅ Git installed
- ✅ Terminal/Command Prompt access

## Step-by-Step Installation

### 1. Navigate to Backend Directory
```powershell
cd c:\Users\anuna\netblade-app\netblade-backend
```

### 2. Install Dependencies
```powershell
npm install
```

### 3. Verify Environment Variables
The `.env` file is already configured. If MongoDB is not running on default settings, update `MONGODB_URI`:

```
MONGODB_URI=mongodb://localhost:27017/netblade
```

Or use MongoDB Atlas:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/netblade
```

### 4. Start MongoDB (if running locally)
```powershell
# In a new terminal window
mongod
```

### 5. Seed the Database (Optional but Recommended)
```powershell
npm run seed
```

This creates:
- Admin user: admin@netblade.com / Admin@123
- Sample user: john@example.com / Password@123
- Sample courses, articles, and achievements

### 6. Start the Development Server
```powershell
npm run dev
```

The API will be available at: http://localhost:5000

### 7. Test the API
```powershell
# Health check
curl http://localhost:5000/health
```

## API Endpoints Overview

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/auth/me` - Get current user (Protected)
- `POST /api/v1/auth/forgot-password` - Request password reset
- `PUT /api/v1/auth/reset-password/:token` - Reset password

### Users
- `GET /api/v1/users/profile/me` - Get my profile (Protected)
- `PUT /api/v1/users/profile` - Update profile (Protected)
- `GET /api/v1/users/:username` - Get user by username
- `POST /api/v1/users/:id/follow` - Follow user (Protected)

### Courses
- `GET /api/v1/courses` - Get all courses
- `GET /api/v1/courses/:id` - Get course details
- `POST /api/v1/courses/:id/enroll` - Enroll in course (Protected)
- `GET /api/v1/courses/my/courses` - Get my enrolled courses (Protected)

### Community
- `GET /api/v1/community/posts` - Get all posts
- `POST /api/v1/community/posts` - Create post (Protected)
- `POST /api/v1/community/posts/:id/like` - Like post (Protected)
- `POST /api/v1/community/posts/:id/comment` - Comment on post (Protected)

### Market Data
- `GET /api/v1/market/live-prices` - Get live market prices
- `GET /api/v1/market/scanner` - Market scanner data
- `GET /api/v1/market/calendar` - Economic calendar
- `POST /api/v1/market/alerts` - Create price alert (Protected)

### Articles
- `GET /api/v1/articles` - Get all articles
- `GET /api/v1/articles/:id` - Get article details
- `POST /api/v1/articles/:id/like` - Like article (Protected)

### Dashboard
- `GET /api/v1/dashboard/stats` - Get dashboard statistics (Protected)
- `GET /api/v1/dashboard/activity` - Get recent activity (Protected)
- `GET /api/v1/dashboard/learning` - Get learning progress (Protected)

## Testing with Sample Requests

### 1. Register a New User
```json
POST http://localhost:5000/api/v1/auth/register
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "password": "Password@123",
  "username": "janesmith"
}
```

### 2. Login
```json
POST http://localhost:5000/api/v1/auth/login
Content-Type: application/json

{
  "email": "jane@example.com",
  "password": "Password@123"
}
```

Response will include a `token`. Use this token for protected routes:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### 3. Get All Courses
```
GET http://localhost:5000/api/v1/courses
```

### 4. Create a Community Post (Protected)
```json
POST http://localhost:5000/api/v1/community/posts
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json

{
  "content": "Just completed my first course on technical analysis! 📈",
  "category": "Achievement",
  "tags": ["learning", "milestone"]
}
```

## Connecting Frontend to Backend

### Update Frontend API Base URL

In your frontend, create an API configuration file:

**netblade-frontend/src/config/api.js**
```javascript
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

export const apiClient = {
  async post(endpoint, data, token) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
      },
      body: JSON.stringify(data)
    });
    return response.json();
  },
  
  async get(endpoint, token) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` })
      }
    });
    return response.json();
  }
};
```

### Update AuthModal to Use Real API

Replace the mock login in `AuthModal.jsx`:
```javascript
import { apiClient } from '../config/api';

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const endpoint = mode === 'login' ? '/auth/login' : '/auth/register';
    const data = await apiClient.post(endpoint, {
      email,
      password,
      ...(mode === 'signup' && { 
        firstName: 'User', 
        lastName: 'Name',
        confirmPassword 
      })
    });

    if (data.success) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.data));
      sessionStorage.removeItem('hasSeenDisclaimerThisSession');
      onLoginSuccess?.();
      onClose();
    } else {
      setError(data.error);
    }
  } catch (error) {
    setError('Something went wrong. Please try again.');
  } finally {
    setLoading(false);
  }
};
```

## Troubleshooting

### MongoDB Connection Issues
```
Error: connect ECONNREFUSED
```
**Solution:** Make sure MongoDB is running:
```powershell
mongod
```

### Port Already in Use
```
Error: Port 5000 is already in use
```
**Solution:** Change PORT in `.env` file or kill the process:
```powershell
# Find process on port 5000
netstat -ano | findstr :5000
# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

### JWT Token Errors
**Solution:** Make sure you're sending the token in the Authorization header:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

## Production Deployment Checklist

- [ ] Change `JWT_SECRET` to a strong random string
- [ ] Set `NODE_ENV=production`
- [ ] Use MongoDB Atlas for database
- [ ] Setup Cloudinary for image uploads
- [ ] Configure email service for password resets
- [ ] Enable HTTPS
- [ ] Setup rate limiting (already configured)
- [ ] Add proper logging (Morgan is configured)
- [ ] Setup monitoring (consider PM2)

## Next Steps

1. ✅ Backend is running
2. Update frontend to use real API endpoints
3. Test authentication flow
4. Test user registration and login
5. Test course enrollment and progress tracking
6. Test community features (posts, comments, likes)
7. Integrate real market data APIs (optional)

## Support

For issues or questions:
- Check the `README.md` for detailed API documentation
- Review error logs in the terminal
- Verify `.env` configuration

---

**Backend Status:** ✅ Ready for Integration
**Database:** MongoDB (Local or Atlas)
**API Version:** v1
**Authentication:** JWT
