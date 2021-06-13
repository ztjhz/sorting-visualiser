import { updateColorState, generateNewArrayData, enableInputs } from './helper';
import { marginNum } from '../Sorting Visualiser/sortingVisualiser';

const reducer = (state, action) => {
  const { arrLength, arrData } = state;
  const { colorState } = arrData;
  const { payload } = action;

  switch (action.type) {
    case 'NEW_ARRAY':
      return { ...state, arrData: generateNewArrayData(arrLength) };
    case 'CHANGE_SPEED':
      return { ...state, sortSpeed: payload };
    case 'CHANGE_LENGTH':
      return { ...state, arrLength: payload };
    case 'UPDATE_WIDTH':
      return {
        ...state,
        elementWidth:
          Math.floor((0.8 * window.innerWidth) / arrLength) - marginNum * 2,
      };

    /* cases for sorting */
    case 'START_SORT':
      return { ...state, isSorting: true };
    case 'COLOR_COMPARE':
      updateColorState(colorState, payload, 'compare');
      return { ...state };
    case 'COLOR_UNSORTED':
      updateColorState(colorState, payload, 'unsorted');
      return { ...state };
    case 'COLOR_SORTED':
      updateColorState(colorState, payload, 'sorted');
      return { ...state };
    case 'COLOR_PIVOT':
      updateColorState(colorState, payload, 'partition');
      return { ...state };
    case 'SORTED':
      document.querySelectorAll('.selected').forEach((e) => {
        e.classList.remove('selected');
      });
      enableInputs();
      return {
        ...state,
        isSorting: false,
        arrData: { ...arrData, sorted: true },
      };
    /* end cases for sorting */

    default:
      throw new Error(`Incorrect dispatch action type - ${action.type}`);
  }
};

export default reducer;
