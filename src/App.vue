<script setup>
import Card from "./components/Card.vue";
import CardsLoading from "./components/CardsLoading.vue";
import LoadingCard from "./components/LoadingCard.vue";
import CardsContainer from "./components/CardsContainer.vue";
import CardsContainer2 from "./components/CardsContainer2.vue";
import SearchPanel from "./components/SearchPanel.vue";
import useFetch from "./composables/useFetch.js";
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const search = computed({
  get() {
    return route.query.search;
  },
  set(search) {
    router.push({ query: { search } });
  },
});

const url = computed(
  () =>
    `https://api.unsplash.com/search/photos/?query=${
      search.value ?? "African"
    }&client_id=${import.meta.env.VITE_APP_ID}`
);
const { data, loading } = useFetch(url);
const photos = computed(() => data?.value?.results);
</script>

<template>
  <SearchPanel
    @search="(val) => (search = val)"
    :loading="loading"
    :search="search"
  />
  <CardsContainer v-if="!loading" :items="photos" />
  <CardsLoading v-if="loading" />
</template>

<style lang="scss" scoped>
</style>
