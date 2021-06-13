import React from 'react';
import { disableInputs } from '../Helper Functions/helper';

const Controller = ({ appState, dispatch }) => {
  const { algorithms, arrData, sortSpeed, arrLength } = appState;
  const { colorState, sorted } = arrData;

  const startSort = (e) => {
    // reset the array color to unsorted before sorting again if array already sorted
    if (sorted) colorState.fill('unsorted');

    disableInputs();
    e.target.classList.add('selected');

    // run the algorithm for sorting
    const algo = e.target.value;
    algorithms[algo](appState, dispatch);
  };
  return (
    <>
      <div className="controllerContainer">
        <div className="row">
          Algorithms:
          {Object.keys(algorithms).map((algorithm) => (
            <button
              type="button"
              key={algorithm}
              value={algorithm}
              onClick={startSort}
            >
              {algorithm}
            </button>
          ))}
        </div>
        <div className="row">
          Size ({arrLength}):
          <input
            type="range"
            min="10"
            max="70"
            value={arrLength}
            className="slider"
            id="size"
            onChange={(e) => {
              dispatch({
                type: 'CHANGE_LENGTH',
                payload: Number(e.target.value),
              });
            }}
          />
          <button
            type="button"
            onClick={() => {
              dispatch({ type: 'NEW_ARRAY' });
              dispatch({ type: 'UPDATE_WIDTH' });
            }}
          >
            Generate new array
          </button>
        </div>
        <div className="row">
          Speed:
          <input
            type="range"
            min="10"
            max="500"
            value={sortSpeed}
            className="slider"
            id="speed"
            style={{ direction: 'rtl' }}
            onChange={(e) => {
              dispatch({
                type: 'CHANGE_SPEED',
                payload: Number(e.target.value),
              });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Controller;
