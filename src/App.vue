<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/rates">Tariffe</RouterLink>
      <RouterLink to="/contacts">Contatti</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
