<template>
  <div class="app">
    <header>
      <slot name="header"> Default header content </slot>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "#app";

const router = useRouter();
console.log(router);
</script>

<style lang="scss">
.app {
  height: inherit;
}
</style>
