import { computed, onMounted, ref, onUnmounted, watchEffect } from "vue";

export default function useInview(target, container = null, rootMargin, thresholds = [0]) {
  const inView = ref(false);

  const options = computed(() => {
    return {
      root: container,
      threshold: thresholds,
      rootMargin,
    };
  });
  const handleIntersect = (entries) => {
    inView.value = entries[0].isIntersecting;
  };
  const observe = new IntersectionObserver(handleIntersect, options.value);

  onMounted(() => {
    observe.observe(target.value);
  });

  return { inView };
}
