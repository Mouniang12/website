<template>
  <div style="margin-left: 40%;">
    <h1>Créer un compte</h1>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="lastname">Nom</label>
        <input required type="text" v-model.trim="lastName" id="lastname" placeholder="Nom" />
        <span v-if="lastNameError" class="error">{{ lastNameError }}</span>
      </div>
      <div>
        <label for="firstname">Prénom</label>
        <input required type="text" v-model.trim="firstName" id="firstname" placeholder="Prénom" />
        <span v-if="firstNameError" class="error">{{ firstNameError }}</span>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model.trim="email" required />
        <span v-if="emailError" class="error">{{ emailError }}</span>
      </div>
      <div>
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="password" required />
        <span v-if="passwordError" class="error">{{ passwordError }}</span>
      </div>
      <p>
        Vous avez déjà un compte ?
        <a @click.prevent="goToLogin" href="/login">Se connecter</a>
      </p>
      <button type="submit">S'inscrire</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Champs
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')

const firstNameError = ref('')
const lastNameError = ref('')
const emailError = ref('')
const passwordError = ref('')

const handleRegister = () => {
  firstNameError.value = ''
  lastNameError.value = ''
  emailError.value = ''
  passwordError.value = ''

  let hasError = false

  if (!lastName.value) {
    lastNameError.value = 'Le nom est requis'
    hasError = true
  }

  if (!firstName.value) {
    firstNameError.value = 'Le prénom est requis'
    hasError = true
  }

  if (!email.value) {
    emailError.value = 'L’email est requis'
    hasError = true
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.value = 'Email invalide'
    hasError = true
  }

  if (!password.value) {
    passwordError.value = 'Le mot de passe est requis'
    hasError = true
  } else if (password.value.length < 6) {
    passwordError.value = 'Le mot de passe doit contenir au moins 6 caractères'
    hasError = true
  }

  if (hasError) return

  alert('Inscription réussie !')
  router.push('/login')
}

const goToLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
.error {
  color: red;
  font-size: 12px;
  display: block;
  margin-top: 4px;
}

form div{
  margin-top: 10px;
}
</style>