<script>
import AppThemeToggle from '@/components/AppThemeToggle.vue';

export default {
  name: 'AppHero',

  components: { AppThemeToggle },

  data() {
    return {
      socials: [
        { icon: 'fa-brands fa-github',     href: 'https://github.com/baronin',          label: 'GitHub' },
        { icon: 'fa-brands fa-linkedin-in', href: 'https://linkedin.com/in/baronin',     label: 'LinkedIn' },
        { icon: 'fa-brands fa-telegram',    href: 'https://t.me/baronin',                label: 'Telegram' },
        { icon: 'fa-regular fa-envelope',   href: 'mailto:contact@baronin.github.io',    label: 'Email' },
      ],
    };
  },

  methods: {
    toggleLocale() {
      const next = this.$i18n.locale === 'en' ? 'ua' : 'en';
      this.$i18n.locale = next;
    },
  },
};
</script>

<template>
  <section class="hero">
    <div class="hero__controls">
      <AppThemeToggle />
      <button class="hero__lang" :aria-label="$t('hero__lang')" @click="toggleLocale">
        <i class="fa-solid fa-globe" />
      </button>
    </div>

    <div class="hero__avatar">
      <img src="@/assets/images/avatar.jpg" alt="Yaroslav Baronin" />
    </div>

    <h1 class="hero__name">Yaroslav Baronin</h1>
    <p class="hero__title">{{ $t('hero__title') }}</p>
    <p class="hero__bio">{{ $t('hero__bio') }}</p>

    <ul class="hero__socials">
      <li v-for="social in socials" :key="social.label">
        <a
          class="hero__social-link"
          :href="social.href"
          :aria-label="social.label"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i :class="social.icon" />
        </a>
      </li>
    </ul>
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

  &__controls {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__lang {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--foreground);
    font-size: 20px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: color 0.2s;

    &:hover {
      color: var(--primary);
    }
  }

  &__avatar {
    width: 100px;
    height: 100px;
    border-radius: var(--radius-pill);
    overflow: hidden;
    margin-bottom: 16px;

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
  }

  &__title {
    font-family: _font(primary);
    font-size: 14px;
    color: var(--muted-foreground);
    text-align: center;
    margin: 0 0 16px;
  }

  &__bio {
    font-family: _font(secondary);
    font-size: 13px;
    color: var(--muted-foreground);
    text-align: center;
    margin: 0 0 16px;
  }

  &__socials {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0;
    margin: 0;
  }

  &__social-link {
    color: var(--foreground);
    font-size: 22px;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--primary);
    }
  }
}
</style>
