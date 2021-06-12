import { swap, sleep } from '../Helper Functions/helper';

export default async function bubbleSort(arr) {
  let noSwap = false;

  while (!noSwap) {
    noSwap = true;
    for (let i = 0; i < arr.length - 1; i += 1) {
      /* change color to being compared */
      // state[i] = stateColor.compare.value;
      // state[i + 1] = stateColor.compare.value;

      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        noSwap = false;
      } else {
        await sleep();
      }

      /* change color back to unsorted */
      // state[i] = stateColor.unsorted.value;
      // state[i + 1] = stateColor.unsorted.value;
    }
  }
  // state.fill(stateColor.sorted.value); /* Change color to sorted */
}
