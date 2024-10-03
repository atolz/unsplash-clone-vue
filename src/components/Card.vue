
<script setup>
import { MapPin } from "lucide-vue-next";

defineProps({
  imageUrl: {
    type: String,
    default: "/placeholder.svg?height=300&width=400",
  },
  title: {
    type: String,
    default: "John Doe",
  },
  location: {
    type: String,
    default: "Yosemite National Park, CA",
  },
  height: Number,
  alt_description: String,
});
</script>

<template>
  <div class="card">
    <div class="image-container">
      <img :height="height" :src="imageUrl" :alt="alt_description" />
      <div class="gradient-overlay"></div>
      <div class="info-container">
        <h3 class="photographer-name">{{ title }}</h3>
        <div class="location">
          {{ location }}
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
.card {
  --index: 0;
  width: 100%;
  // height: max-content;
  max-width: 400px;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  // cursor: pointer;
  cursor: zoom-in;
  animation: fadeIn 0.6s cubic-bezier(0.445, 0.05, 0.55, 0.95) backwards;

  @media (max-width: 400px) {
    max-width: 100%;
  }

  .image-container {
    position: relative;
    // aspect-ratio: 4 / 3;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    .gradient-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
    }

    .info-container {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      right: 1rem;
      color: white;

      .photographer-name {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 1px;
      }

      .location {
        display: flex;
        align-items: flex-start;
        font-size: 0.8rem;
      }
    }
  }
}
</style>