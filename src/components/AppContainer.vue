<script>
export default {
  name: 'AppContainer',
};
</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 0 20px;

  @include tablet {
    padding: 0 40px;
  }

  @include wide-width {
    max-width: 1440px;
    padding: 0 80px;
    margin: 0 auto;
  }
}
</style>
