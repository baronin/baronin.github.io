<script setup>
import SwitchLang from "../switch-lang/SwitchLang.vue";
</script>
<template>
  <header class="header">
    <div class="header__top">
      <a class="header__logo-link" href="/">baronin.pro</a>
      <switch-lang />
    </div>
    <div class="header__bg">
      <img src="./assets/banner.jpg" alt="work place" />
    </div>
  </header>
</template>

<style lang="scss">
.header {
  width: 100%;
}

.header__top {
  position: fixed;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 _indents(small);
  background-color: _palette(header, bgdark);
  z-index: 1;
  @include desktop {
    width: calc(100% - 320px);
  }
  @include fhd {
    width: calc(100% - 490px);
  }
  .lang {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 50px;

    a {
      padding: 5px 10px;
    }
  }
}

.header__logo-link {
  display: block;
  font-size: $font-size-xmedium;
  font-weight: bold;
}

.header__bg {
  height: 192px;
  @include fhd {
    height: 192px * 2;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>