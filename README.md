# 📋 Task Manager - Collaborative Task Management Platform

A modern, full-stack collaborative task management application built with React and FastAPI. Designed for teams to efficiently organize work, manage projects, track tasks, and communicate in real-time - all in one powerful platform.

![Task Manager](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.116.0-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![Python](https://img.shields.io/badge/Python-3.11+-yellow)

## 🌐 Live Demo

**Frontend:** [https://wolf-aman.github.io/Taskmanager/](https://wolf-aman.github.io/Taskmanager/)  
**Backend API:** [https://taskmanager-z53p.onrender.com](https://taskmanager-z53p.onrender.com)  
**API Documentation:** [https://taskmanager-z53p.onrender.com/docs](https://taskmanager-z53p.onrender.com/docs)

## ✨ Key Features

### 🔐 Authentication & User Management
- **Secure Authentication** - JWT-based authentication with bcrypt password hashing
- **User Profiles** - Customizable profiles with unique code IDs for easy team invitations
- **Public Profiles** - View team member profiles and verify users before inviting
- **Password Management** - Secure password update functionality

### 👥 Team Collaboration
- **Team Creation** - Create unlimited teams with customizable names and descriptions
- **Smart Invitations** - Invite members using unique user code IDs
- **Invitation System** - Real-time invitation management with accept/reject functionality
- **Role-Based Access** - Team owners have administrative privileges
- **Member Management** - View active and past team members
- **Team Chat** - WhatsApp-style real-time messaging with file sharing support
- **Team Dashboard** - Comprehensive overview of team activities and projects

### 📁 Project Management
- **Flexible Projects** - Create projects within teams or as personal projects
- **Project Organization** - Organize tasks under specific projects
- **Team Association** - Link projects to teams for collaborative work
- **Project Details** - Track start dates, end dates, and project status
- **Multiple Views** - Grid and list views for project visualization
- **Project Actions** - Edit, delete, and manage project lifecycle

### ✅ Advanced Task Management
- **Task Creation** - Create tasks with detailed information
- **Task Assignment** - Assign tasks to team members
- **Priority Levels** - Set priorities (Low, Medium, High, Urgent)
- **Status Tracking** - Track progress (To Do, In Progress, Done)
- **Due Dates** - Set and track task deadlines
- **Task Estimates** - Add time estimates in minutes
- **Tags System** - Organize tasks with custom tags
- **Task Details Modal** - Comprehensive task view with edit capabilities
- **Quick Status Changes** - One-click status updates from task details

### 📊 Multiple View Modes
- **Kanban Board** - Visual drag-and-drop task management
- **List View** - Detailed table view with sorting and filtering
- **Calendar View** - Track tasks by due dates in calendar format
- **Dashboard View** - Quick overview of all activities

### 💬 Real-Time Communication
- **Team Chat** - WhatsApp-style messaging interface
- **File Sharing** - Share documents, images, and files (up to 10MB)
- **Message History** - Persistent chat history for all teams
- **Real-time Updates** - Instant message delivery and notifications
- **File Preview** - View and download shared files

### 🔔 Notification System
- **Real-time Notifications** - Instant notifications for important events
- **Task Notifications** - Get notified when tasks are assigned or updated
- **Project Notifications** - Stay updated on project activities
- **Team Invitations** - Receive and manage team invitation notifications
- **Unread Count** - Visual indicators for unread notifications
- **Notification Center** - Centralized place to manage all notifications

### 🎨 User Interface
- **Modern Design** - Clean, intuitive interface built with Tailwind CSS
- **Dark Mode** - Full dark mode support with persistent theme preference
- **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Polished transitions and loading states
- **Accessible** - WCAG compliant with keyboard navigation support
- **Loading States** - Clear feedback during data operations
- **Error Handling** - User-friendly error messages and recovery options

### 🔍 Additional Features
- **Search & Filter** - Find tasks and projects quickly
- **Sorting Options** - Sort by various criteria
- **Overdue Detection** - Visual indicators for overdue tasks
- **Activity Dashboard** - Overview of recent activities
- **Quick Actions** - Fast access to common operations
- **Toast Notifications** - Non-intrusive success and error messages
- **404 Page** - Custom not found page with helpful navigation

## 🛠️ Tech Stack

### Frontend Architecture
- **React 19.2.0** - Latest React with improved performance
- **Vite 6.3.1** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.1.17** - Utility-first CSS framework with dark mode
- **React Router DOM 7.9.6** - Client-side routing with nested routes
- **Axios 1.13.2** - Promise-based HTTP client with interceptors
- **Lucide React 0.554.0** - Beautiful, customizable icon library
- **Context API** - State management for auth, theme, and toasts

### Frontend Design Patterns
- **Repository Pattern** - Centralized API calls in dedicated classes
- **Context API** - Global state management
- **Custom Hooks** - Reusable logic (useAuth, useTheme, useToast)
- **Component Composition** - Modular, reusable components
- **Single Responsibility** - Each component has one clear purpose
- **Open/Closed Principle** - Components open for extension, closed for modification

### Backend Architecture
- **FastAPI 0.116.0** - Modern, fast Python web framework
- **SQLAlchemy 2.0.20** - Powerful SQL toolkit and ORM
- **Aiosqlite 0.18.0** - Async SQLite database driver
- **Pydantic 2.3.0** - Data validation using Python type hints
- **Uvicorn** - Lightning-fast ASGI server
- **Python-Jose 3.3.0** - JWT token handling
- **Passlib with Bcrypt** - Secure password hashing
- **APScheduler 3.10.4** - Background task scheduling

### Backend Design Patterns
- **Repository Pattern** - Data access layer abstraction
- **Service Layer** - Business logic separation
- **Dependency Injection** - FastAPI's built-in DI system
- **Async/Await** - Non-blocking I/O operations
- **Schema Validation** - Pydantic models for request/response validation

### Database Design
- **SQLite** - Lightweight, file-based database (easy deployment)
- **Async Operations** - Non-blocking database queries
- **Relationships** - Proper foreign keys and table relationships
- **Migrations** - Database migration scripts for updates
- **Indexing** - Optimized queries with proper indexes

### Security Features
- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - Bcrypt with salt for password storage
- **CORS Configuration** - Proper cross-origin resource sharing
- **SQL Injection Prevention** - ORM-based query protection
- **XSS Protection** - Input sanitization and validation
- **Environment Variables** - Sensitive data stored securely

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** - [Download](https://nodejs.org/)
- **Python 3.11+** - [Download](https://www.python.org/)
- **Git** - [Download](https://git-scm.com/)
- **npm or yarn** - Package manager (comes with Node.js)

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/wolf-aman/Taskmanager.git
cd Taskmanager
```

#### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env.development

# Update .env.development with your backend URL
# VITE_API_URL=http://localhost:8000

# Run development server
npm run dev

# Frontend will be available at http://localhost:5173
```

**Frontend Scripts:**
```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality
npm run deploy   # Deploy to GitHub Pages
```

#### 3. Backend Setup

```bash
# Navigate to backend directory (from project root)
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run database migrations (if needed)
python migrate_database.py

# Start the server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Backend will be available at http://localhost:8000
# API docs available at http://localhost:8000/docs
```

**Backend Scripts:**
```bash
# Check database structure
python check_db.py

# Check teams in database
python check_teams.py

# Run migrations
python migrate_database.py

# Add member status (if needed)
python add_member_status.py
```

### Environment Configuration

#### Frontend Environment Variables (`.env.development`)
```env
# Development
VITE_API_URL=http://localhost:8000

# Production (.env.production)
VITE_API_URL=https://taskmanager-z53p.onrender.com
```

#### Backend Environment Variables
```env
# Security
SECRET_KEY=your-secret-key-change-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=720

# Database
DATABASE_URL=sqlite+aiosqlite:///./taskflow.db

# CORS (comma-separated origins)
ALLOWED_ORIGINS=http://localhost:5173,https://wolf-aman.github.io

# Optional
PYTHON_VERSION=3.11.0
```

## 📂 Project Structure

```
Taskmanager/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD
│
├── frontend/                        # React Frontend
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── api/                     # API client classes
│   │   │   ├── client.js           # Axios instance with interceptors
│   │   │   ├── auth.api.js         # Authentication API calls
│   │   │   ├── teams.api.js        # Team management API
│   │   │   ├── projects.api.js     # Project management API
│   │   │   ├── tasks.api.js        # Task management API
│   │   │   ├── messages.api.js     # Chat messaging API
│   │   │   └── notifications.api.js # Notification API
│   │   │
│   │   ├── components/
│   │   │   ├── common/              # Reusable UI components
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Badge.jsx
│   │   │   │   ├── Avatar.jsx
│   │   │   │   ├── Logo.jsx
│   │   │   │   ├── Toast.jsx
│   │   │   │   └── LoadingSpinner.jsx
│   │   │   │
│   │   │   ├── layout/              # Layout components
│   │   │   │   ├── Header.jsx       # Navigation with notifications
│   │   │   │   ├── Sidebar.jsx      # Sidebar navigation
│   │   │   │   └── DashboardLayout.jsx
│   │   │   │
│   │   │   ├── home/                # Landing page components
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── FeaturesSection.jsx
│   │   │   │   ├── PricingSection.jsx
│   │   │   │   ├── TestimonialsSection.jsx
│   │   │   │   ├── CTASection.jsx
│   │   │   │   └── Footer.jsx
│   │   │   │
│   │   │   ├── dashboard/           # Dashboard components
│   │   │   │   ├── StatsCard.jsx
│   │   │   │   ├── QuickActions.jsx
│   │   │   │   └── RecentTasks.jsx
│   │   │   │
│   │   │   ├── teams/               # Team management components
│   │   │   │   ├── TeamCard.jsx
│   │   │   │   ├── CreateTeamModal.jsx
│   │   │   │   ├── AddMemberModal.jsx
│   │   │   │   └── EnhancedChatPanel.jsx  # WhatsApp-style chat
│   │   │   │
│   │   │   ├── projects/            # Project management components
│   │   │   │   ├── ProjectCard.jsx
│   │   │   │   ├── ProjectList.jsx
│   │   │   │   └── CreateProjectModal.jsx
│   │   │   │
│   │   │   └── tasks/               # Task management components
│   │   │       ├── TaskCard.jsx
│   │   │       ├── TaskList.jsx
│   │   │       ├── KanbanBoard.jsx
│   │   │       ├── CalendarView.jsx
│   │   │       ├── CreateTaskModal.jsx
│   │   │       └── TaskDetailsModal.jsx
│   │   │
│   │   ├── pages/                   # Page components
│   │   │   ├── home/
│   │   │   │   └── HomePage.jsx
│   │   │   ├── auth/
│   │   │   │   ├── LoginPage.jsx
│   │   │   │   └── SignupPage.jsx
│   │   │   ├── dashboard/
│   │   │   │   └── DashboardPage.jsx
│   │   │   ├── teams/
│   │   │   │   └── TeamsPage.jsx
│   │   │   ├── projects/
│   │   │   │   └── ProjectsPage.jsx
│   │   │   ├── tasks/
│   │   │   │   └── TasksPage.jsx
│   │   │   ├── profile/
│   │   │   │   ├── ProfilePage.jsx
│   │   │   │   └── PublicProfilePage.jsx
│   │   │   ├── invitations/
│   │   │   │   └── InvitationsPage.jsx
│   │   │   ├── notifications/
│   │   │   │   └── NotificationsPage.jsx
│   │   │   └── NotFoundPage.jsx
│   │   │
│   │   ├── contexts/                # React Context providers
│   │   │   ├── AuthContext.jsx     # Authentication state
│   │   │   ├── ThemeContext.jsx    # Dark mode state
│   │   │   └── ToastContext.jsx    # Toast notifications
│   │   │
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── useAuth.js          # Authentication hook
│   │   │   ├── useTheme.js         # Theme toggle hook
│   │   │   └── useToast.js         # Toast notification hook
│   │   │
│   │   ├── utils/                   # Utility functions
│   │   │   ├── helpers.js          # Helper functions
│   │   │   └── storage.js          # localStorage utilities
│   │   │
│   │   ├── constants/               # App constants
│   │   │   └── index.js            # API endpoints, configs
│   │   │
│   │   ├── App.jsx                 # Root component with routing
│   │   ├── main.jsx                # Application entry point
│   │   └── index.css               # Global styles with Tailwind
│   │
│   ├── .env.development            # Development environment
│   ├── .env.production             # Production environment
│   ├── .env.example                # Environment template
│   ├── index.html                  # HTML template with theme script
│   ├── package.json                # Dependencies and scripts
│   ├── vite.config.js              # Vite configuration
│   ├── tailwind.config.js          # Tailwind CSS config with dark mode
│   ├── eslint.config.js            # ESLint configuration
│   └── README.md                   # Frontend documentation
│
├── backend/                         # FastAPI Backend
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py                 # FastAPI application entry
│   │   ├── db.py                   # Database configuration
│   │   │
│   │   ├── api/                    # API routes
│   │   │   ├── deps.py             # Dependencies (auth, db)
│   │   │   └── routes/
│   │   │       ├── auth.py         # Authentication endpoints
│   │   │       ├── teams.py        # Team management endpoints
│   │   │       ├── projects.py     # Project management endpoints
│   │   │       ├── tasks.py        # Task management endpoints
│   │   │       ├── messages.py     # Chat messaging endpoints
│   │   │       └── notifications.py # Notification endpoints
│   │   │
│   │   ├── models/                 # SQLAlchemy models
│   │   │   └── models.py           # Database models
│   │   │       ├── User            # User model with code_id
│   │   │       ├── Team            # Team model
│   │   │       ├── TeamMember      # Team membership with status
│   │   │       ├── Project         # Project model
│   │   │       ├── Task            # Task model
│   │   │       ├── TeamMessage     # Chat message with file support
│   │   │       ├── Notification    # Notification model
│   │   │       └── Invitation      # Team invitation model
│   │   │
│   │   ├── schemas/                # Pydantic schemas
│   │   │   └── schemas.py          # Request/response models
│   │   │
│   │   ├── repositories/           # Data access layer
│   │   │   ├── user_repo.py
│   │   │   ├── team_repo.py
│   │   │   ├── project_repo.py
│   │   │   └── task_repo.py
│   │   │
│   │   ├── services/               # Business logic layer
│   │   │   ├── auth_service.py     # Authentication logic
│   │   │   ├── team_service.py     # Team management logic
│   │   │   ├── project_service.py  # Project management logic
│   │   │   ├── task_service.py     # Task management logic
│   │   │   └── notification_service.py # Notification logic
│   │   │
│   │   └── core/                   # Core configurations
│   │       └── config.py           # App configuration
│   │
│   ├── migrations/                  # Database migration scripts
│   ├── migrate_database.py         # Migration runner
│   ├── check_db.py                 # Database structure checker
│   ├── check_teams.py              # Team data checker
│   ├── add_member_status.py        # Add member status field
│   ├── requirements.txt            # Python dependencies
│   ├── render.yaml                 # Render deployment config
│   └── taskflow.db                 # SQLite database (gitignored)
│
├── .gitignore                      # Git ignore file
└── README.md                       # This file
```

## 🔑 Key Files Explained

### Frontend Key Files

**`src/api/client.js`** - Axios instance with:
- Request/response interceptors
- Automatic JWT token injection
- Error handling with toast notifications
- Base URL configuration

**`src/contexts/AuthContext.jsx`** - Authentication state management:
- User login/logout
- Token storage
- Protected route handling
- User session management

**`src/contexts/ThemeContext.jsx`** - Theme management:
- Dark/light mode toggle
- Persistent theme preference
- System theme detection
- Immediate theme application on load

**`src/components/teams/EnhancedChatPanel.jsx`** - Advanced chat features:
- WhatsApp-style messaging UI
- File upload and sharing (10MB limit)
- Real-time message updates
- Member list with active/past distinction
- Team management actions

**`src/pages/invitations/InvitationsPage.jsx`** - Invitation management:
- View pending invitations
- Accept/reject invitations
- Invitation status tracking
- Team information preview

### Backend Key Files

**`app/main.py`** - FastAPI application:
- CORS configuration
- Route registration
- Database initialization
- Health check endpoints

**`app/api/deps.py`** - Dependency injection:
- JWT token validation
- Database session management
- User authentication
- Permission checking

**`app/services/team_service.py`** - Team business logic:
- Team creation with unique codes
- Member invitation system
- Role-based permissions
- Team CRUD operations

**`app/models/models.py`** - Database models:
- User (with unique code_id)
- Team (with owner)
- TeamMember (with status: active/left)
- Project (team-based or personal)
- Task (with detailed tracking)
- TeamMessage (with file support)
- Notification (real-time updates)
- Invitation (team invitations)

## 🌍 Deployment

### Frontend Deployment (GitHub Pages)

The frontend is automatically deployed to GitHub Pages via GitHub Actions:

1. **Automatic Deployment**:
   - Push to `main` branch triggers deployment
   - GitHub Actions workflow builds and deploys
   - Live at: https://wolf-aman.github.io/Taskmanager/

2. **Manual Deployment**:
```bash
cd frontend
npm run build
npm run deploy
```

3. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
   - Builds React app with Vite
   - Sets correct base path for GitHub Pages
   - Deploys to `gh-pages` branch
   - Automatic deployment on push to main

**GitHub Pages Configuration**:
- Repository Settings → Pages
- Source: Deploy from branch
- Branch: gh-pages / root
- Custom domain: Optional

### Backend Deployment (Render.com)

The backend is deployed on Render's free tier:

1. **Automatic Deployment**:
   - Connected to GitHub repository
   - Auto-deploys on push to main branch
   - Live at: https://taskmanager-z53p.onrender.com

2. **Render Configuration** (`backend/render.yaml`):
```yaml
services:
  - type: web
    name: taskmanager-backend
    runtime: python
    buildCommand: pip install -r requirements.txt
    startCommand: uvicorn app.main:app --host 0.0.0.0 --port $PORT
    envVars:
      - key: PYTHON_VERSION
        value: 3.11.0
      - key: ALLOWED_ORIGINS
        value: https://wolf-aman.github.io,http://localhost:5173
      - key: SECRET_KEY
        generateValue: true
```

3. **Environment Variables on Render**:
   - Set in Render Dashboard
   - SECRET_KEY (auto-generated)
   - ALLOWED_ORIGINS (frontend URL)
   - DATABASE_URL (managed by Render)

### Database Deployment

- **Development**: Local SQLite file
- **Production**: SQLite on Render's persistent disk
- **Backups**: Consider periodic database exports
- **Migrations**: Run `python migrate_database.py` when schema changes

## 🔧 Configuration

### API Endpoints Configuration

Update `frontend/src/constants/index.js`:

```javascript
// Development
export const API_BASE_URL = 'http://localhost:8000';

// Production
export const API_BASE_URL = 'https://taskmanager-z53p.onrender.com';

export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  PROFILE: '/auth/profile',
  UPDATE_PROFILE: '/auth/profile',
  UPDATE_PASSWORD: '/auth/password',
  PUBLIC_PROFILE: (userId) => `/auth/users/${userId}/public`,
  
  // Teams
  TEAMS: '/teams',
  MY_TEAMS: '/teams/my',
  ADD_MEMBER: (teamId) => `/teams/${teamId}/add-member`,
  TEAM_MEMBERS: (teamId) => `/teams/${teamId}/members`,
  
  // Team Invitations
  SEND_INVITATION: '/teams/invitations/send',
  MY_INVITATIONS: '/teams/invitations/my',
  RESPOND_INVITATION: (invitationId) => `/teams/invitations/${invitationId}/respond`,
  
  // Projects
  PROJECTS: '/projects',
  TEAM_PROJECTS: (teamId) => `/projects/team/${teamId}`,
  
  // Tasks
  TASKS: '/tasks',
  PROJECT_TASKS: (projectId) => `/tasks/project/${projectId}`,
  ALL_USER_TASKS: '/tasks/user/all',
  UPDATE_TASK: (taskId) => `/tasks/${taskId}`,
  CHANGE_TASK_STATUS: (taskId) => `/tasks/${taskId}/status`,
  DELETE_TASK: (taskId) => `/tasks/${taskId}`,
  
  // Messages
  TEAM_MESSAGES: (teamId) => `/messages/team/${teamId}`,
  SEND_MESSAGE: '/messages/send',
  UPLOAD_FILE: '/messages/upload',
  
  // Notifications
  NOTIFICATIONS: '/notifications',
  UNREAD_COUNT: '/notifications/unread-count',
  MARK_READ: '/notifications/mark-read',
  MARK_ALL_READ: '/notifications/mark-all-read',
};
```

### Backend Configuration

**`backend/app/core/config.py`**:

```python
import os
from datetime import timedelta

# Security
SECRET_KEY = os.getenv("SECRET_KEY", "dev-secret-change-in-production")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 12  # 12 hours

# Database
DATABASE_URL = os.getenv(
    "DATABASE_URL", 
    "sqlite+aiosqlite:///./taskflow.db"
)

# CORS
ALLOWED_ORIGINS = os.getenv(
    "ALLOWED_ORIGINS",
    "http://localhost:5173,https://wolf-aman.github.io"
).split(",")

# File Upload
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB
ALLOWED_FILE_TYPES = [
    "image/jpeg", "image/png", "image/gif",
    "application/pdf", "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "text/plain"
]
```

### Tailwind CSS Configuration

**`frontend/tailwind.config.js`**:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

## 🎯 Usage Guide

### For Users

1. **Sign Up**:
   - Create account with name, email, and password
   - Get a unique user code ID for team invitations

2. **Create Team**:
   - Click "Create Team" from dashboard
   - Enter team name and optional description
   - You become the team owner

3. **Invite Members**:
   - Get member's code ID
   - Send invitation from team page
   - Member receives notification and can accept/reject

4. **Create Project**:
   - Click "New Project"
   - Link to a team or create personal project
   - Add description and dates

5. **Manage Tasks**:
   - Create tasks with priorities and deadlines
   - Assign to team members
   - Track progress with Kanban board
   - Update status with drag-and-drop

6. **Team Chat**:
   - Send messages to team members
   - Share files (images, documents)
   - View chat history

### For Developers

#### Adding a New Feature

1. **Frontend**:
   - Create component in appropriate folder
   - Add API call in corresponding API file
   - Update routing in App.jsx if needed
   - Add constants if needed

2. **Backend**:
   - Create/update model in `models.py`
   - Add schema in `schemas.py`
   - Create repository method if needed
   - Add service method with business logic
   - Create API endpoint in routes
   - Update dependencies if needed

#### Database Migrations

```bash
# Backend directory
cd backend

# Create migration script
# Edit migrate_database.py to add new columns/tables

# Run migration
python migrate_database.py

# Verify changes
python check_db.py
```

#### Testing API Endpoints

Access FastAPI automatic documentation:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## 🐛 Troubleshooting

### Common Issues

#### Frontend Issues

**Dark Mode Not Working:**
```bash
# Clear localStorage
# In browser console:
localStorage.clear()
location.reload()

# Check tailwind.config.js has darkMode: 'class'
# Verify ThemeContext is wrapped around App
```

**API Calls Failing:**
```bash
# Check backend is running
# Verify VITE_API_URL in .env file
# Check browser console for CORS errors
# Verify JWT token in localStorage
```

**Build Errors:**
```bash
# Clear cache and rebuild
cd frontend
rm -rf node_modules/.vite
npm install
npm run build
```

#### Backend Issues

**Database Locked:**
```bash
# Close all connections
# Restart backend server
# Check for multiple running instances
```

**CORS Errors:**
```python
# Verify ALLOWED_ORIGINS in config.py
# Check frontend URL is included
# Restart backend after changes
```

**Import Errors:**
```bash
# Reinstall dependencies
pip install -r requirements.txt

# Verify Python version
python --version  # Should be 3.11+
```

### Database Issues

**Migration Fails:**
```bash
# Backup database first
cp taskflow.db taskflow.db.backup

# Check current schema
python check_db.py

# Run migration
python migrate_database.py

# If fails, restore backup
```

**Data Inconsistency:**
```bash
# Use check scripts
python check_teams.py
python check_db.py

# Manual SQL inspection
sqlite3 taskflow.db
.tables
.schema users
SELECT * FROM users LIMIT 5;
```

## 📸 Screenshots

### Landing Page
![Landing Page](https://via.placeholder.com/800x400?text=Modern+Landing+Page+with+Dark+Mode)
- Clean hero section with call-to-action
- Feature highlights
- Pricing plans
- Testimonials section

### Dashboard
![Dashboard](https://via.placeholder.com/800x400?text=Comprehensive+Dashboard)
- Statistics overview (teams, projects, tasks)
- Quick actions
- Recent tasks
- Activity timeline

### Teams Page
![Teams](https://via.placeholder.com/800x400?text=Team+Management+with+Chat)
- Team cards with member count
- WhatsApp-style chat interface
- File sharing capability
- Member management

### Projects
![Projects](https://via.placeholder.com/800x400?text=Project+Grid+and+List+Views)
- Grid and list view options
- Project status indicators
- Team association
- Quick actions

### Kanban Board
![Kanban](https://via.placeholder.com/800x400?text=Interactive+Kanban+Board)
- Drag-and-drop functionality
- Status columns (To Do, In Progress, Done)
- Task priority indicators
- Overdue task highlighting

### Task Details
![Task Details](https://via.placeholder.com/800x400?text=Detailed+Task+Modal)
- Full task information
- Edit mode toggle
- Status quick change
- Due date and priority

### Invitations
![Invitations](https://via.placeholder.com/800x400?text=Team+Invitations+Management)
- Pending invitations list
- Accept/reject actions
- Invitation status
- Team information preview

### Notifications
![Notifications](https://via.placeholder.com/800x400?text=Real-time+Notifications)
- Unread count indicator
- Notification types (task, project, invitation)
- Mark as read functionality
- Notification center

### Dark Mode
![Dark Mode](https://via.placeholder.com/800x400?text=Beautiful+Dark+Mode)
- Smooth theme transitions
- Persistent preference
- All pages dark mode compatible
- Easy toggle from header

## 🎨 Design System

### Color Palette
- **Primary Blue**: Used for actions, links, primary buttons
- **Success Green**: Completed tasks, success messages
- **Warning Yellow**: Pending actions, medium priority
- **Danger Red**: Delete actions, high priority, errors
- **Gray Scale**: Text, backgrounds, borders

### Typography
- **Font**: System font stack for optimal performance
- **Sizes**: Responsive text sizing
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Components
- **Buttons**: Primary, Secondary, Outline, Ghost, Danger variants
- **Inputs**: Text, Textarea, Select with validation states
- **Cards**: Hover effects, consistent padding
- **Modals**: Responsive, keyboard accessible
- **Badges**: Status indicators, priority levels
- **Avatars**: User profile pictures with fallback initials

## 🔐 Security Best Practices

### Implemented Security Measures

1. **Authentication**:
   - JWT tokens with expiration
   - Secure password hashing with bcrypt
   - Token validation on each request
   - Automatic token refresh

2. **Authorization**:
   - Role-based access control (team owner/member)
   - Permission checks before operations
   - User-specific data filtering
   - Protected API endpoints

3. **Data Protection**:
   - Input validation with Pydantic
   - SQL injection prevention via ORM
   - XSS protection through React
   - CORS configuration

4. **File Upload Security**:
   - File size limits (10MB)
   - File type validation
   - Secure file storage
   - Access control

### Security Recommendations

```python
# Production environment variables
SECRET_KEY=<generate-strong-random-key>
DATABASE_URL=<secure-database-url>
ALLOWED_ORIGINS=<your-frontend-url-only>

# Use HTTPS in production
# Enable rate limiting
# Implement request logging
# Regular security audits
# Keep dependencies updated
```

## 🚀 Performance Optimization

### Frontend Optimizations
- **Code Splitting**: Lazy loading for routes
- **Image Optimization**: Compressed assets
- **Caching**: Browser caching strategy
- **Bundle Size**: Optimized with Vite
- **Tree Shaking**: Unused code elimination

### Backend Optimizations
- **Async Operations**: Non-blocking I/O
- **Database Indexing**: Fast queries
- **Connection Pooling**: Efficient database connections
- **Caching**: Response caching for static data
- **Query Optimization**: Efficient SQL queries

### Monitoring
```bash
# Frontend bundle analysis
cd frontend
npm run build
# Check dist/ folder size

# Backend performance
# Monitor response times in logs
# Database query profiling
# Memory usage monitoring
```

## 📊 API Documentation

### Authentication Endpoints

```http
POST /auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}

Response: 201 Created
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "code_id": "ABC123"
}
```

```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword"
}

Response: 200 OK
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "token_type": "bearer"
}
```

### Team Endpoints

```http
POST /teams
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Development Team"
}

Response: 201 Created
{
  "id": 1,
  "name": "Development Team",
  "owner_id": 1,
  "team_code": "TEAM123"
}
```

### Task Endpoints

```http
POST /tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Implement dark mode",
  "description": "Add dark mode support",
  "project_id": 1,
  "priority": "high",
  "due_date": "2024-12-31T23:59:59"
}

Response: 201 Created
{
  "id": 1,
  "title": "Implement dark mode",
  "status": "todo",
  "priority": "high",
  "created_at": "2024-01-15T10:00:00",
  ...
}
```

Full API documentation available at: http://localhost:8000/docs

## 🧪 Testing

### Frontend Testing

```bash
cd frontend

# Unit tests (if implemented)
npm run test

# E2E tests (if implemented)
npm run test:e2e

# Lint check
npm run lint
```

### Backend Testing

```bash
cd backend

# Run tests (if implemented)
pytest

# Coverage report
pytest --cov=app

# Type checking
mypy app/
```

### Manual Testing Checklist

- [ ] User registration and login
- [ ] Create and manage teams
- [ ] Send and accept invitations
- [ ] Create projects (team and personal)
- [ ] Create, update, and delete tasks
- [ ] Kanban board drag-and-drop
- [ ] Team chat and file sharing
- [ ] Notifications system
- [ ] Dark mode toggle
- [ ] Responsive design on mobile
- [ ] Profile management
- [ ] Password update

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Getting Started

1. **Fork the repository**
```bash
git clone https://github.com/YOUR_USERNAME/Taskmanager.git
cd Taskmanager
```

2. **Create a feature branch**
```bash
git checkout -b feature/AmazingFeature
```

3. **Make your changes**
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Commit your changes**
```bash
git commit -m 'Add some AmazingFeature'
```

5. **Push to the branch**
```bash
git push origin feature/AmazingFeature
```

6. **Open a Pull Request**
   - Describe your changes
   - Reference any related issues
   - Wait for review

### Code Style Guidelines

#### Frontend (React)
- Use functional components with hooks
- Follow naming conventions (PascalCase for components)
- Use PropTypes or TypeScript for type checking
- Keep components small and focused
- Use meaningful variable names
- Add JSDoc comments for complex functions

#### Backend (Python)
- Follow PEP 8 style guide
- Use type hints
- Add docstrings to functions and classes
- Keep functions small and focused
- Use meaningful variable names
- Handle errors gracefully

### Pull Request Process

1. Update the README.md with details of changes
2. Update the documentation if needed
3. The PR will be merged once you have approval
4. Delete your feature branch after merge

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 Aman Raj

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Authors

**Aman Raj**
- GitHub: [@wolf-aman](https://github.com/wolf-aman)
- Portfolio: [Coming Soon]
- LinkedIn: [Connect with me]

**Contributors:**
- Thank you to all contributors who have helped improve this project!

## 🙏 Acknowledgments

### Technologies
- **React Team** - For the amazing React library
- **FastAPI Team** - For the modern Python web framework
- **Tailwind Labs** - For the utility-first CSS framework
- **Lucide** - For beautiful icon library
- **Vite Team** - For the blazing fast build tool

### Inspiration
- Trello - Task management inspiration
- Slack - Team collaboration features
- WhatsApp - Chat interface design
- Notion - Clean UI/UX principles

### Special Thanks
- Open source community for invaluable resources
- Stack Overflow for troubleshooting help
- MDN Web Docs for comprehensive documentation
- All users and testers who provided feedback

## 🗺️ Roadmap

### Upcoming Features

#### Version 2.0 (Q2 2024)
- [ ] Real-time collaboration with WebSocket
- [ ] Task comments and discussions
- [ ] File attachments for tasks
- [ ] Advanced search and filtering
- [ ] Custom task fields
- [ ] Task templates

#### Version 2.1 (Q3 2024)
- [ ] Email notifications
- [ ] Calendar integration (Google Calendar, Outlook)
- [ ] Time tracking for tasks
- [ ] Gantt chart view
- [ ] Project milestones
- [ ] Custom workflows

#### Version 3.0 (Q4 2024)
- [ ] Mobile apps (iOS and Android)
- [ ] Advanced analytics and reporting
- [ ] API webhooks
- [ ] Third-party integrations (Slack, Discord)
- [ ] Export data (PDF, CSV, Excel)
- [ ] Automated backups

#### Long-term Goals
- [ ] AI-powered task suggestions
- [ ] Voice commands
- [ ] Offline mode with sync
- [ ] Multi-language support
- [ ] White-label solution
- [ ] Enterprise features (SSO, audit logs)

## 📞 Support

### Getting Help

**Documentation:**
- Check this README for detailed information
- Visit API documentation at `/docs` endpoint
- Review code comments and inline documentation

**Issues:**
- Search existing issues on GitHub
- Create a new issue with detailed description
- Include error messages and screenshots
- Specify your environment (OS, browser, versions)

**Community:**
- GitHub Discussions (coming soon)
- Discord Server (coming soon)
- Stack Overflow tag: `taskmanager-app`

**Contact:**
- GitHub: Create an issue
- Email: [Coming Soon]
- Twitter: [Coming Soon]

### Reporting Bugs

When reporting bugs, please include:
1. **Description**: Clear description of the issue
2. **Steps to Reproduce**: Detailed steps to reproduce
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Screenshots**: If applicable
6. **Environment**: 
   - OS and version
   - Browser and version
   - Node.js version (frontend issues)
   - Python version (backend issues)
7. **Error Messages**: Complete error messages and stack traces

### Feature Requests

We love feature requests! Please:
1. Search existing issues first
2. Create a new issue with `enhancement` label
3. Describe the feature clearly
4. Explain the use case
5. Suggest implementation if possible

## 📈 Project Statistics

- **Total Lines of Code**: ~15,000+
- **Frontend Components**: 50+
- **API Endpoints**: 30+
- **Database Tables**: 8
- **Supported Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Responsive**: Yes
- **PWA Support**: Coming soon
- **Internationalization**: Coming soon

## 🌟 Star History

If you find this project useful, please consider giving it a star! ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=wolf-aman/Taskmanager&type=Date)](https://star-history.com/#wolf-aman/Taskmanager&Date)

---

<div align="center">

**[⬆ Back to Top](#-task-manager---collaborative-task-management-platform)**

Made with ❤️ by [Aman Raj](https://github.com/wolf-aman)

⭐ Star this repo if you find it helpful!

</div>