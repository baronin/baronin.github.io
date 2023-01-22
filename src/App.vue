<script>
import SectionNav from "./components/section-nav/SectionNav.vue";
import MainHeader from "./components/main-header/MainHeader.vue";
import MainFooter from "./components/main-footer/MainFooter.vue";

export default {
  components: {SectionNav, MainHeader, MainFooter},
};
</script>

<template>
  <div class="overlay"></div>
  <section-nav></section-nav>

  <!-- wrapper -->
  <div class="wrapper">
    <!-- header -->
    <main-header />
    <!-- end header -->

    <!-- main -->
    <main class="main">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
    <!-- end main -->

    <!-- footer -->
    <main-footer />
    <!-- end footer -->
  </div>
</template>

<style lang="scss">
.wrapper {
  transition: left 0.4s;
  @include desktop {
    width: calc(100% - 320px);
  }
}

.main {
  min-height: calc(100vh - 368px);
  padding-top: _indents(small);
  padding-bottom: _indents(small);

  @include tablet {
    min-height: calc(100vh - 386px);
    padding-top: _indents(medium);
    padding-bottom: _indents(medium);
  }

  @include wide-width {
    min-height: calc(100vh - 512px);
  }
}
</style>
