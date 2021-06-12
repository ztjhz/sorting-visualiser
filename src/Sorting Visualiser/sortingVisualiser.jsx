/* eslint-disable arrow-body-style */
import React from 'react';
import './sortingVisualiser.css';

const SortingVisualiser = ({ arr }) => {
  const marginNum = 1;
  const margin = `${marginNum}px`;
  const elementWidth =
    Math.floor((0.8 * window.innerWidth) / arr.length) - marginNum * 2;

  return (
    <div className="visualiser">
      {arr.map((value) => {
        return (
          <div
            key={value}
            className="arrayElement"
            id={value}
            style={{
              height: value,
              background: 'purple',
              width: elementWidth,
              margin
            }}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default SortingVisualiser;
