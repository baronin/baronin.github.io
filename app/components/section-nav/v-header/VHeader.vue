<template>
  <header class="section-nav__header">
    <span class="section-nav__header-avatar"
      ><img src="./assets/profile.jpg" alt="photo"
    /></span>
    <h2 class="section-nav__header-title">
      <a href="/">Yaroslav Baronin</a>
    </h2>
  </header>
</template>

<style lang="scss" scoped>
.section-nav__header {
  padding: 32px;
  a {
    color: $color-white;
    text-decoration: none;
    @include desktop {
      opacity: 1;
    }
  }
}
.section-nav__header-title {
  font-size: $font-size-medium;
  opacity: 0;
  transform: scale(0.1, 0.1);
  transform-origin: 0 0;
  transition: opacity 0.8s, transform 0.8s;
  @include desktop {
    transform: scale(1);
    opacity: 1;
  }
}
.section-nav__header-avatar {
  display: block;
  margin: 0 auto 36px auto;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>