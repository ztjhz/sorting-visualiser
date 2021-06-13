import React, { useEffect } from 'react';
import './sortingVisualiser.css';

// margin for the array elements
export const marginNum = 1;

const SortingVisualiser = ({ appState, dispatch }) => {
  const { arrData, elementWidth } = appState;
  const { arr, colorState } = arrData;

  const margin = `${marginNum}px`;

  const updateElementWidth = () => {
    dispatch({
      type: 'UPDATE_WIDTH',
    });
  };
  useEffect(() => {
    window.addEventListener('resize', updateElementWidth);
    return () => {
      window.removeEventListener('resize', updateElementWidth);
    };
  }, []);

  return (
    <div className="visualiser">
      {arr.map((element, index) => {
        const className = `arrayElement ${colorState[index]}`;
        const key = `pos-${index}`;
        return (
          <ArrayElement
            key={key}
            value={element}
            width={elementWidth}
            margin={margin}
            className={className}
          />
        );
      })}
    </div>
  );
};

const ArrayElement = ({ value, width, margin, className }) => (
    <div
      className={className}
      id={value}
      style={{
        height: value,
        width,
        margin,
      }}
    />
  );
export default SortingVisualiser;
