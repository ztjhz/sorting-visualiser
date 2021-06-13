import './App.css';

import React, { useReducer } from 'react';
import SortingVisualiser from './Sorting Visualiser/sortingVisualiser';
import Controller from './Controller/controller';
import { generateNewArrayData } from './Helper Functions/helper';
import reducer from './Helper Functions/reducer';
import BubbleSort from './Sorting Algorithms/bubbleSort';
import InsertionSort from './Sorting Algorithms/insertionSort';
import MergeSort from './Sorting Algorithms/mergeSort';
import QuickSort from './Sorting Algorithms/quickSort';
import SelectionSort from './Sorting Algorithms/selectionSort';

const initialState = {
  arrLength: 50,
  arrData: generateNewArrayData(50),
  elementWidth: Math.floor((0.8 * window.innerWidth) / 50) - 2,
  algorithms: {
    'Bubble Sort': (appState, dispatch) => BubbleSort(appState, dispatch),
    'Insertion Sort': (appState, dispatch) => InsertionSort(appState, dispatch),
    'Merge Sort': (appState, dispatch) => MergeSort(appState, dispatch),
    'Quick Sort': (appState, dispatch) => QuickSort(appState, dispatch),
    'Selection Sort': (appState, dispatch) => SelectionSort(appState, dispatch),
  },
  isSorting: false,
  sortSpeed: 50,
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Sorting Visualiser</h1>
      <SortingVisualiser appState={state} dispatch={dispatch} />
      <Controller appState={state} dispatch={dispatch} />
    </>
  );
}
