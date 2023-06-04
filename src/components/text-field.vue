<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control" :class="{ 'has-icons-left has-icons-right': iconClasses }">
      <input :class="inputClasses" :type="type" :placeholder="placeholder" :value="value" @input="handleInput" />
      <span v-if="iconClasses" class="icon is-small is-left">
        <i :class="iconClasses"></i>
      </span>
      <!--      <span class="icon is-small is-right" v-if="showValidIcon">
        <i class="fas fa-check"></i>
      </span>-->
    </div>
    <!--    <p class="help is-danger" v-if="showErrorMessage">{{ errorMessage }}</p>-->
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    iconClasses: {
      type: String,
      default: "",
    },
  },
  computed: {
    inputClasses() {
      return {
        input: true,
        // "is-success": this.isValid,
        // "is-danger": this.hasError,
      };
    },
    /*isValid() {
      return this.validation ? this.validation(this.value) : false;
    },
    hasError() {
      return this.validation ? !this.validation(this.value) : false;
    },
    showValidIcon() {
      return this.type === "text" && this.isValid;
    },
    showErrorMessage() {
      return this.type === "email" && this.hasError;
    },
    errorMessage() {
      return this.hasError ? "This email is invalid" : "";
    },*/
  },
  methods: {
    handleInput(event) {
      this.$emit("update:value", event.target.value);
    },
  },
};
</script>
