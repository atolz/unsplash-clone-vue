<template>
  <div class="loading-card">
    <div class="info-container">
      <div class="name"></div>
      <div class="location"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@keyframes shimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.loading-card {
  width: 100%;
  height: var(--height);
  max-width: 400px;
  overflow: hidden;
  border-radius: 6px;
  background-color: #f6f6f6;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  position: relative;
  aspect-ratio: 4 / 3;

  .info-container {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;

    .name,
    .location {
      height: 1.1rem;
      width: 60%;
      background: linear-gradient(
        to right,
        #e7e7e7 8%,
        #f0f0f0 18%,
        #e7e7e7 33%
      );
      background-size: 800px 104px;
      animation: shimmer 1.25s infinite linear;
      margin-bottom: 0.5rem;
    }

    .location {
      height: 1rem;
      width: 40%;
    }
  }
}
</style>