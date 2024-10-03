

<template>
  <div class="spinner">
    <div class="dot-container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: spin 0.6s linear infinite;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #222222a2;
  border-radius: 100%;
}
.dot-container {
  position: relative;
  height: 18px;
  width: 18px;

  .dot {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: #f0f0f0;

    &:nth-child(1) {
      top: 0px;
      left: 0px;
    }
    &:nth-child(2) {
      top: 0px;
      right: 0px;
    }
    &:nth-child(3) {
      bottom: 0px;
      left: 0px;
    }
    &:nth-child(4) {
      bottom: 0px;
      right: 0px;
    }
  }
}
</style>