// end inclusive
async function quickSort(arr, start, end) {
    if (start >= end) {
        state[start] = 1; /* change color of element to sorted */
        return true;
    }

    let partitionIndex = await partition(arr, start, end);

    await Promise.all([
        quickSort(arr, start, partitionIndex - 1), 
        quickSort(arr, partitionIndex + 1, end)
    ]);
    return true;
}

async function partition(arr, start, end) {
    let partitionIndex = start;
    let pivotIndex = end;
    let pivotValue = arr[pivotIndex];

    state[partitionIndex] = 0; /* update color of element on canvas to partition color */

    for (let i = start; i < end; i++) {
        state[i] = -2 /* change color to being compared */
        if (arr[i] <= pivotValue) {
            await swap(arr, i, partitionIndex);
            state[partitionIndex] = -1; /* change back to partition color before swapping */
            partitionIndex++;
            state[partitionIndex] = 0; /* update color of element to partition */
        }
        state[i] = -1 /* change color back to unsorted */
    }
    await swap(arr, partitionIndex, pivotIndex);
    state[partitionIndex] = 1; /* change color of element to sorted */
    return partitionIndex;
}

async function swap(arr, i, j) {
    await sleep(sort_speed); /* sorting speed */
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function testSort(s) {
    const LEN = 10;
    let arr = new Array(LEN);

    for (let i = 0; i < LEN; i++) {
        arr[i] = Math.floor(Math.random() * 100) + 1;
    }
    console.log(arr);
    s(arr, 0, arr.length - 1);
    console.log(arr);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}