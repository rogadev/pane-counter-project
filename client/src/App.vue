<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">P</span>
              </div>
              <span class="text-xl font-semibold text-gray-900">Pane Counter</span>
            </router-link>
          </div>
          
          <div class="flex items-center space-x-4">
            <router-link 
              to="/" 
              class="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-primary-600"
            >
              Home
            </router-link>
            <router-link 
              to="/about" 
              class="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-primary-600"
            >
              About
            </router-link>
            
            <div v-if="authStore.isAuthenticated" class="flex items-center space-x-4">
              <router-link 
                to="/profile" 
                class="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                active-class="text-primary-600"
              >
                Profile
              </router-link>
              <button 
                @click="authStore.logout" 
                class="btn btn-secondary text-sm"
              >
                Logout
              </button>
            </div>
            
            <div v-else class="flex items-center space-x-2">
              <router-link to="/login" class="btn btn-secondary text-sm">
                Login
              </router-link>
              <router-link to="/register" class="btn btn-primary text-sm">
                Register
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>
