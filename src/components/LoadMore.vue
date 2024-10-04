
<script setup>
import { ref, watchEffect } from "vue";
import useInView from "../composables/useInview";
const target = ref(null);
const { inView } = useInView(target, undefined, undefined, [0.5]);

const { loading, initLoadMore } = defineProps({
  loading: Boolean,
  initLoadMore: Boolean,
});

const emits = defineEmits(["more"]);

watchEffect(() => {
  console.log("is load more in view", inView.value, loading);
  if (!loading && inView.value && !initLoadMore) {
    console.log("should fetch more");
    emits("more");
  }
});
</script>

<template>
  <div>
    <div ref="target" class="buffer">
      <button @click="$emit('more')">Load More</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.buffer {
  min-height: 7rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 10px 20px;
}
button {
  width: 100%;
  font-size: 0.8rem;
  font-weight: 500;
  background: linear-gradient(180deg, transparent 50%, rgba(10, 20, 30, 0.02)),
    #fff;
  border: 1px solid #d1d1d1;
  color: #767676;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  padding: 16px 18px;
  cursor: pointer;
  border-radius: 8px;
  outline: none;

  &:hover {
    background: linear-gradient(180deg, transparent 50%, rgba(10, 20, 30, 0.02)),
      #fff;
    border-color: #767676;
    color: #111;
  }
}
</style>