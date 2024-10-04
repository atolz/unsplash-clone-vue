import axios from "axios";
import { ref, toValue, watchEffect } from "vue";

export default function useFetch(url) {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(null);
  let controller = ref(null);

  watchEffect(async (cleanup) => {
    if (!url) {
      return;
    }
    controller = new AbortController();
    loading.value = true;
    try {
      const resp = await axios.get(toValue(url), { signal: controller.signal });
      data.value = resp.data;
      error.value = null;
      loading.value = false;
    } catch (error) {
      error.value = error?.message ?? "Error fetching!";
      loading.value = false;
    }

    cleanup(() => {
      controller.abort();
    });
  });

  return { data, error, loading };
}
