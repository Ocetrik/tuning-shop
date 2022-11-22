<template>
  <div class="select">
    <select v-model="inputModel">
      <option value="" disabled>
        <slot></slot>
      </option>
      <option v-for="option in options" :key="option.id" :value="option.value">
        {{ option.name }}
      </option>
      <img src="@/static/gray-arrow.svg" alt="" />
    </select>
  </div>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [""],
    },
  },
  methods: {
    // changeOption(event) {
    // this.$emit("update:modelValue", event.target.value);
    // },
  },
  computed: {
    inputModel: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
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
  width: 355px;
  padding: 15px 15px;
  background: #ffffff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select:hover {
  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.04),
    0px 0px 12px rgba(0, 0, 0, 0.04);
}
select::after {
  background-image: url("@/static/gray-arrow.svg");
}
</style>