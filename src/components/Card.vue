
<script setup>
import { MapPin } from "lucide-vue-next";
import { onMounted, onUpdated, ref } from "vue";
import { decode } from "blurhash";

const { hash, width, height } = defineProps({
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
  width: Number,
  color: String,
  hash: String,
  alt_description: String,
});

const image = ref(null);
const canvas = ref(null);
const imgLoaded = ref(false);

onMounted(() => {
  const pixels = decode(hash, image.value.width, image.value.height);
  // console.log("pixesl is", pixels, hash, image.value.width, image.value.height);
  // console.log("canvas is", hash, canvas.value.width, canvas.value.height);
  canvas.value.width = image.value.width;
  canvas.value.height = image.value.height;
  const ctx = canvas.value.getContext("2d");
  const imageData = ctx.createImageData(image.value.width, image.value.height);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);
});
</script>

<template>
  <div class="card">
    <div ref="container" class="image-container">
      <canvas ref="canvas"></canvas>
      <img
        :load="(imgLoaded = true)"
        ref="image"
        :height="height"
        :width="width"
        :src="imageUrl"
        :alt="alt_description"
        :style="`aspect-ratio: ${width} / ${height};`"
        :hash="hash"
      />
      <div class="gradient-overlay"></div>
      <div v-if="imgLoaded" class="info-container">
        <h3 class="photographer-name truncate">{{ title }}</h3>
        <div class="location truncate">
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
  position: relative;
  max-width: 400px;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: zoom-in;
  // animation: fadeIn 0.6s cubic-bezier(0.445, 0.05, 0.55, 0.95) backwards;

  @media (max-width: 400px) {
    max-width: 100%;
  }

  .image-container {
    position: relative;

    img {
      position: relative;
      width: 100%;
      height: auto;
      object-fit: cover;
      z-index: 2;
    }

    canvas {
      position: absolute;
      inset: 0;
      z-index: 1;
    }

    .gradient-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.85),
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0)
      );

      z-index: 2;
    }

    .info-container {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      right: 1rem;
      color: white;
      z-index: 2;

      .photographer-name {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 1px;
      }

      .location {
        font-size: 0.8rem;
      }
    }
  }
}
</style>