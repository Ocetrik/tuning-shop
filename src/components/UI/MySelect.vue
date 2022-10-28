<template>
  <div class="sort-product">
    <select v-model="modelValue" @change="changeOption">
      <option selected value="">По умолчанию</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "MySelect",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.select select {
  font-family: "OpenSans-Regular";
  font-size: 14px;
  line-height: 19px;
  border: 0.8px solid #d9d9d9;
  border-radius: 2px;
  padding: 11px 113px 11px 15px;
}
</style>