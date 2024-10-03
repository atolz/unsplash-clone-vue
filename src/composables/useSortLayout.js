import { computed, toValue, watchEffect } from "vue";

export default function useSortLayout(list, parts) {
  const groups = computed(() => {
    let gs = Array.from({ length: parts }, () => []);
    const items = computed(() => toValue(list)?.sort((a, b) => a?.width / a?.height - b?.width / b?.height));

    for (let i = 0; i < items?.value.length; i++) {
      let curr = items?.value[i];
      let minIndex = 0;
      let minSum = sumArray(gs[0]);
      let j = 1;
      while (j < gs.length) {
        let currSum = sumArray(gs[j]);
        if (currSum < minSum) {
          minSum = currSum;
          minIndex = j;
        }
        j++;
      }
      gs[minIndex].push(curr);
    }

    return gs;
  });
  //   console.log("result", groups.value, parts);

  watchEffect(() => {
    console.log("list change use sort", toValue(list));
  });

  console.log("groups.value is///", groups.value);

  return { groups };
}

function sumArray(arr = []) {
  let res = 0;

  res = arr.reduce((acc, curr) => (acc += curr?.height), 0);

  return res;
}

console.log("resu", useSortLayout([1, 4, 2, 3, 1, 8], 2));
