# Frontend API Integration Guide

## Step 1: Install Axios (Recommended HTTP Client)

```bash
cd netblade-frontend
npm install axios
```

## Step 2: Create API Configuration

Create `netblade-frontend/src/config/api.js`:

```javascript
import axios from 'axios';

// Base API URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Include cookies for auth
});

// Add request interceptor to include auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear auth and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error.response?.data || error.message);
  }
);

export default apiClient;
```

## Step 3: Create API Service Files

### Auth Service (`netblade-frontend/src/services/authService.js`)

```javascript
import apiClient from '../config/api';

export const authService = {
  // Register
  async register(userData) {
    const response = await apiClient.post('/auth/register', userData);
    if (response.success && response.token) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response;
  },

  // Login
  async login(credentials) {
    const response = await apiClient.post('/auth/login', credentials);
    if (response.success && response.token) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response;
  },

  // Logout
  async logout() {
    await apiClient.get('/auth/logout');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.clear();
  },

  // Get current user
  async getCurrentUser() {
    return await apiClient.get('/auth/me');
  },

  // Update password
  async updatePassword(data) {
    return await apiClient.put('/auth/update-password', data);
  },

  // Forgot password
  async forgotPassword(email) {
    return await apiClient.post('/auth/forgot-password', { email });
  },

  // Reset password
  async resetPassword(token, password) {
    return await apiClient.put(`/auth/reset-password/${token}`, { password });
  },

  // Check if user is authenticated
  isAuthenticated() {
    return !!localStorage.getItem('token');
  },

  // Get stored user data
  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
};
```

### Course Service (`netblade-frontend/src/services/courseService.js`)

```javascript
import apiClient from '../config/api';

export const courseService = {
  // Get all courses
  async getCourses(params = {}) {
    return await apiClient.get('/courses', { params });
  },

  // Get single course
  async getCourse(id) {
    return await apiClient.get(`/courses/${id}`);
  },

  // Enroll in course
  async enrollCourse(id) {
    return await apiClient.post(`/courses/${id}/enroll`);
  },

  // Get my courses
  async getMyCourses() {
    return await apiClient.get('/courses/my/courses');
  },

  // Update progress
  async updateProgress(id, data) {
    return await apiClient.put(`/courses/${id}/progress`, data);
  },

  // Get course lessons
  async getLessons(id) {
    return await apiClient.get(`/courses/${id}/lessons`);
  }
};
```

### Community Service (`netblade-frontend/src/services/communityService.js`)

```javascript
import apiClient from '../config/api';

export const communityService = {
  // Get posts
  async getPosts(params = {}) {
    return await apiClient.get('/community/posts', { params });
  },

  // Get single post
  async getPost(id) {
    return await apiClient.get(`/community/posts/${id}`);
  },

  // Create post
  async createPost(data) {
    return await apiClient.post('/community/posts', data);
  },

  // Update post
  async updatePost(id, data) {
    return await apiClient.put(`/community/posts/${id}`, data);
  },

  // Delete post
  async deletePost(id) {
    return await apiClient.delete(`/community/posts/${id}`);
  },

  // Like post
  async likePost(id) {
    return await apiClient.post(`/community/posts/${id}/like`);
  },

  // Comment on post
  async commentPost(id, content) {
    return await apiClient.post(`/community/posts/${id}/comment`, { content });
  }
};
```

### Market Service (`netblade-frontend/src/services/marketService.js`)

```javascript
import apiClient from '../config/api';

export const marketService = {
  // Get live prices
  async getLivePrices(symbols = '') {
    return await apiClient.get('/market/live-prices', {
      params: symbols ? { symbols } : {}
    });
  },

  // Get market scanner
  async getScanner() {
    return await apiClient.get('/market/scanner');
  },

  // Get economic calendar
  async getCalendar() {
    return await apiClient.get('/market/calendar');
  },

  // Get insights
  async getInsights() {
    return await apiClient.get('/market/insights');
  },

  // Create alert
  async createAlert(data) {
    return await apiClient.post('/market/alerts', data);
  },

  // Get alerts
  async getAlerts(active = false) {
    return await apiClient.get('/market/alerts', {
      params: active ? { active: true } : {}
    });
  },

  // Delete alert
  async deleteAlert(id) {
    return await apiClient.delete(`/market/alerts/${id}`);
  }
};
```

## Step 4: Update AuthModal Component

Replace the mock API calls in `AuthModal.jsx`:

```javascript
import { useState } from "react";
import { authService } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function AuthModal({ isOpen, onClose, onLoginSuccess, initialMode = "login" }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (mode === "login") {
      if (!email || !password) {
        setError("Please enter both email and password");
        return;
      }
    } else {
      if (!email || !password || !confirmPassword) {
        setError("Please fill in all fields");
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      if (password.length < 8) {
        setError("Password must be at least 8 characters");
        return;
      }
    }

    setLoading(true);

    try {
      if (mode === "login") {
        const response = await authService.login({ email, password });
        if (response.success) {
          sessionStorage.removeItem("hasSeenDisclaimerThisSession");
          onLoginSuccess?.();
          onClose();
          navigate('/dashboard');
        }
      } else {
        const response = await authService.register({
          firstName: email.split('@')[0],
          lastName: 'User',
          email,
          password,
          username: email.split('@')[0].toLowerCase()
        });
        if (response.success) {
          sessionStorage.removeItem("hasSeenDisclaimerThisSession");
          onLoginSuccess?.();
          onClose();
          navigate('/dashboard');
        }
      }
    } catch (err) {
      setError(err.error || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
      // Reset form
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  // ... rest of component
}
```

## Step 5: Create Environment Variables

Create `netblade-frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api/v1
```

For production:
```env
VITE_API_URL=https://your-production-api.com/api/v1
```

## Step 6: Update Dashboard to Fetch Real Data

```javascript
import { useState, useEffect } from 'react';
import { authService } from '../services/authService';
import { courseService } from '../services/courseService';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const userData = await authService.getCurrentUser();
        const coursesData = await courseService.getMyCourses();
        
        setUser(userData.data);
        setStats({
          stars: userData.data.stars,
          coins: userData.data.coins,
          followers: userData.data.followerCount,
          following: userData.data.followingCount,
          courses: coursesData.count
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // ... rest of component using real data
}
```

## Step 7: Create Auth Context (Optional but Recommended)

```javascript
// netblade-frontend/src/contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(authService.getUser());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      if (authService.isAuthenticated()) {
        try {
          const response = await authService.getCurrentUser();
          setUser(response.data);
        } catch (error) {
          console.error('Auth error:', error);
          authService.logout();
          setUser(null);
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (credentials) => {
    const response = await authService.login(credentials);
    setUser(response.data);
    return response;
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  const register = async (userData) => {
    const response = await authService.register(userData);
    setUser(response.data);
    return response;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
```

## Testing Checklist

- [ ] Start backend server (`npm run dev`)
- [ ] Seed database (`npm run seed`)
- [ ] Update frontend `.env` file
- [ ] Install axios in frontend
- [ ] Create API service files
- [ ] Update AuthModal with real API calls
- [ ] Test registration
- [ ] Test login
- [ ] Test protected routes
- [ ] Test logout
- [ ] Test dashboard data loading

## Common Issues

### CORS Errors
Make sure backend `.env` has correct frontend URL:
```
FRONTEND_URL=http://localhost:5173
```

### 401 Unauthorized
Check if token is being sent in headers. Use browser DevTools Network tab.

### Token Expiration
Tokens expire after 7 days by default. Implement refresh token logic for production.
