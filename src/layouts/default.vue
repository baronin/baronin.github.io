<template>
  <div class="app">
    <the-header />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import TheHeader from "../components/layouts/the-header/TheHeader.vue";
</script>

<style>
.app {
  background-color: #272727;
}
</style>
