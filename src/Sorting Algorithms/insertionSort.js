import { sleep } from '../Helper Functions/helper';

export default async function insertionSort(arr) {
  /* first value is already sorted */
  // state[0] = stateColor.sorted.value;
  for (let i = 1; i < arr.length; i += 1) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && key < arr[j]) {
      // const colorBefore =
      //   state[j]; /* keep track of the color os that we can change back later */
      // state[j] = stateColor.compare.value; /* change to compare color */
      await sleep();
      arr[j + 1] = arr[j];
      // state[j + 1] = stateColor.sorted.value; /* change to sorted color */
      // state[j] = colorBefore; /* change back the color */
      j -= 1;
    }
    arr[j + 1] = key;
    // state[j + 1] = stateColor.sorted.value; /* change to sorted color */
    await sleep();
  }
}
