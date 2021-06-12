import { swap, sleep } from '../Helper Functions/helper';

export default async function selectionSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let smallIndex = i;
    // state[smallIndex] = stateColor.pivot.value; /* Color the smallest element */
    for (let j = i; j < arr.length; j += 1) {
      // state[j] = stateColor.compare.value; /* being compared color */
      await sleep();
      if (arr[j] < arr[smallIndex]) {
        // state[smallIndex] =
        //   stateColor.unsorted.value; /* change back to unsorted before swapping */
        smallIndex = j;
        // state[smallIndex] =
        //   stateColor.pivot.value; /* color the smallest element */
      } else {
        // state[j] =
        //   stateColor.unsorted.value; /* if not the smallest change back to unsorted color */
      }
    }
    swap(arr, i, smallIndex);
    // state[i] = stateColor.sorted.value; /* element is now sorted */
    if (i !== smallIndex) {
      // state[smallIndex] = stateColor.unsorted.value; /* unsorted color */
    }
  }
}
