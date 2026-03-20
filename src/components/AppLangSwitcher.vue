<script>
export default {
  name: 'AppLangSwitcher',

  data() {
    return {
      isOpen: false,
      localeNames: {
        en: 'Eng',
        ua: 'Укр',
        ru: 'Ру',
      },
    };
  },

  computed: {
    locales() {
      return this.$i18n.availableLocales;
    },
    current() {
      return this.$i18n.locale;
    },
    currentName() {
      return this.localeNames[this.current] ?? this.current;
    },
  },

  mounted() {
    document.addEventListener('click', this.onOutsideClick);
  },

  beforeUnmount() {
    document.removeEventListener('click', this.onOutsideClick);
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },

    select(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem('locale', locale);
      this.isOpen = false;
    },

    onOutsideClick(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    },
  },
};
</script>

<template>
  <div class="lang-switcher">
    <button
      class="lang-switcher__trigger"
      :class="{ 'lang-switcher__trigger--open': isOpen }"
      :aria-label="$t('hero__lang')"
      :aria-expanded="isOpen"
      @click.stop="toggle"
    >
      <i class="fa-solid fa-globe lang-switcher__globe" />
      <span class="lang-switcher__label">{{ currentName }}</span>
      <i
        class="fa-solid fa-chevron-down lang-switcher__chevron"
        :class="{ 'lang-switcher__chevron--up': isOpen }"
      />
    </button>

    <Transition name="dropdown">
      <ul v-if="isOpen" class="lang-switcher__menu">
        <li v-for="locale in locales" :key="locale">
          <button
            class="lang-switcher__item"
            :class="{ 'lang-switcher__item--active': locale === current }"
            @click="select(locale)"
          >
            <i
              v-if="locale === current"
              class="fa-solid fa-check lang-switcher__check"
            />
            <span v-else class="lang-switcher__spacer" />
            <span class="lang-switcher__name">{{ localeNames[locale] ?? locale }}</span>
          </button>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.lang-switcher {
  position: relative;

  &__trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    width: 100%;
    padding: 8px 12px;
    border-radius: var(--radius-pill);
    background-color: var(--secondary);
    border: 1px solid var(--border);
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--muted);
    }
  }

  &__globe {
    font-size: 16px;
    color: var(--primary);
    flex-shrink: 0;
  }

  &__label {
    flex: 1;
    text-align: left;
    font-family: _font(secondary);
    font-size: 13px;
    font-weight: 500;
    color: var(--foreground);
    white-space: nowrap;
  }

  &__chevron {
    font-size: 14px;
    color: var(--muted-foreground);
    flex-shrink: 0;
    transition: transform 0.2s;

    &--up {
      transform: rotate(180deg);
    }
  }

  &__menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    z-index: 100;
    list-style: none;
    margin: 0;
    padding: 4px 0;
    background-color: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 8px 12px;
    border-radius: 8px;
    background: none;
    border: none;
    cursor: pointer;
    transition: background-color 0.15s;

    &:hover {
      background-color: var(--secondary);
    }

    &--active {
      background-color: var(--secondary);
    }
  }

  &__check {
    font-size: 14px;
    width: 14px;
    color: var(--primary);
    flex-shrink: 0;
  }

  &__spacer {
    display: inline-block;
    width: 14px;
    flex-shrink: 0;
  }

  &__name {
    font-family: _font(secondary);
    font-size: 13px;
    color: var(--foreground);

    .lang-switcher__item--active & {
      font-weight: 500;
    }
  }
}

// Dropdown animation
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
