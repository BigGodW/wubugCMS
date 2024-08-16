<template>
  <button class="button" :class="buttonClass" @click="handleClick">
    {{ txt }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonClass: {
      type: String,
      default: "button--primary",
    },
    txt: {
      type: String,
      default: "Button",
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },


  },
};
</script>

<style scoped>
.button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
}
</style>