<script>
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'DefaultLayout',
  components: { AppFooter },
};
</script>

<template>
  <div class="layout">
    <div class="layout__body">
      <aside class="layout__sidebar">
        <slot name="sidebar" />
      </aside>
      <main class="layout__main">
        <slot />
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  background-color: var(--background);
}

.layout__body {
  display: flex;
  flex-direction: column;

  @include desktop {
    flex-direction: row;
    max-width: 1440px;
    margin: 0 auto;
  }
}

.layout__sidebar {
  @include desktop {
    width: 320px;
    flex-shrink: 0;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    border-right: 1px solid var(--border);
  }

  @include wide-width {
    width: 360px;
  }
}

.layout__main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 32px;

  @include desktop {
    gap: 48px;
    padding-top: 40px;
    padding-bottom: 48px;
  }
}
</style>
