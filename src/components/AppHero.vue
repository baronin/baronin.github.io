<script>
import AppThemeToggle from '@/components/AppThemeToggle.vue';
import AppLangSwitcher from '@/components/AppLangSwitcher.vue';
import AppSocialList from '@/components/AppSocialList.vue';
import { socials } from '@/constants/socials.js';

export default {
  name: 'AppHero',

  components: { AppThemeToggle, AppLangSwitcher, AppSocialList },

  data() {
    return { socials };
  },
};
</script>

<template>
  <section class="hero">
    <div class="hero__controls">
      <AppThemeToggle />
      <AppLangSwitcher />
    </div>

    <div class="hero__avatar">
      <img src="@/assets/images/baronin.jpg" alt="Yaroslav Baronin" />
    </div>

    <h1 class="hero__name">Yaroslav Baronin</h1>
    <p class="hero__title">{{ $t('hero__title') }}</p>
    <p class="hero__bio">{{ $t('hero__bio') }}</p>

    <AppSocialList :socials="socials" variant="plain" />
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 20px;
  background-color: var(--background);

  @include mobile {
    padding: 40px 20px;
  }

  @include desktop {
    align-items: flex-start;
    padding: 40px 32px;
    min-height: 100vh;
    gap: 12px;
    justify-content: flex-start;
  }

  &__controls {
    position: absolute;
    top: 32px;
    right: 20px;
    display: flex;
    align-items: center;
    gap: 10px;

    @include mobile {
      top: 40px;
    }

    @include desktop {
      right: 32px;
    }
  }

  &__avatar {
    width: 100px;
    height: 100px;
    border-radius: var(--radius-pill);
    overflow: hidden;
    margin-bottom: 16px;

    @include mobile {
      width: 120px;
      height: 120px;
    }

    @include desktop {
      width: 80px;
      height: 80px;
      margin-bottom: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    font-family: _font(primary);
    font-size: 24px;
    font-weight: 700;
    color: var(--foreground);
    text-align: center;
    margin: 0 0 16px;

    @include mobile {
      font-size: 28px;
    }

    @include desktop {
      font-size: 20px;
      text-align: left;
      margin: 0;
    }
  }

  &__title {
    font-family: _font(primary);
    font-size: 14px;
    color: var(--muted-foreground);
    text-align: center;
    margin: 0 0 16px;

    @include desktop {
      font-size: 13px;
      text-align: left;
      margin: 0;
    }
  }

  &__bio {
    font-family: _font(secondary);
    font-size: 13px;
    color: var(--muted-foreground);
    text-align: center;
    margin: 0 0 16px;

    @include desktop {
      text-align: left;
      font-size: 12px;
      margin: 0;
    }
  }
}
</style>
