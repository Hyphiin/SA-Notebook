<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="label" class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          v-model="textValue"
          @input="$emit('update:modelValue', textValue)"
          class="textarea"
          :placeholder="placeholder"
          ref="textareaRef"
          v-autofocus
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * imports
 */
import { ref, watch } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

/**
 * props
 */
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  modelValue: {
    type: String,
    requried: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
  },
});
const textValue = ref(props.modelValue);
watch(
  () => props.modelValue,
  (newValue) => {
    textValue.value = newValue;
  }
);
/**
 * emits
 */
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(["update:modelValue"]);

/**
 * focus textarea
 */
const textareaRef = ref(null);
const focusTextarea = () => {
  textareaRef.value.focus();
};

defineExpose({ focusTextarea });
</script>
