<script setup>
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "radix-vue";
import { X } from "lucide-vue-next";
defineProps({
  isOpen: Boolean,
  imageUrl: String,
  imageUrlFb: String,
  title: String,
  location: String,
  alt_description: String,
  height: Number,
  width: Number,
  color: String,
  hash: String,
});
</script>

<template>
  <DialogRoot :open="isOpen" @update:open="(open) => !open && $emit('close')">
    <DialogPortal>
      <DialogOverlay class="DialogOverlay">
        <DialogContent class="DialogContent">
          <DialogClose class="IconButton" aria-label="Close">
            <X :size="26" />
          </DialogClose>
          <img
            :src="imageUrl"
            :style="`aspect-ratio: ${width} / ${height};`"
            aria-hidden
          />
          <img
            :src="imageUrlFb"
            :alt="alt_description"
            :style="`aspect-ratio: ${width} / ${height};color:${color}`"
          />
          <div class="info-container">
            <DialogTitle class="title">{{ title }}</DialogTitle>
            <DialogDescription class="location">
              {{ location }}
            </DialogDescription>
          </div>
        </DialogContent>
      </DialogOverlay>
    </DialogPortal>
  </DialogRoot>
</template>

<style lang="scss">
.DialogOverlay {
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
  padding: 50px 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.DialogContent {
  --radius: 0.8rem;
  background-color: white;
  border-radius: var(--radius);
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: relative;
  max-width: 900px;
  width: 90vw;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 400px) {
    --radius: 0;
    width: 100vw;
    max-width: 100vw;
  }

  img {
    position: relative;
    width: 100%;
    // max-height: 74vh;
    object-fit: cover;
    object-position: top 10px;
    z-index: 1;
    border-radius: var(--radius) var(--radius) 0px 0px;

    // @media (max-width: 400px) {
    //   max-height: 90vh;
    // }

    &:nth-child(2) {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
    }
  }

  .info-container {
    padding: 20px 30px 30px;
    @media (max-width: 400px) {
      padding: 20px;
    }

    .title {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
      color: var(--color-primary);
      line-height: 1;

      @media (max-width: 400px) {
        font-size: 1.4rem;
      }
    }

    .location {
      font-size: 1rem;
      color: var(--color-grey);
    }
  }
}
.DialogContent:focus {
  outline: none;
}

.IconButton {
  font-family: inherit;
  border-radius: 100%;
  border: none;
  height: 30px;
  width: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #fff;
  position: absolute;
  top: -34px;
  right: -6%;

  z-index: 10;
  cursor: pointer;

  @media (max-width: 800px) {
    top: -40px;
    right: 4px;
  }
}

@keyframes overlayShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes contentShow {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>