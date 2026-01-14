import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  FileText,
  MessageSquare,
  Upload,
  TrendingUp,
  Plus,
  Edit,
  Eye,
  DollarSign,
  BarChart3,
  Users,
  Calendar,
  Clock,
  Star,
  Award,
  Target
} from 'lucide-react';

export default function ResearchAnalystDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for demonstration
  const stats = {
    totalArticles: 45,
    totalBlogs: 23,
    qnaSessions: 12,
    educationalContent: 67,
    totalRevenue: 15420,
    monthlyRevenue: 3240,
    subscribers: 1250,
    engagement: 89.5
  };

  const recentArticles = [
    { id: 1, title: 'Market Trends Analysis 2024', status: 'Published', views: 1250, date: '2024-01-10' },
    { id: 2, title: 'Cryptocurrency Investment Guide', status: 'Draft', views: 0, date: '2024-01-08' },
    { id: 3, title: 'Risk Management Strategies', status: 'Published', views: 890, date: '2024-01-05' }
  ];

  const revenueData = [
    { month: 'Jan', amount: 2100 },
    { month: 'Feb', amount: 2800 },
    { month: 'Mar', amount: 3200 },
    { month: 'Apr', amount: 2900 },
    { month: 'May', amount: 3240 },
    { month: 'Jun', amount: 3100 }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 animate-fade-in">Research Analyst Dashboard</h1>
              <p className="text-slate-600 mt-1">Manage your content and track performance</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Back to Main Dashboard
              </Link>
              <button className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors animate-pulse">
                <Plus className="w-4 h-4 inline mr-2" />
                Create Content
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-8 animate-slide-in-left">
          <div className="border-b border-slate-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'articles', label: 'Articles', icon: FileText },
                { id: 'blogs', label: 'Blogs', icon: BookOpen },
                { id: 'qna', label: 'Q&A Sessions', icon: MessageSquare },
                { id: 'content', label: 'Educational Content', icon: Upload },
                { id: 'revenue', label: 'Revenue', icon: DollarSign }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow animate-scale-in">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-600">Total Articles</p>
                    <p className="text-2xl font-bold text-slate-900">{stats.totalArticles}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow animate-scale-in">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-600">Total Blogs</p>
                    <p className="text-2xl font-bold text-slate-900">{stats.totalBlogs}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow animate-scale-in">
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-600">Subscribers</p>
                    <p className="text-2xl font-bold text-slate-900">{stats.subscribers.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow animate-scale-in">
                <div className="flex items-center">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <DollarSign className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-600">Monthly Revenue</p>
                    <p className="text-2xl font-bold text-slate-900">${stats.monthlyRevenue.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 animate-slide-in-right">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <button className="flex items-center p-4 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors group">
                  <Plus className="w-5 h-5 text-teal-600 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-teal-700">Write Article</span>
                </button>
                <button className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group">
                  <Edit className="w-5 h-5 text-blue-600 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-blue-700">Create Blog</span>
                </button>
                <button className="flex items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group">
                  <MessageSquare className="w-5 h-5 text-purple-600 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-purple-700">Start Q&A</span>
                </button>
                <button className="flex items-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group">
                  <Upload className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-green-700">Upload Content</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 animate-slide-in-left">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Articles</h3>
              <div className="space-y-4">
                {recentArticles.map((article) => (
                  <div key={article.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-slate-400 mr-3" />
                      <div>
                        <p className="font-medium text-slate-900">{article.title}</p>
                        <p className="text-sm text-slate-600">{article.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        article.status === 'Published'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {article.status}
                      </span>
                      <span className="text-sm text-slate-600">{article.views} views</span>
                      <button className="text-slate-400 hover:text-slate-600">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Articles Tab */}
        {activeTab === 'articles' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">Articles Management</h2>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                <Plus className="w-4 h-4 inline mr-2" />
                New Article
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200">
              <div className="p-6">
                <div className="space-y-4">
                  {recentArticles.map((article) => (
                    <div key={article.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 text-slate-400 mr-3" />
                        <div>
                          <h3 className="font-medium text-slate-900">{article.title}</h3>
                          <p className="text-sm text-slate-600">Published: {article.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-slate-600">{article.views} views</span>
                        <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                          Edit
                        </button>
                        <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200">
                          Publish
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blogs Tab */}
        {activeTab === 'blogs' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">Blog Management</h2>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                <Plus className="w-4 h-4 inline mr-2" />
                New Blog Post
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <p className="text-slate-600">Blog management interface will be implemented here.</p>
            </div>
          </div>
        )}

        {/* Q&A Sessions Tab */}
        {activeTab === 'qna' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">Q&A Sessions</h2>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                <Plus className="w-4 h-4 inline mr-2" />
                Schedule Session
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <p className="text-slate-600">Q&A session management interface will be implemented here.</p>
            </div>
          </div>
        )}

        {/* Educational Content Tab */}
        {activeTab === 'content' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">Educational Content</h2>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                <Upload className="w-4 h-4 inline mr-2" />
                Upload Content
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <p className="text-slate-600">Educational content upload and management interface will be implemented here.</p>
            </div>
          </div>
        )}

        {/* Revenue Tab */}
        {activeTab === 'revenue' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">Revenue Analytics</h2>
              <div className="flex items-center space-x-4">
                <select className="px-3 py-2 border border-slate-300 rounded-lg text-sm">
                  <option>Last 6 months</option>
                  <option>Last year</option>
                  <option>All time</option>
                </select>
              </div>
            </div>

            {/* Revenue Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-slate-900">${stats.totalRevenue.toLocaleString()}</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Monthly Average</p>
                    <p className="text-2xl font-bold text-slate-900">${Math.round(stats.totalRevenue/6).toLocaleString()}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Growth Rate</p>
                    <p className="text-2xl font-bold text-green-600">+12.5%</p>
                  </div>
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
              </div>
            </div>

            {/* Revenue Chart Placeholder */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Revenue Trend</h3>
              <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-600 mb-4">Revenue chart will be displayed here</p>
                  <div className="grid grid-cols-6 gap-2 text-xs">
                    {revenueData.map((data, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-teal-200 rounded h-16 flex items-end justify-center" style={{height: `${(data.amount / 3500) * 64}px`}}>
                          <span className="text-slate-700 font-medium">${data.amount}</span>
                        </div>
                        <p className="mt-1 text-slate-600">{data.month}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}