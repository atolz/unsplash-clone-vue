import { ref, watchEffect } from "vue";

export default function (query) {
  const matches = ref(true);

  watchEffect((onInvalidate) => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      matches.value = media.matches;
    }

    const onChange = () => {
      matches.value = media.matches;
    };

    media.addEventListener("change", onChange);

    onInvalidate(() => {
      media.removeEventListener("change", onChange);
    });
  });

  return matches;
}
