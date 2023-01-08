<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import i18n from "../../plugins/i18n";

const languages = ref([
  { language: "en", title: "EN" },
  { language: "ua", title: "UA" },
]);

const selected = ref([{ language: "en", title: "EN" }]);

const { t } = useI18n({
  inheritLocale: true,
  useScope: "local",
});
const changeLocale = (locale) => {
  i18n.global.locale.value = locale;
};
</script>
<template>
  <ul class="lang">
    <li
      v-for="lang in languages"
      :key="lang.title"
      :value="lang.language"
      @click="changeLocale(lang.language)"
    >
      <a>{{ lang.title }}</a>
    </li>
  </ul>
</template>

<style lang="scss">
.lang {
  margin-top: 20px;
  margin-bottom: 20px;

  li {
    display: inline-block;
    margin: 0 5px;

    a {
      display: inline-block;
      padding: 10px 15px;
      text-transform: lowercase;
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
      outline: 1px solid rgba(255, 255, 255, 0.5);
      outline-offset: 0;
      text-shadow: none;
      transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      border: 1px solid transparent;

      &:hover {
        border: 1px solid;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
          0 0 20px rgba(255, 255, 255, 0.2);
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 5px;
        text-shadow: 1px 1px 2px #427388;
      }

      &.en:lang(en),
      &.ua:lang(ua) {
        font-weight: 700;
        text-transform: uppercase;
        color: #1f6350;
      }
    }
  }
}
</style>