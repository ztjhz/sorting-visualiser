import { swap, sleep } from '../Helper Functions/helper';

let speed;

/* Helper function for quicksort */
async function partition(arr, start, end, dispatch) {
  let partitionIndex = start;
  const pivotIndex = end;
  const pivotValue = arr[pivotIndex];

  /* update color of element on canvas to partition color */
  dispatch({ type: 'COLOR_PIVOT', payload: [partitionIndex] });

  for (let i = start; i < end; i += 1) {
    /* change color to being compared */
    dispatch({ type: 'COLOR_COMPARE', payload: [i] });

    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
     
      /* change back to unsorted color before swapping */
      dispatch({ type: 'COLOR_UNSORTED', payload: [partitionIndex] });
      partitionIndex += 1;
      
      /* update color of element to partition */
      dispatch({ type: 'COLOR_PIVOT', payload: [partitionIndex] });
    }
    await sleep(speed);
    
    /* change color back to unsorted */
    dispatch({ type: 'COLOR_UNSORTED', payload: [i] });
  }
  swap(arr, partitionIndex, pivotIndex);
  
  /* change color of element to sorted */
  dispatch({ type: 'COLOR_SORTED', payload: [partitionIndex] });

  return partitionIndex;
}

async function quickSort(arr, start, end, dispatch) {
  if (start >= end) {
    /* change color of element to sorted  */
    dispatch({ type: 'COLOR_SORTED', payload: [start] });
    return true;
  }

  const partitionIndex = await partition(arr, start, end, dispatch);

  await Promise.all([
    quickSort(arr, start, partitionIndex - 1, dispatch),
    quickSort(arr, partitionIndex + 1, end, dispatch),
  ]);
  return true;
}

export default async function QuickSort(appState, dispatch) {
  const { arrData, sortSpeed } = appState;
  const { arr } = arrData;
  speed = sortSpeed;
  dispatch({ type: 'START_SORT' });
  await quickSort(arr, 0, arr.length - 1, dispatch);
  arrData.sorted = true;
  dispatch({ type: 'SORTED' });
}
