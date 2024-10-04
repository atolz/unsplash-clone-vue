
<script setup>
import { PackageOpen } from "lucide-vue-next";
</script>

<template>
  <div>
    <PackageOpen :size="90" />
    <p>
      Oops... no images found.<br />
      Try a different search!
    </p>
  </div>
</template>


<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  color: var(--color-grey);
  text-align: center;
  p {
    color: var(--color-grey);
    font-size: 1.6rem;
    margin-top: 1rem;

    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }
}
</style>