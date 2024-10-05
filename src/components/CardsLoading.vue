<script setup>
import LoadingCard from "./LoadingCard.vue";
</script>

<template>
  <div class="container">
    <div class="sub">
      <LoadingCard style="--height: 280px" />
      <LoadingCard style="--height: 350px" />
    </div>
    <div class="sub">
      <LoadingCard style="--height: 380px" />
      <LoadingCard style="--height: 350px" />
    </div>
    <div class="sub">
      <LoadingCard style="--height: 320px" />
      <LoadingCard style="--height: 350px" />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.container {
  --column-gutter: 44px;
  --columns: 3;
  max-width: 830px;
  padding: 0 20px;
  margin: 0 auto;
  display: grid;
  grid-column-gap: var(--column-gutter);
  align-items: start;
  grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
  transform: translateY(-35px);
  @media (max-width: 800px) {
    --column-gutter: 20px;
  }
  @media (max-width: 700px) {
    --column-gutter: 10px;
    --columns: 2;
  }
  @media (max-width: 300px) {
    --column-gutter: 10px;
    --columns: 1;
  }

  .sub {
    display: grid;
    row-gap: 28px;
    &:nth-child(2) {
      @media (max-width: 300px) {
        display: none;
      }
    }
    &:nth-child(3) {
      @media (max-width: 700px) {
        display: none;
      }
    }

    @media (max-width: 700px) {
      row-gap: 10px;
    }
  }
}
</style>