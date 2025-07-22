<template>
  <div class="max-w-4xl mx-auto space-y-8">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl">Profile</h1>
      <p class="mt-4 text-lg text-gray-600">
        Manage your account settings and preferences
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Profile Card -->
      <div class="lg:col-span-2">
        <div class="card">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Account Information</h2>
          
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700">Username</label>
              <div class="mt-1 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <span class="text-gray-900">{{ authStore.user?.username }}</span>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700">Email</label>
              <div class="mt-1 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <span class="text-gray-900">{{ authStore.user?.email }}</span>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700">User ID</label>
              <div class="mt-1 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <span class="text-gray-900 font-mono text-sm">{{ authStore.user?.id }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Actions Card -->
      <div class="lg:col-span-1">
        <div class="card">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Actions</h2>
          
          <div class="space-y-4">
            <button
              @click="handleLogout"
              class="w-full btn btn-secondary"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign Out
            </button>
            
            <button
              @click="showChangePassword = true"
              class="w-full btn btn-primary"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              Change Password
            </button>
          </div>
        </div>

        <!-- Stats Card -->
        <div class="card mt-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Account Stats</h2>
          
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Member since</span>
              <span class="text-gray-900 font-medium">{{ memberSince }}</span>
            </div>
            
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Last login</span>
              <span class="text-gray-900 font-medium">{{ lastLogin }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Change Password Modal -->
    <div v-if="showChangePassword" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
          
          <form @submit.prevent="handleChangePassword" class="space-y-4">
            <div>
              <label for="currentPassword" class="block text-sm font-medium text-gray-700">
                Current Password
              </label>
              <input
                id="currentPassword"
                v-model="passwordForm.currentPassword"
                type="password"
                required
                class="input mt-1"
                placeholder="Enter current password"
              />
            </div>
            
            <div>
              <label for="newPassword" class="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                id="newPassword"
                v-model="passwordForm.newPassword"
                type="password"
                required
                class="input mt-1"
                placeholder="Enter new password"
              />
            </div>
            
            <div>
              <label for="confirmNewPassword" class="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                id="confirmNewPassword"
                v-model="passwordForm.confirmNewPassword"
                type="password"
                required
                class="input mt-1"
                placeholder="Confirm new password"
              />
            </div>
            
            <div class="flex space-x-3">
              <button
                type="button"
                @click="showChangePassword = false"
                class="flex-1 btn btn-secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="flex-1 btn btn-primary"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const showChangePassword = ref(false)
const passwordForm = ref({
  currentPassword: '',
  newPassword: '',
  confirmNewPassword: ''
})

const memberSince = computed(() => {
  // This would come from the user data in a real app
  return 'January 2024'
})

const lastLogin = computed(() => {
  // This would come from the user data in a real app
  return 'Today'
})

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}

const handleChangePassword = () => {
  // This would implement password change logic
  console.log('Change password:', passwordForm.value)
  showChangePassword.value = false
  passwordForm.value = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  }
}
</script> 
