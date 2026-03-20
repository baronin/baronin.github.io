<script>
import AppContainer from '@/components/AppContainer.vue';
import AppSocialList from '@/components/AppSocialList.vue';
import { socials } from '@/constants/socials.js';

export default {
  name: 'AppContact',
  components: { AppContainer, AppSocialList },

  data() {
    return {
      email: 'baronin.dev@gmail.com',
      socials,
    };
  },
};
</script>

<template>
  <section class="contact">
    <AppContainer>
    <div class="contact__header">
      <i class="fa-regular fa-envelope contact__icon" />
      <span class="contact__label">{{ $t('contact__label') }}</span>
    </div>

    <div class="contact__card">
      <p class="contact__text">{{ $t('contact__text') }}</p>

      <a :href="`mailto:${email}`" class="contact__email">{{ email }}</a>

      <a :href="`mailto:${email}`" class="contact__btn">
        <i class="fa-regular fa-paper-plane contact__btn-icon" />
        <span>{{ $t('contact__btn') }}</span>
      </a>

      <AppSocialList :socials="socials" variant="circle" />
    </div>
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  background-color: var(--background);

  :deep(.container) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__icon {
    font-size: 20px;
    width: 20px;
    height: 20px;
    color: var(--section-label);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__label {
    font-family: _font(primary);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--foreground);
  }

  &__card {
    background-color: var(--card);
    border-radius: 12px;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  &__text {
    font-family: _font(tertiary);
    font-size: 14px;
    line-height: 1.5;
    color: var(--muted-foreground);
    text-align: center;
  }

  &__email {
    font-family: _font(primary);
    font-size: 14px;
    font-weight: 600;
    color: var(--section-label);
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 14px 20px;
    border-radius: var(--radius-pill);
    background: linear-gradient(to right, #FF8400, #FF5C33);
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }

    span {
      font-family: _font(primary);
      font-size: 13px;
      font-weight: 600;
      color: #FFFFFF;
    }
  }

  &__btn-icon {
    font-size: 16px;
    color: #FFFFFF;
  }


}
</style>
