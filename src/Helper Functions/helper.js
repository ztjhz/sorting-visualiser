export function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const sortSpeed = 50;

export async function sleep() {
  return new Promise((resolve) => setTimeout(resolve, sortSpeed));
}

export const generateArray = (len) => {
  const newArr = new Array(len);
  for (let i = 0; i < len; i += 1) {
    let value = Math.floor(Math.random() * 200) + 10;
    while (newArr.includes(value)) {
      value = Math.floor(Math.random() * 200) + 10;
    }
    newArr[i] = value;
  }
  return newArr;
};
