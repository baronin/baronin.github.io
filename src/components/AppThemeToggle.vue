<script>
export default {
  name: 'AppThemeToggle',

  data() {
    return {
      isDark: false,
    };
  },

  mounted() {
    const saved = localStorage.getItem('theme');
    this.isDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.apply();
  },

  methods: {
    toggle() {
      this.isDark = !this.isDark;
      this.apply();
    },

    apply() {
      document.documentElement.classList.toggle('dark', this.isDark);
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    },
  },
};
</script>

<template>
  <button
    class="theme-toggle"
    :aria-label="isDark ? $t('theme__to_light') : $t('theme__to_dark')"
    @click="toggle"
  >
    <i :class="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" />
  </button>
</template>

<style lang="scss" scoped>
.theme-toggle {
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
</style>
