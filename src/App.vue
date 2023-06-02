<script>
import { Suspense } from "vue";

import SectionNav from "./components/section-nav/SectionNav.vue";
import MainHeader from "./components/main-header/MainHeader.vue";
import MainFooter from "./components/main-footer/MainFooter.vue";

export default {
  components: {Suspense, SectionNav, MainHeader, MainFooter},
};
</script>

<template>
  <div class="overlay"></div>
  <Suspense>
    <template #default>
      <div>
        <section-nav></section-nav>
        <div class="wrapper">
          <main-header />
          <main class="main">
            <div class="container">
              <router-view></router-view>
            </div>
          </main>
          <main-footer />
        </div>
      </div>
    </template>
    <template #fallback>
      <!-- Загрузочное состояние или индикатор загрузки -->
      <div>Loading...</div>
    </template>
  </Suspense>
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
