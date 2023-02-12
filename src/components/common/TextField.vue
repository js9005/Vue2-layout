<template>
  <div>
    <span v-if="captionText" class="caption">{{ captionText }}</span>
    <v-text-field
      :value="value"
      :clearable="clearable"
      :counter="counter"
      dense
      :disabled="disabled"
      :filled="filled"
      :height="height"
      :hide-details="hideDetails"
      hide-spin-buttons
      :label="label"
      :outlined="outlined"
      :placeholder="placeholder"
      :readonly="readonly"
      :rounded="rounded"
      :rules="rules"
      :suffix="suffix"
      :type="type"
      @input="updateValue"
      @keydown.enter="keydownEnter"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    captionText: {
      type: String,
      default: "",
    },

    value: {
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    counter: {
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    filled: {
      type: Boolean,
      default: false,
    },
    height: {
      type: Number,
      default: 40,
    },
    hideDetails: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
      default: "",
    },
    outlined: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array,
    },
    suffix: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  methods: {
    updateValue(v) {
      this.$emit("input", v);
    },
    keydownEnter() {
      this.$emit("keydownEnter");
    },
  },
};
</script>
