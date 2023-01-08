
<script setup>
import SectionNav from "./components/section-nav/SectionNav.vue";
import MainHeader from "./components/main-header/MainHeader.vue";
import SwitchLang from "./components/switch-lang/SwitchLang.vue";
import SectionAbout from "./components/section-about/SectionAbout.vue";
import SectionSkills from "./components/section-skills/SectionSkills.vue";
import MainFooter from "./components/main-footer/MainFooter.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  inheritLocale: true,
  useScope: "local",
});
</script>

<template>
  <!-- end switch lang -->
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
        <!-- about -->
        <section-about />
        <!-- end about -->

        <!-- skills -->
        <section-skills />
        <!-- end "skills -->
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
