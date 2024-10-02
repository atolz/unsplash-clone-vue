<script setup>
import { computed, onMounted, onUnmounted, ref, watch, watchEffect } from "vue";
import useMedia from "../composables/useMedia.js";
import Card from "./Card.vue";
import Modal from "./Modal.vue";

const { items } = defineProps({
  items: {
    type: Array,
    default: [],
  },
});
const isMobile = useMedia("(max-width: 700px)");
const container = ref(null);
const msnry = ref(null);
const show = ref(false);
onMounted(() => {
  msnry.value = Macy({
    container: container.value,
    trueOrder: false,
    waitForImages: true,
    margin: { y: 24, x: 34 },
    columns: 3,
    breakAt: {
      940: 2,
      500: 1,
    },
  });
  console.log("masondry is", msnry.value);
  msnry.value.on(msnry.value.constants.EVENT_IMAGE_COMPLETE, function (ctx) {
    console.log("all images have loaded");
    show.value = true;
  });
});

onUnmounted(() => {
  console.log("destroying masonry");
  msnry.value.remove();
});

// watch(
//   () => items,
//   () => {
//     console.log("itemd change mansonry call");
//     msnry.value.layout();
//   }
// );

const selection = ref(null);
const isOpen = ref(false);
</script>

<template>
  <Modal v-bind="selection" :isOpen="isOpen" @close="isOpen = false" />
  <div
    :style="show ? 'opacity:1' : 'opacity:0'"
    ref="container"
    class="container"
  >
    <Card
      :style="`--index:${index}`"
      v-for="(item, index) in items"
      :title="item?.user?.name"
      :location="item?.user?.location"
      :imageUrl="item?.urls?.small"
      :key="item.id ?? index"
      :height="item?.height"
      @click="
        console.log('item clikced');
        isOpen = true;
        selection = {
          imageUrl: item?.urls?.regular,
          title: item?.user?.name,
          location: item?.user?.location,
          alt_description: item?.alt_description,
        };
      "
    />
  </div>
</template>


<style lang="scss" scoped>
.container {
  --column-gutter: 40px;
  --columns: 3;
  max-width: 830px;
  padding: 0 20px;
  margin: 0 auto;
  position: relative;
  //   display: block;
  //   display: grid;
  //   grid-column-gap: var(--column-gutter);
  //   row-gap: 28px;
  //   align-items: start;
  //   grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
  transform: translateY(-35px);
  //   grid-template-rows: masonry;
  //   @media (max-width: 800px) {
  //     --column-gutter: 20px;
  //   }
  //   @media (max-width: 700px) {
  //     --column-gutter: 20px;
  //     --columns: 2;
  //   }
}
</style>