<script>
import skills from "./skills.json";

export default {
  data() {
    return {
      skills,
    };
  },
};
</script>
<template>
  <section class="skills">
    <div class="skills__items">
      <h2 class="skills__title">Skills</h2>
      <dl class="skills__list">
        <div
          v-for="[key, value] in Object.entries(skills)"
          :key="key"
          class="skills__list-wrap"
        >
          <dt class="skills__list-term">{{ key }}</dt>
          <dd>{{ value.join(" | ") }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style lang="scss">
.skills {
  padding: _indents(small);
}

.skills__list-wrap {
  margin-bottom: 10px;
}

.skills__list-term {
  color: #777;
  font-weight: 700;
  line-height: 1em;
  margin: 0 0 0.5625em 0;
}
</style>