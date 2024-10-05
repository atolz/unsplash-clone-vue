
<script setup>
import InView from "./InView.vue";
import LoadingMore from "./LoadingMore.vue";

const { loading, initLoadMore } = defineProps({
  loading: Boolean,
  initLoadMore: Boolean,
});
</script>

<template>
  <div>
    <div class="buffer">
      <button @click="$emit('more')" v-if="initLoadMore">Load More</button>
      <LoadingMore v-if="loading" />
      <InView @visible="$emit('more')" v-if="!loading && !initLoadMore" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  height: 2rem;
  widows: 100%;
}
.buffer {
  min-height: 7rem;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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