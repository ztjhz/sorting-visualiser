import { swap, sleep } from '../Helper Functions/helper';

let speed;

async function bubbleSort(arr, dispatch) {
  let noSwap = false;

  while (!noSwap) {
    noSwap = true;
    for (let i = 0; i < arr.length - 1; i += 1) {
      dispatch({ type: 'COLOR_COMPARE', payload: [i, i + 1] });

      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        noSwap = false;
      }
      await sleep(speed);

      dispatch({ type: 'COLOR_UNSORTED', payload: [i, i + 1] });
    }
  }
  dispatch({ type: 'COLOR_SORTED', payload: [...Array(arr.length).keys()] });
}

export default async function BubbleSort(appState, dispatch) {
  const { arrData, sortSpeed } = appState;
  const { arr } = arrData;
  speed = sortSpeed;
  dispatch({ type: 'START_SORT' });
  await bubbleSort(arr, dispatch);
  arrData.sorted = true;
  dispatch({ type: 'SORTED' });
}
