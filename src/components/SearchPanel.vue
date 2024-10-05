<script setup>
import { RotateCw } from "lucide-vue-next";
import { ref } from "vue";
import Search from "./Search.vue";

const props = defineProps({ search: String, loading: Boolean });
const showSearch = ref(true);
</script>

<template>
  <div class="panel">
    <div class="container">
      <!-- Search component -->
      <Search
        v-if="showSearch"
        @search="
          (val) => {
            $emit('search', val);
            showSearch = false;
          }
        "
      />

      <!-- Status when search is hidden -->
      <div v-if="!showSearch">
        <div v-if="!loading && search" class="status">
          <p>
            Search Results for
            <q
              ><span>{{ search }}</span></q
            >
          </p>
          <button
            class="reset-button"
            title="Reset search"
            aria-label="Reset search"
            @click="
              $emit('reset');
              showSearch = true;
            "
          >
            <RotateCw />
          </button>
        </div>

        <!-- Display loading status while searching -->
        <div v-if="loading && search" class="status">
          <p>
            Searching for
            <q
              ><span>{{ search }}</span></q
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Keyframe animation for fading in */
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
  background-color: #dae2eb;
  padding: 0 20px;

  @media (max-width: 400px) {
    height: 185px;
  }
}

.container {
  width: 100%;
  max-width: 950px;
  margin: 0 auto;

  .status {
    display: inline-flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 600;
    color: var(--color-primary);
    animation: fadeIn 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) backwards;

    @media (max-width: 500px) {
      font-size: 1.2rem;
    }

    /* Styling for blockquotes */
    q {
      color: var(--color-grey);
      margin-left: 4px;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;

      span {
        font-family: var(--font-family);
      }
    }

    .reset-button {
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
</style>
