export function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const generateNewArrayData = (len) => {
  const newArr = new Array(len);
  for (let i = 0; i < len; i += 1) {
    let value = Math.floor(Math.random() * (window.innerHeight / 2)) + 10;
    while (newArr.includes(value)) {
      value = Math.floor(Math.random() * (window.innerHeight / 2)) + 10;
    }
    newArr[i] = value;
  }
  return {
    arr: newArr,
    colorState: new Array(len).fill('unsorted'),
    sorted: false,
  };
};

export function updateColorState(colorState, indexes, type) {
  for (let i = 0; i < indexes.length; i += 1) {
    colorState[indexes[i]] = type;
  }
}

export function enableInputs() {
  document.querySelectorAll('button').forEach((button) => {
    button.disabled = false;
  });
  document.querySelectorAll('input').forEach((element) => {
    element.disabled = false;
  });
}

export function disableInputs() {
  document.querySelectorAll('button').forEach((button) => {
    button.disabled = true;
  });
  document.querySelectorAll('input').forEach((element) => {
    element.disabled = true;
  });
}
