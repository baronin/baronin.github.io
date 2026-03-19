<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AppHero from '@/components/AppHero.vue';
import AppAbout from '@/components/AppAbout.vue';
import AppExperience from '@/components/AppExperience.vue';
import AppProjects from '@/components/AppProjects.vue';
import AppContact from '@/components/AppContact.vue';

export default {
  name: 'IndexPage',
  components: { DefaultLayout, AppHero, AppAbout, AppExperience, AppProjects, AppContact },
};
</script>

<template>
  <DefaultLayout>
    <AppHero />
    <AppAbout />
    <AppExperience />
    <AppProjects />
    <AppContact />
  </DefaultLayout>
</template>
