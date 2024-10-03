<script setup>
import Card from "./components/Card.vue";
import CardsLoading from "./components/CardsLoading.vue";
import LoadingCard from "./components/LoadingCard.vue";
import LoadingMore from "./components/LoadingMore.vue";
import CardsContainer from "./components/CardsContainer.vue";
import CardsContainer2 from "./components/CardsContainer2.vue";
import SearchPanel from "./components/SearchPanel.vue";
import LoadMore from "./components/LoadMore.vue";
import useFetch from "./composables/useFetch.js";
import { computed, onMounted, ref, watch } from "vue";
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

onMounted(() => {
  if (!search.value) {
    search.value = "African";
  }
});
const url = computed(() =>
  search.value
    ? `https://api.unsplash.com/search/photos/?page=${page.value}&query=${
        search.value
      }&client_id=${import.meta.env.VITE_APP_ID}`
    : undefined
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
        page = 1;
        initLoadMore = true;
      }
    "
    :loading="loading"
    :search="search"
  />
  <CardsContainer v-if="!loading || !initLoadMore" :items="photos" />
  <CardsLoading v-if="loading && initLoadMore" />
  <LoadMore
    v-if="!loading"
    :loading="loading"
    :initLoadMore="initLoadMore"
    @more="
      page = page + 1;
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
