<script>
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'DefaultLayout',
  components: { AppFooter },
};
</script>

<template>
  <div class="layout">
    <main class="layout__main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  background-color: var(--background);

  &__main {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-bottom: 32px;
  }
}
</style>
