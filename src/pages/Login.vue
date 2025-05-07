<template>
  <div style="margin-left: 40%;">
    <h1>Se connecter</h1>
    <form @submit.prevent="handleLogin">
      <div style="margin:5px;">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
        <span v-if="emailError" class="error">{{ emailError }}</span>
      </div>
      <div>
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="password" required />
        <span v-if="passwordError" class="error">{{ passwordError }}</span>
      </div>
      <p>
        Vous n'avez pas encore de compte ?
        <a @click.prevent="goToRegister" href="/register">S'inscrire</a>
      </p>
      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')

const handleLogin = () => {
  emailError.value = ''
  passwordError.value = ''

  if (!email.value || !password.value) {
    if (!email.value) emailError.value = 'Email est requis'
    if (!password.value) passwordError.value = 'Mot de passe est requis'
    return
  }

  if (email.value === 'user@example.com' && password.value === 'password') {
    localStorage.setItem('authToken', 'fake-token')
    router.push('/home')
  } else {
    alert('Email ou mot de passe invalide')
  }
}

const goToRegister = () => {
  router.push('/register')
}
</script>

<style scoped>
.error {
  color: red;
  font-size: 12px;
}
</style>
