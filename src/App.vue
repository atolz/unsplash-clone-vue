<script setup>
import Card from "./components/Card.vue";
import CardsLoading from "./components/CardsLoading.vue";
import LoadingCard from "./components/LoadingCard.vue";
import LoadingMore from "./components/LoadingMore.vue";
import CardsContainer from "./components/CardsContainer.vue";
import EmptyState from "./components/EmptyState.vue";
// import CardsContainer2 from "./components/CardsContainer2.vue";
import SearchPanel from "./components/SearchPanel.vue";
import LoadMore from "./components/LoadMore.vue";
import useFetch from "./composables/useFetch.js";
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const page = ref(1);
const search = ref();
const defaultValue = computed(() => route.query.search);

router.isReady().then(() => {
  if (route.query.search) {
    search.value = route.query.search;
  } else {
    search.value = "African";
  }
});

const url = computed(() =>
  search.value
    ? `https://api.unsplash.com/search/photos/?page=${page.value}&query=${
        search.value
      }&order_by=latest&client_id=${import.meta.env.VITE_APP_ID}`
    : undefined
);
const { data, loading } = useFetch(url);
const photos = computed(() => data?.value?.results ?? []);
const initLoadMore = ref(true);

const onSearch = (val) => {
  search.value = val;
  page.value = 1;
  router.push({ query: { search: val } });
  initLoadMore.value = true;
};
</script>

<template>
  <SearchPanel
    @search="onSearch"
    :loading="loading"
    :search="search"
    :defaultValue="defaultValue"
  />
  <!-- <CardsContainer2 v-if="!loading || !initLoadMore" :items="photos" /> -->
  <CardsContainer
    v-if="(!loading || !initLoadMore) && photos.length"
    :items="photos"
  />
  <CardsLoading v-if="loading && initLoadMore" />
  <EmptyState v-if="!photos.length" />
  <LoadMore
    v-if="!loading && photos.length"
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

  div {
    color: black;
    margin: 200px;
  }
}
</style>
