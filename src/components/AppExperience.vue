<script>
import AppContainer from '@/components/AppContainer.vue';

export default {
  name: 'AppExperience',
  components: { AppContainer },

  data() {
    return {
      items: [
        { date: '2021 — Present', role: 'Senior Developer',      company: 'TechCorp'  },
        { date: '2019 — 2021',    role: 'Full Stack Developer',  company: 'WebStudio' },
        { date: '2017 — 2019',    role: 'Junior Developer',      company: 'StartupLab' },
      ],
    };
  },
};
</script>

<template>
  <section class="experience">
    <AppContainer>
    <span class="experience__label">{{ $t('experience__label') }}</span>

    <ul class="experience__list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="experience__item"
        :class="{ 'experience__item--last': index === items.length - 1 }"
      >
        <div class="experience__timeline">
          <div class="experience__dot" />
          <div v-if="index < items.length - 1" class="experience__line" />
        </div>

        <div class="experience__content">
          <span class="experience__date">{{ item.date }}</span>
          <strong class="experience__role">{{ item.role }}</strong>
          <span class="experience__company">{{ item.company }}</span>
        </div>
      </li>
    </ul>
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.experience {
  background-color: var(--background);

  :deep(.container) {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__label {
    font-family: _font(primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--section-label);
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    display: flex;
    gap: 22px;
    min-height: 70px;

    &--last {
      min-height: unset;
    }
  }

  &__timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    width: 10px;
  }

  &__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--section-label);
    flex-shrink: 0;
  }

  &__line {
    width: 2px;
    flex: 1;
    background-color: var(--timeline-line);
    margin-top: 2px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__date {
    font-family: _font(primary);
    font-size: 11px;
    font-weight: 600;
    color: var(--section-label);
  }

  &__role {
    font-family: _font(tertiary);
    font-size: 14px;
    font-weight: 600;
    color: var(--foreground);
  }

  &__company {
    font-family: _font(tertiary);
    font-size: 12px;
    font-weight: 400;
    color: #64748B;
  }
}
</style>
