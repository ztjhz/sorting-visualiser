import { sleep, swap } from '../Helper Functions/helper';

let speed;

async function insertionSort(arr, colorState, dispatch) {
  /* first value is already sorted */
  dispatch({ type: 'COLOR_SORTED', payload: [0] });

  for (let i = 1; i < arr.length; i += 1) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && key < arr[j]) {
      const colorStateBefore = `COLOR_${colorState[j].toUpperCase()}`;
      dispatch({ type: 'COLOR_COMPARE', payload: [j] });

      await sleep(speed);
      swap(arr, j, j + 1);
      dispatch({ type: 'COLOR_SORTED', payload: [j + 1] });
      dispatch({ type: colorStateBefore, payload: [j] });
      j -= 1;
    }
    arr[j + 1] = key;
    dispatch({ type: 'COLOR_SORTED', payload: [j + 1] });
    await sleep(speed);
  }
}

export default async function InsertionSort(appState, dispatch) {
  const { arrData, sortSpeed } = appState;
  const { arr, colorState } = arrData;
  speed = sortSpeed;
  dispatch({ type: 'START_SORT' });
  await insertionSort(arr, colorState, dispatch);
  arrData.sorted = true;
  dispatch({ type: 'SORTED' });
}
