<script setup>
import { ref, watchEffect } from "vue";
import useInView from "../composables/useInview";

const emit = defineEmits(["visible"]);

const target = ref(null);
const { inView } = useInView(target, undefined, undefined, [1]);

watchEffect(() => {
  console.log("is load more in view", inView.value);
  if (inView.value) {
    console.log("should fetch more");
    emit("visible");
  }
});
</script>
<template>
  <div ref="target"></div>
</template>


<style lang="scss" scoped>
div {
  height: 2rem;
}
</style>