export default function getMinHeightDistribution(items = [], parts) {
  const groups = Array.from({ length: parts }, () => []);
  items.sort((a, b) => b?.height / b?.width - a?.height / a?.width);

  for (let i = 0; i < items?.length; i++) {
    let curr = items[i];
    let minIndex = 0;
    let minSum = sumArray(groups[0]);
    let j = 1;
    while (j < groups.length) {
      let currSum = sumArray(groups[j]);
      if (currSum < minSum) {
        minSum = currSum;
        minIndex = j;
      }
      j++;
    }
    groups[minIndex].push(curr);
  }
  return groups;
}

function sumArray(arr = []) {
  let res = 0;

  res = arr.reduce((acc, curr) => (acc += curr?.height / curr?.width), 0);

  return res;
}
