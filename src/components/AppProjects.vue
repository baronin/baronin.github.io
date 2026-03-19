<script>
import AppContainer from '@/components/AppContainer.vue';

export default {
  name: 'AppProjects',
  components: { AppContainer },

  data() {
    return {
      projects: [
        {
          title: 'E-Commerce Dashboard',
          description: 'Vue 3 + TypeScript admin panel with real-time analytics, order management and responsive design.',
          tags: ['Vue.js', 'TypeScript', 'Tailwind'],
          image: null,
          link: '#',
        },
        {
          title: 'Weather App',
          description: 'PWA weather application with geolocation, 7-day forecast and beautiful animated backgrounds.',
          tags: ['Vue.js', 'PWA', 'Node.js'],
          image: null,
          link: '#',
        },
      ],
    };
  },
};
</script>

<template>
  <section class="projects">
    <AppContainer>
    <div class="projects__header">
      <i class="fa-regular fa-folder-open projects__icon" />
      <span class="projects__label">{{ $t('projects__label') }}</span>
    </div>

    <ul class="projects__list">
      <li v-for="(project, index) in projects" :key="index" class="projects__card">
        <a :href="project.link" class="projects__image-wrap" target="_blank" rel="noopener noreferrer">
          <img
            v-if="project.image"
            :src="project.image"
            :alt="project.title"
            class="projects__image"
          />
          <div v-else class="projects__image-placeholder" />
        </a>

        <div class="projects__info">
          <h3 class="projects__name">{{ project.title }}</h3>
          <p class="projects__desc">{{ project.description }}</p>
          <ul class="projects__tags">
            <li v-for="tag in project.tags" :key="tag" class="projects__tag">
              {{ tag }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.projects {
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

  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__card {
    background-color: var(--card);
    border-radius: 12px;
    overflow: hidden;
  }

  &__image-wrap {
    display: block;
    height: 160px;
    overflow: hidden;
    text-decoration: none;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__image-placeholder {
    width: 100%;
    height: 100%;
    background-color: var(--muted);
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 14px 16px;
  }

  &__name {
    font-family: _font(tertiary);
    font-size: 15px;
    font-weight: 600;
    color: var(--foreground);
  }

  &__desc {
    font-family: _font(tertiary);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.4;
    color: var(--muted-foreground);
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__tag {
    background-color: var(--secondary);
    border-radius: var(--radius-pill);
    padding: 4px 10px;
    font-family: _font(primary);
    font-size: 10px;
    font-weight: 500;
    color: var(--section-label);
  }
}
</style>
