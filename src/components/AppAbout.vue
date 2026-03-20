<script>
import AppContainer from '@/components/AppContainer.vue';

export default {
  name: 'AppAbout',
  components: { AppContainer },
};
</script>

<template>
  <section id="about" class="about">
    <AppContainer>
      <span class="about__label">{{ $t('about__label') }}</span>
      <p class="about__text">{{ $t('about__text') }}</p>
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.about {
  background-color: var(--background);

  :deep(.container) {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__label {
    font-family: _font(primary);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--section-label);
  }

  &__text {
    font-family: _font(secondary);
    font-size: 13px;
    line-height: 1.65;
    color: var(--foreground);

    @include mobile {
      font-size: 14px;
    }
  }
}
</style>
