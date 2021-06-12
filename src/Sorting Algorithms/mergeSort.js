import { sleep } from '../Helper Functions/helper';

async function merge(arr, start, middle, end) {
  /* end inclusive */
  const leftArr = Array(middle + 1 - start);
  const rightArr = Array(end - middle);
  let index = start;
  /* make a copy of the left part of the array */
  for (let i = 0; i < leftArr.length; i += 1) {
    leftArr[i] = arr[index];
    index += 1;
  }
  /* make a copy of the right part of the array */
  for (let i = 0; i < rightArr.length; i += 1) {
    rightArr[i] = arr[index];
    index += 1;
  }

  let l = 0;
  let r = 0;
  let i = start; /* index of the array to insert sorted value */
  while (l < leftArr.length && r < rightArr.length) {
    // state[i] = stateColor.compare.value; /* coloring purpose */
    await sleep();
    if (leftArr[l] <= rightArr[r]) {
      arr[i] = leftArr[l];
      l += 1;
    } else {
      arr[i] = rightArr[r];
      r += 1;
    }
    await sleep();
    // state[i] = stateColor.unsorted.value; /* coloring purpose */
    i += 1;
  }

  /* insert left over sorted elements */
  while (l < leftArr.length) {
    arr[i] = leftArr[l];
    // state[i] = stateColor.compare.value; /* coloring purpose */
    await sleep();
    // state[i] = stateColor.unsorted.value; /* coloring purpose */
    l += 1;
    i += 1;
  }
  while (r < rightArr.length) {
    arr[i] = rightArr[r];
    // state[i] = stateColor.compare.value; /* coloring purpose */
    await sleep();
    // state[i] = stateColor.unsorted.value; /* coloring purpose */
    r += 1;
    i += 1;
  }
}

export default async function mergeSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  const middle = Math.floor((start + end) / 2);

  await Promise.all([
    mergeSort(arr, start, middle),
    mergeSort(arr, middle + 1, end),
  ]);
  await merge(arr, start, middle, end);
}
