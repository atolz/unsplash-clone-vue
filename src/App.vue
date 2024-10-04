<script setup>
import Card from "./components/Card.vue";
import CardsLoading from "./components/CardsLoading.vue";
import LoadingCard from "./components/LoadingCard.vue";
import LoadingMore from "./components/LoadingMore.vue";
import CardsContainer from "./components/CardsContainer.vue";
// import CardsContainer2 from "./components/CardsContainer2.vue";
import SearchPanel from "./components/SearchPanel.vue";
import LoadMore from "./components/LoadMore.vue";
import useFetch from "./composables/useFetch.js";
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const page = ref(1);
const search = computed({
  get() {
    return route.query.search;
  },
  set(search) {
    router.push({ query: { search } });
  },
});
watchEffect(() => {
  console.log("search change", search.value);
});
const url = computed(
  () =>
    `https://api.unsplash.com/search/photos/?page=${page.value}&query=${
      search.value ?? "African"
    }&client_id=${import.meta.env.VITE_APP_ID}`
);
const { data, loading } = useFetch(url);
const photos = computed(() => data?.value?.results ?? []);
const initLoadMore = ref(true);
</script>

<template>
  <SearchPanel
    @search="
      (val) => {
        search = val;

        initLoadMore = true;
      }
    "
    :loading="loading"
    :search="search"
  />
  <!-- <CardsContainer2 v-if="!loading || !initLoadMore" :items="photos" /> -->
  <CardsContainer v-if="!loading || !initLoadMore" :items="photos" />
  <CardsLoading v-if="loading && initLoadMore" />
  <LoadMore
    v-if="!loading"
    :loading="loading"
    :initLoadMore="initLoadMore"
    @more="
      page += 1;
      initLoadMore = false;
    "
  />
  <div class="extra-loading">
    <LoadingMore v-if="!initLoadMore && loading" />
  </div>
</template> 

<style lang="scss" scoped>
.extra-loading {
  padding: 10px 0;
  margin: 0 auto;
  width: max-content;
}
</style>
