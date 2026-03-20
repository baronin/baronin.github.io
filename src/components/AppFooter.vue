<script>
import AppLangSwitcher from "@/components/AppLangSwitcher.vue";
import AppContainer from "@/components/AppContainer.vue";

export default {
  name: "AppFooter",

  components: { AppLangSwitcher, AppContainer },

  data() {
    return {
      today: new Date().getFullYear(),
      nav: [
        { key: "footer__about", href: "#about" },
        { key: "footer__projects", href: "#projects" },
        { key: "footer__skills", href: "#skills" },
        { key: "footer__contact", href: "#contact" },
      ],
    };
  },
};
</script>

<template>
  <footer class="footer">
    <div class="footer__divider" />

    <AppContainer>
      <div class="footer__top">
        <div class="footer__logo">
          <span class="footer__logo-mark">YB</span>
          <span class="footer__logo-text">Portfolio</span>
        </div>
        <AppLangSwitcher />
      </div>

      <nav class="footer__nav">
        <a v-for="item in nav" :key="item.key" :href="item.href" class="footer__nav-link">{{ $t(item.key) }}</a>
      </nav>

      <div class="footer__meta">
        <span class="footer__built">Built with Vue.js · Designed in Pencil</span>
        <span class="footer__copy">© {{ today }} Yaroslav Baronin. All rights reserved.</span>
      </div>
    </AppContainer>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: var(--background);
  padding-bottom: 40px;

  &__divider {
    height: 1px;
    background-color: var(--border);
  }

  :deep(.container) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 32px;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__logo-mark {
    font-family: _font(primary);
    font-size: 18px;
    font-weight: 700;
    color: var(--primary);
  }

  &__logo-text {
    font-family: _font(tertiary);
    font-size: 14px;
    color: var(--muted-foreground);
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  &__nav-link {
    font-family: _font(tertiary);
    font-size: 12px;
    color: var(--muted-foreground);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--foreground);
    }
  }

  &__meta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  &__built,
  &__copy {
    font-size: 10px;
    color: #999999;
    text-align: center;
  }

  &__built {
    font-family: _font(primary);
  }

  &__copy {
    font-family: _font(tertiary);
  }
}
</style>
