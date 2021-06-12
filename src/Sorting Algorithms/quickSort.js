import { swap, sleep } from '../Helper Functions/helper';

/* Helper function for quicksort */
async function partition(arr, start, end) {
  let partitionIndex = start;
  const pivotIndex = end;
  const pivotValue = arr[pivotIndex];

  // state[partitionIndex] =
  //   stateColor.pivot.value; /* update color of element on canvas to partition color */

  for (let i = start; i < end; i += 1) {
    // state[i] = stateColor.compare.value; /* change color to being compared */
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      // state[partitionIndex] =
      //   stateColor.unsorted.value; /* change back to unsorted color before swapping */
      partitionIndex += 1;
      // state[partitionIndex] =
      //   stateColor.pivot.value; /* update color of element to partition */
    } else {
      await sleep();
    }
    // state[i] = stateColor.unsorted.value; /* change color back to unsorted */
  }
  swap(arr, partitionIndex, pivotIndex);
  // state[partitionIndex] =
  //   stateColor.sorted.value; /* change color of element to sorted */

  return partitionIndex;
}

export default async function quickSort(arr, start, end /* end inclusive */) {
  if (start >= end) {
    // state[start] =
    //   stateColor.sorted.value; /* change color of element to sorted  */
    return true;
  }

  const partitionIndex = await partition(arr, start, end);

  await Promise.all([
    quickSort(arr, start, partitionIndex - 1),
    quickSort(arr, partitionIndex + 1, end),
  ]);
  return true;
}
