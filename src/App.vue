<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import SearchPanel from "./components/SearchPanel.vue";
import CardsContainer from "./components/CardsContainer.vue";
import CardsLoading from "./components/CardsLoading.vue";
import EmptyState from "./components/EmptyState.vue";
import LoadMore from "./components/LoadMore.vue";
import useFetch from "./composables/useFetch.js";

// Vue Router hooks
const router = useRouter();
const route = useRoute();

const page = ref(1);
const search = ref();

// Set initial search value when router is ready
router.isReady().then(() => {
  search.value = route.query.search || "African";
});

// API URL based on search value and pagination
const url = computed(() =>
  search.value
    ? `https://api.unsplash.com/search/photos/?page=${page.value}&query=${
        search.value
      }&order_by=latest&client_id=${import.meta.env.VITE_APP_ID}`
    : undefined
);

// Fetching data from the API
const { data, loading } = useFetch(url);
const photos = computed(() => data?.value?.results ?? []);
const initLoadMore = ref(true);

// Handle search input and reset pagination
const handleSearch = (val) => {
  search.value = val;
  page.value = 1;
  router.push({ query: { search: val } });
  initLoadMore.value = true;
};
</script>

<template>
  <SearchPanel @search="handleSearch" :loading="loading" :search="search" />
  <CardsContainer
    v-if="(!loading || !initLoadMore) && photos.length"
    :items="photos"
  />
  <CardsLoading v-if="loading && initLoadMore" />
  <EmptyState v-if="!photos.length && !loading" />
  <LoadMore
    v-if="photos.length"
    :loading="loading"
    :initLoadMore="initLoadMore"
    @more="
      page += 1;
      initLoadMore = false;
    "
  />
</template> 

<style lang="scss" scoped>
.extra-loading {
  padding: 10px 0;
  margin: 0 auto;
  width: max-content;
}
</style>
