<script setup>
import { computed, ref, watchEffect } from "vue";
import useMedia from "../composables/useMedia";
import getMinHeightDistribution from "../utils/getMinHeightDistribution";
import Card from "./Card.vue";
import Modal from "./Modal.vue";

const { items } = defineProps({
  items: {
    type: Array,
    default: [],
  },
});
const isTab = useMedia("(max-width: 700px)");
const isMobile = useMedia("(max-width: 300px)");
const cols = computed(() => {
  if (isMobile.value) {
    return 1;
  }
  if (isTab.value) {
    return 2;
  } else {
    return 3;
  }
});

const newGroups = computed(() => getMinHeightDistribution(items, cols.value));

const groups = computed((groups = [[], [], []]) => {
  newGroups?.value.forEach((items, i) => {
    items.forEach((item) => groups[i]?.push(item));
  });
  return groups;
});

const selection = ref(null);
const isOpen = ref(false);
</script>

<template>
  <Modal v-bind="selection" :isOpen="isOpen" @close="isOpen = false" />
  <div class="container">
    <div class="sub" v-for="(group, i) in groups" :key="i">
      <Card
        :style="`--index:${index}`"
        v-for="(item, index) in group"
        :title="item?.user?.name"
        :location="item?.user?.location"
        :imageUrl="item?.urls?.small"
        :key="item.id ?? index"
        :height="item?.height"
        :width="item?.width"
        :hash="item?.blur_hash"
        :color="item?.color"
        @click="
          console.log('item clikced');
          isOpen = true;
          selection = {
            imageUrl: item?.urls?.regular,
            imageUrlFb: item?.urls?.small,
            title: item?.user?.name,
            location: item?.user?.location,
            alt_description: item?.alt_description,
            width: item?.width,
            height: item?.height,
            hash: item?.blur_hash,
            color: item?.color,
          };
        "
      />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.container {
  --column-gutter: 34px;
  --columns: 3;
  max-width: 830px;
  padding: 0 20px;
  margin: 0 auto;
  display: grid;
  grid-column-gap: var(--column-gutter);
  align-items: start;
  grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
  transform: translateY(-35px);
  min-height: calc(100vh - 300px);
  @media (max-width: 800px) {
    --column-gutter: 20px;
  }
  @media (max-width: 700px) {
    padding: 0 10px;
    --column-gutter: 10px;
    --columns: 2;
  }
  @media (max-width: 300px) {
    // --column-gutter: 20px;
    --columns: 1;
  }
  .sub {
    display: grid;
    row-gap: 28px;
    margin-bottom: 10px;
    @media (max-width: 700px) {
      row-gap: 12px;
    }
  }
}
</style>