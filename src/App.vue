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
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

router.isReady().then(() => {
  pagination.value.page = 1;
  if (!pagination.value.search) {
    pagination.value.search = "African";
  }
});

// const pagination = ref({ page: 1, search: undefined });

// watch(
//   () => pagination.value.search,
//   () => {
//     router.push({ query: { search: pagination.value.search } });
//   }
// );
const pagination = computed({
  get() {
    return { search: route.query.search, page: route.query.page };
  },
  set(data) {
    router.push({ query: { search: data.search, page: data.page } });
  },
});

const url = computed(() =>
  pagination.value.search
    ? `https://api.unsplash.com/search/photos/?page=${
        pagination?.value?.page
      }&query=${pagination.value?.search}&client_id=${
        import.meta.env.VITE_APP_ID
      }`
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
        pagination = { page: 1, search: val };
        initLoadMore = true;
      }
    "
    :loading="loading"
    :search="pagination?.search"
  />
  <!-- <CardsContainer2 v-if="!loading || !initLoadMore" :items="photos" /> -->
  <CardsContainer v-if="!loading || !initLoadMore" :items="photos" />
  <CardsLoading v-if="loading && initLoadMore" />
  <LoadMore
    v-if="!loading"
    :loading="loading"
    :initLoadMore="initLoadMore"
    @more="
      pagination = { ...pagination, page: parseInt(pagination.page) + 1 };
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
