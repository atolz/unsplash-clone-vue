<script setup>
import { RotateCw } from "lucide-vue-next";
import { ref } from "vue";
import Search from "./Search.vue";
defineProps({ search: String, loading: Boolean });
const showSearch = ref(true);
</script>
<template>
  <div class="panel">
    <div class="container">
      <Search
        v-if="showSearch"
        @search="
          (val) => {
            $emit('search', val);
            showSearch = false;
          }
        "
      />
      <div v-if="!showSearch">
        <div v-if="!loading && search" class="status">
          Search Results for <span>"{{ search }}"</span>
          <button
            title="search"
            @click="
              $emit('reset');
              showSearch = true;
            "
          >
            <RotateCw />
          </button>
        </div>
        <div v-if="loading && search" class="status">
          <span>
            Searching for <span>"{{ search }}"</span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.panel {
  display: flex;
  align-items: center;
  width: 100%;
  height: 210px;
  background: #dae2eb;
  padding: 0 20px;

  .container {
    width: 100%;
    max-width: 950px;
    margin: 0 auto;
    .status {
      display: inline-block;
      align-items: center;
      font-size: 2rem;
      font-weight: 600;
      color: var(--color-primary);
      animation: fadeIn 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) backwards;
      @media (max-width: 500px) {
        font-size: 1.2rem;
      }

      span {
        color: var(--color-grey);
        margin-left: 4px;
      }
      button {
        cursor: pointer;
        border: none;
        background: transparent;
        margin-left: 6px;
        @media (max-width: 516px) {
          transform: translateY(4px);
        }
      }
    }
  }
}
</style>