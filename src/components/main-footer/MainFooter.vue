<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
<template>
  <footer class="footer">
    <div class="copyright">
      Proudly powered by
      <a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue</a>
    </div>
    <div class="all-rights">
      <p>web-site by Yaroslav Baronin.</p>
      <p>All rights reserved. ©</p>
    </div>
    <div class="date">
      2017- <span>{{ this.currentYear }}</span>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  text-align: center;
  padding: _indents(large) _indents(small);
  background: #f7f2f2;
  color: #c0c0c0;
  overflow: hidden;

  @include wide-width {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>