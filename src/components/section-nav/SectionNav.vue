<script>
import SwitchLang from "../switch-lang/SwitchLang.vue";
import VHeader from "./v-header/VHeader.vue";
import MainNav from "./main-nav/MainNav.vue";

export default {
  components: {VHeader, MainNav, SwitchLang},
  data() {
    return {
      isOpenMenu: false,
    }
  },
  methods: {
    openNav(){
      this.isOpenMenu = !this.isOpenMenu
    }
  }
}

</script>
<template>
  <section class="section-nav" :class="{ 'section-nav--active': isOpenMenu }">
    <h1 class="visible-hidden">Navigation</h1>
    <button
      class="section-nav__btn-toggle"
      id="hamburger"
      @click="openNav"
    ></button>
    <!-- v-header -->
    <v-header></v-header>
    <!-- end header -->
    <!-- nav -->
    <main-nav></main-nav>
    <!-- end nav -->
    <footer class="section-nav__footer">
      <switch-lang />

      <div class="social-networks">
        <ul id="social-list" class="social-list">
          <li>
            <a
              class="social-link facebook"
              href=" https://www.facebook.com/yaroslav.baronin"
              aria-label="Facebook"
              rel="noreferrer"
              target="_blank"
            >
              <span>Facebook</span>
              <i class="logo-facebook"></i>
            </a>
          </li>

          <li>
            <a
              class="social-link instagram"
              href=" https://www.instagram.com/baronin.dev/"
              aria-label="Instagram"
              rel="noreferrer"
              target="_blank"
            >
              <span>Instagram</span>
              <i class="logo-instagram"></i>
            </a>
          </li>

          <li>
            <a
              class="social-link linkedin"
              href=" https://www.linkedin.com/in/yaroslav-baronin/"
              aria-label="Linkedin"
              rel="noreferrer"
              target="_blank"
            >
              <span>Linkedin</span>
              <i class="logo-linkedin"></i>
            </a>
          </li>

          <li>
            <a
              class="social-link vk"
              href=" https://vk.com/baronin_yaroslav"
              aria-label="VK"
              rel="noreferrer"
              target="_blank"
            >
              <span>VK</span>
              <i class="logo-vk"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </section>
</template>

<style lang="scss">
$withSectionNavSmall: 80%;
$withSectionNavMedium: 368px;
$withSectionNavLarge: 490px;

.section-nav {
  position: fixed;
  top: 0;
  bottom: 0;
  max-width: 280px;
  width: 100%;
  height: 100%;
  margin: 0;
  right: -280px;
  text-align: center;
  color: $color-white;
  background-color: _palette(header, bg);
  transition: right 0.3s;
  z-index: 100;
  @include tablet {
    max-width: 320px;
    right: -320px;
  }
  @include desktop {
    display: flex;
    flex-direction: column;
    right: 0;
    overflow-x: auto;
  }
  @include fhd {
    max-width: $withSectionNavLarge;
  }
}
.section-nav--active {
  overflow-y: auto;
  right: 0;
  .main-nav__link {
    opacity: 1;
    transform: translateX(0);
  }
  .section-nav__header-title {
    transform: scale(1);
    opacity: 1;
  }
  .section-nav__btn-toggle {
    left: 0;
  }
  .section-nav__btn-toggle:after {
    content: "x";
  }
}
.section-nav__btn-toggle {
  position: absolute;
  right: 280px;
  top: 0;
  min-height: 56px;
  padding: 10px 20px;
  background: inherit;
  color: $color-white;
  cursor: pointer;
  z-index: 2001;
  transition: color 0.25s ease-in-out;
  @include tablet {
    right: 320px;
  }
  @include desktop {
    display: none;
  }
  &:after {
    content: "\2630";
    text-decoration: none;
    font-size: 24px;
  }
  &:hover {
    color: #f4f4f4;
  }
}
</style>
