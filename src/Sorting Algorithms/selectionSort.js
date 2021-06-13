import { swap, sleep } from '../Helper Functions/helper';

let speed;

async function selectionSort(arr, dispatch) {
  for (let i = 0; i < arr.length; i += 1) {
    let smallIndex = i;

    /* Color the smallest element */
    dispatch({ type: 'COLOR_PIVOT', payload: [smallIndex] });
    for (let j = i; j < arr.length; j += 1) {
      /* being compared color */
      dispatch({ type: 'COLOR_COMPARE', payload: [j] });
      await sleep(speed);
      if (arr[j] < arr[smallIndex]) {
        /* change back to unsorted before swapping */
        dispatch({ type: 'COLOR_UNSORTED', payload: [smallIndex] });
        smallIndex = j;

        /* color the smallest element */
        dispatch({ type: 'COLOR_PIVOT', payload: [smallIndex] });
      } else {
        /* if not the smallest change back to unsorted color */
        dispatch({ type: 'COLOR_UNSORTED', payload: [j] });
      }
    }
    swap(arr, i, smallIndex);

    /* element is now sorted */
    dispatch({ type: 'COLOR_SORTED', payload: [i] });
    if (i !== smallIndex) {
      /* unsorted color */
      dispatch({ type: 'COLOR_UNSORTED', payload: [smallIndex] });
    }
  }
}

export default async function SelectionSort(appState, dispatch) {
  const { arrData, sortSpeed } = appState;
  const { arr } = arrData;
  speed = sortSpeed
  dispatch({ type: 'START_SORT' });
  await selectionSort(arr, dispatch);
  arrData.sorted = true;
  dispatch({ type: 'SORTED' });
}
