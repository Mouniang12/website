<template>
  <div>
    <h1>Bienvenue sur notre application</h1>

    <div v-if="isAuthenticated">
      <p>Vous êtes connecté !</p>
      <button @click="handleLogout">Se déconnecter</button>
    </div>

    <div v-else>
      <p>Vous n'avez pas de compte ?</p>
      <button @click="goToRegister">Créer un compte</button>
      <p>Vous avez déjà un compte ?</p>
      <button @click="goToLogin">Se connecter</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()
const isAuthenticated = ref(false)

onMounted(() => {
  isAuthenticated.value = !!localStorage.getItem('authToken')
})

const handleLogout = () => {
  localStorage.removeItem('authToken')
  router.push('/login')
}

const goToRegister = () => {
  router.push('/register')
}

const goToLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
