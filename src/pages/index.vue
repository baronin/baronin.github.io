<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AppHero from '@/components/AppHero.vue';
import AppAbout from '@/components/AppAbout.vue';
import AppExperience from '@/components/AppExperience.vue';
import AppContact from '@/components/AppContact.vue';

export default {
  name: 'IndexPage',
  components: { DefaultLayout, AppHero, AppAbout, AppExperience, AppContact },
};
</script>

<template>
  <DefaultLayout>
    <template #sidebar>
      <AppHero />
    </template>
    <AppAbout />
    <AppExperience />
    <!-- <AppProjects />-->
    <AppContact />
  </DefaultLayout>
</template>
