<template>
  <nav class="main-nav">
    <router-link class="main-nav__link" to="/">{{ $t("main-nav__home") }}</router-link>
    <!--    <a class="main-nav__link" href="/blog/">{{ $t("main-nav__blog") }}</a>-->
    <router-link class="main-nav__link" to="/projects">{{$t("main-nav__projects")}}</router-link>
    <!--    <a class="main-nav__link" href="/about/">{{ $t("main-nav__about") }}</a>-->
    <!--    <a class="main-nav__link" href="/contact/">{{ $t("main-nav__contact") }}</a>-->
    <!-- <a href="/assets/CV/Yaroslav'sResume.pdf"
     download="Yaroslav's Resume"
     target="_blank"
     rel="noreferrer">
    <i class="fa fa-download"></i> Download CV
  </a> -->
  </nav>
</template>

<style lang="scss" scoped>
.main-nav__link {
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 16px 0;
  text-decoration: none;
  font-weight: 400;
  font-size: $font-size-xmedium;
  color: $color-white;
  border-bottom: 1px solid transparent;
  opacity: 0;
  transform: translateX(50%);
  transition: color 0.5s ease, padding 0.5s ease;
  @include desktop {
    transform: translateX(0);
    opacity: 1;
  }

  &:focus,
  &:hover {
    font-weight: bold;
    background-color: #48ba9b;
    border-bottom: 1px solid _palette(accent1, bg);
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    transition: width 0s ease;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    background: #3bc1a0;
    transition: width 0.5s ease;
  }

  /**
   * animation line underline
   */
  &:hover {
    &:before {
      width: 0;
      background: _palette(accent1, bg);
      transition: width 0.5s ease;
    }

    &:after {
      width: 0;
      background: _palette(nav, bgclink);
      transition: width 0.6s ease;
    }
  }

  &:nth-child(2) {
    transition: opacity 0.5s 0.2s, transform 0.5s 0.2s;
  }
  &:nth-child(3) {
    transition: opacity 0.5s 0.3s, transform 0.5s 0.3s;
  }
  &:nth-child(4) {
    transition: opacity 0.5s 0.4s, transform 0.5s 0.4s;
  }
  &:nth-child(5) {
    transition: opacity 0.5s 0.5s, transform 0.5s 0.5s;
  }
  &:nth-child(6) {
    transition: opacity 0.5s 0.6s, transform 0.5s 0.6s;
  }
  &:nth-child(7) {
    transition: opacity 0.5s 0.7s, transform 0.5s 0.7s;
  }
}
</style>
