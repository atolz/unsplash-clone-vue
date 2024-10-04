<script setup>
import { ref, defineProps, watch, onMounted, watchEffect, computed } from "vue";
import { Search, X } from "lucide-vue-next";
import { useRoute, useRouter } from "vue-router";

const emits = defineEmits(["search"]);

const searchQuery = ref("");
const inputRef = ref(null);
const router = useRouter();
const route = useRoute();
const defaultValue = computed(() => route.query.search);

const handleSearch = () => {
  searchQuery.value = undefined;
  router.push({ query: { search: undefined } });
};

watchEffect(() => {
  inputRef?.value?.focus();
  searchQuery.value = defaultValue.value;
});
</script>

<template>
  <form @submit.prevent="emits('search', searchQuery)" class="search-bar">
    <Search :size="18" class="icon" />
    <input
      required
      ref="inputRef"
      autofocus
      type="search"
      v-model="searchQuery"
      placeholder="Search for photos"
    />
    <button
      @click="handleSearch"
      type="button"
      title="clear search"
      v-if="searchQuery"
      class="clear"
    >
      <X :size="20" />
    </button>
  </form>
</template>



<style lang="scss" scoped>
.search-bar {
  display: flex;
  align-items: center;
  background-color: #f3f4f6;
  border-radius: 0.4rem;
  padding: 0.7rem 1rem;
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  transition: all 0.3s ease;
  // box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: 400px) {
    padding: 0.4rem 1rem;
  }

  &:focus-within {
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }

  .icon {
    color: #6b7280;
    margin-right: 1rem;
    flex-shrink: 0;
  }

  .clear {
    margin-left: auto;
    border: none;
    background: transparent;
    color: var(--color-primary);
    cursor: pointer;
    flex-shrink: 0;
  }

  input {
    min-width: 0;
    flex-grow: 1;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-primary);

    &::placeholder {
      color: var(--color-primary);
    }
  }
}
</style>