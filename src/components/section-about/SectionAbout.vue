<script setup>
</script>
<template>
  <section class="about">
    <h1 class="about__title"></h1>
    <p class="about__sub-title">{{ $t("about__sub-title") }}</p>
    <p>{{ $t("about__sub") }}</p>
  </section>
</template>

<style lang="scss">
.about {
  p {
    line-height: 1.5;
  }

  h3,
  h4 {
    padding-top: 30px;
  }
}

.about__title {
  color: _palette(font, green);
  margin-bottom: _indents(small);
}

.about__sub-title {
  font-size: $font-size-medium;
  font-weight: bold;
  line-height: 30px;
  margin-bottom: _indents(small);
}
</style>