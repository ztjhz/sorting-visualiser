import { sleep } from '../Helper Functions/helper';

let speed;

// Helper function for mergeSort
async function merge(arr, start, middle, end, dispatch) {
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
    dispatch({ type: 'COLOR_COMPARE', payload: [i] });
    await sleep(speed);

    if (leftArr[l] <= rightArr[r]) {
      arr[i] = leftArr[l];
      l += 1;
    } else {
      arr[i] = rightArr[r];
      r += 1;
    }

    await sleep(speed);
    dispatch({ type: 'COLOR_UNSORTED', payload: [i] });
    i += 1;
  }

  /* insert left over sorted elements */
  while (l < leftArr.length) {
    arr[i] = leftArr[l];
    dispatch({ type: 'COLOR_COMPARE', payload: [i] });
    await sleep(speed);
    dispatch({ type: 'COLOR_UNSORTED', payload: [i] });

    l += 1;
    i += 1;
  }
  while (r < rightArr.length) {
    arr[i] = rightArr[r];
    dispatch({ type: 'COLOR_COMPARE', payload: [i] });
    await sleep(speed);
    dispatch({ type: 'COLOR_UNSORTED', payload: [i] });

    r += 1;
    i += 1;
  }
}

async function mergeSort(arr, start, end, dispatch) {
  if (start >= end) {
    return;
  }
  const middle = Math.floor((start + end) / 2);

  await Promise.all([
    mergeSort(arr, start, middle, dispatch),
    mergeSort(arr, middle + 1, end, dispatch),
  ]);
  await merge(arr, start, middle, end, dispatch);
}

export default async function MergeSort(appState, dispatch) {
  const { arrData, sortSpeed } = appState;
  const { arr } = arrData;
  speed = sortSpeed;
  dispatch({ type: 'START_SORT' });
  await mergeSort(arr, 0, arr.length - 1, dispatch);
  arrData.sorted = true;
  dispatch({ type: 'COLOR_SORTED', payload: [...Array(arr.length).keys()] });
  dispatch({ type: 'SORTED' });
}
