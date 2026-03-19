<script>
export default {
  name: 'AppSocialList',

  props: {
    socials: {
      type: Array,
      required: true,
    },
    variant: {
      type: String,
      default: 'plain',
      validator: (v) => ['plain', 'circle'].includes(v),
    },
  },
};
</script>

<template>
  <ul class="social-list" :class="`social-list--${variant}`">
    <li v-for="social in socials" :key="social.label">
      <a
        class="social-list__link"
        :href="social.href"
        :aria-label="social.label"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i :class="social.icon" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.social-list {
  display: flex;
  align-items: center;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;

  // --- Plain variant (hero) ---
  &--plain {
    .social-list__link {
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

  // --- Circle variant (contact) ---
  &--circle {
    .social-list__link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: var(--radius-pill);
      background-color: var(--secondary);
      color: var(--foreground);
      font-size: 20px;
      text-decoration: none;
      transition: background-color 0.2s, color 0.2s;

      &:hover {
        background-color: var(--section-label);
        color: #FFFFFF;
      }
    }
  }
}
</style>
