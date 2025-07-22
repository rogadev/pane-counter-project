# Pane Counter - Modern Full-Stack Application

A state-of-the-art full-stack application built with Vue 3, TypeScript, Vite, and modern Node.js.

## 🚀 Tech Stack

### Frontend

- **Vue 3** with Composition API
- **TypeScript** for type safety
- **Vite** for lightning-fast builds
- **Pinia** for state management
- **Vue Router 4** for navigation
- **Tailwind CSS** for styling
- **Axios** for HTTP requests

### Backend

- **Node.js** with Express.js
- **TypeScript** for type safety
- **MongoDB** with Mongoose
- **JWT** authentication
- **bcryptjs** for password hashing
- **Zod** for validation
- **Helmet** for security headers
- **Rate limiting** for API protection

## 📁 Project Structure

```
pane-counter-project/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/     # Vue components
│   │   ├── views/          # Page components
│   │   ├── stores/         # Pinia stores
│   │   ├── router/         # Vue Router configuration
│   │   └── assets/         # Static assets
│   ├── public/             # Public assets
│   └── package.json        # Frontend dependencies
├── server/                 # Backend application
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── middlewares/    # Express middlewares
│   │   └── config/         # Configuration files
│   └── package.json        # Backend dependencies
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- MongoDB (local or Atlas)

### Frontend Setup

1. Navigate to the client directory:

```bash
cd client
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

The frontend will be available at `http://localhost:8080`

### Backend Setup

1. Navigate to the server directory:

```bash
cd server
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:

```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/pane-counter
JWT_SECRET=your-super-secret-jwt-key
CLIENT_URL=http://localhost:8080
```

5. Start the development server:

```bash
pnpm dev
```

The backend will be available at `http://localhost:3000`

## 🔧 Available Scripts

### Frontend (client/)

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

### Backend (server/)

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build TypeScript to JavaScript
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors

## 🌟 Features

### Authentication

- User registration and login
- JWT-based authentication
- Protected routes
- Password hashing with bcryptjs

### Modern Development Experience

- Hot module replacement (HMR)
- TypeScript for type safety
- ESLint for code quality
- Modern ES modules
- Fast build times with Vite

### Security

- Helmet.js security headers
- Rate limiting
- CORS configuration
- Input validation with Zod
- Password hashing

### UI/UX

- Responsive design with Tailwind CSS
- Modern component architecture
- Loading states and error handling
- Form validation
- Beautiful, accessible interface

## 🔒 Environment Variables

### Frontend

The frontend uses Vite's environment variable system. Create a `.env` file in the client directory if needed.

### Backend

Required environment variables for the backend:

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `CLIENT_URL` - Frontend URL for CORS

## 📦 Deployment

### Frontend

The frontend can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3

### Backend

The backend can be deployed to:

- Railway
- Render
- Heroku
- DigitalOcean
- AWS EC2

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆕 What's New in This Modern Version

### Frontend Improvements

- ✅ Migrated from Vue CLI to Vite (10x faster builds)
- ✅ Added TypeScript support throughout
- ✅ Replaced Vuex with Pinia (better TypeScript support)
- ✅ Modern Tailwind CSS styling
- ✅ Improved component architecture
- ✅ Better error handling and loading states
- ✅ Modern ESLint configuration

### Backend Improvements

- ✅ Added TypeScript support
- ✅ Modern ES modules
- ✅ Enhanced security with Helmet and rate limiting
- ✅ Input validation with Zod
- ✅ Better error handling
- ✅ Improved MongoDB connection handling
- ✅ Graceful shutdown handling

### Development Experience

- ✅ Faster development server startup
- ✅ Better hot reload performance
- ✅ Improved type safety
- ✅ Modern tooling and configurations
- ✅ Better debugging experience
