<template>
  <div class="p-6 max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Mes Tâches</h1>

    <!-- Formulaire d'ajout -->
    <form @submit.prevent="createTask" class="mb-6 space-y-2">
      <input v-model="newTask.title" type="text" placeholder="Titre" class="w-full p-2 border rounded" required />
      <textarea v-model="newTask.description" placeholder="Description" class="w-full p-2 border rounded"></textarea>
      <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Ajouter</button>
    </form>

    <!-- Liste des tâches -->
    <div v-for="task in tasks" :key="task._id" class="border p-4 rounded mb-3">
      <h3 class="font-semibold">{{ task.title }}</h3>
      <p>{{ task.description }}</p>
      <p class="text-sm text-gray-500">Status : <strong>{{ task.completed ? 'Terminée' : 'En cours' }}</strong></p>
      
      <div class="mt-2 space-x-2">
        <button @click="toggleComplete(task)" class="text-green-600 hover:underline">
          {{ task.completed ? 'Marquer en cours' : 'Marquer terminée' }}
        </button>
        <button @click="deleteTask(task._id)" class="text-red-600 hover:underline">Supprimer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useAuthStore } from '../store/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const tasks = ref([])
const newTask = ref({ title: '', description: '' })

const fetchTasks = async () => {
  try {
    const res = await axios.get('/api/tasks', {
      headers: { Authorization: `Bearer ${auth.token}` }
    })
    tasks.value = res.data
  } catch (err) {
    if (err.response?.status === 401) router.push('/login')
  }
}

const createTask = async () => {
  if (!newTask.value.title) return
  const res = await axios.post('/api/tasks', newTask.value, {
    headers: { Authorization: `Bearer ${auth.token}` }
  })
  tasks.value.push(res.data)
  newTask.value = { title: '', description: '' }
}

const toggleComplete = async (task) => {
  const res = await axios.put(`/api/tasks/${task._id}`, {
    completed: !task.completed
  }, {
    headers: { Authorization: `Bearer ${auth.token}` }
  })
  task.completed = res.data.completed
}

const deleteTask = async (id) => {
  await axios.delete(`/api/tasks/${id}`, {
    headers: { Authorization: `Bearer ${auth.token}` }
  })
  tasks.value = tasks.value.filter(task => task._id !== id)
}

onMounted(fetchTasks)
</script>
