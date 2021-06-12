import './App.css';
import React from 'react';
import SortingVisualiser from './Sorting Visualiser/sortingVisualiser';
import { generateArray } from './Helper Functions/helper';

const arr = generateArray(50);

export default function App() {
  return (
    <>
      <SortingVisualiser arr={arr} />
    </>
  );
}
