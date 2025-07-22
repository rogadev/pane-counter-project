<template>
  <div class="space-y-8">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl">About This Project</h1>
      <p class="mt-4 text-lg text-gray-600">
        A modern full-stack application showcasing the latest web development technologies.
      </p>
    </div>

    <div class="card">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">Technology Stack</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-lg font-medium text-gray-900 mb-3">Frontend</h3>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center">
              <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              Vue 3 with Composition API
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              TypeScript for type safety
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              Vite for lightning-fast builds
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              Pinia for state management
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              Tailwind CSS for styling
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              Vue Router for navigation
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-medium text-gray-900 mb-3">Backend</h3>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center">
              <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              Node.js with Express.js
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              MongoDB with Mongoose
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              JWT authentication
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              bcryptjs for password hashing
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              CORS enabled
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              Environment configuration
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="card">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">Features</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 class="font-medium text-gray-900">User Authentication</h3>
          <p class="text-sm text-gray-600 mt-1">Secure login and registration system</p>
        </div>

        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="font-medium text-gray-900">Type Safety</h3>
          <p class="text-sm text-gray-600 mt-1">Full TypeScript support throughout</p>
        </div>

        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="font-medium text-gray-900">Fast Development</h3>
          <p class="text-sm text-gray-600 mt-1">Hot reload and instant builds</p>
        </div>
      </div>
    </div>

    <div class="card">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">Getting Started</h2>
      <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
        <div class="mb-2">
          <span class="text-green-400"># Install dependencies</span>
        </div>
        <div class="mb-2">
          <span class="text-blue-400">pnpm</span> install
        </div>
        <div class="mb-2">
          <span class="text-green-400"># Start development server</span>
        </div>
        <div class="mb-2">
          <span class="text-blue-400">pnpm</span> dev
        </div>
        <div class="mb-2">
          <span class="text-green-400"># Build for production</span>
        </div>
        <div>
          <span class="text-blue-400">pnpm</span> build
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here
</script> 
