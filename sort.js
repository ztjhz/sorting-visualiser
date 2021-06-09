async function quickSort(arr, start, end /* end inclusive */) {
    if (start >= end) {
        state[start] = stateColor.sorted.value; /* change color of element to sorted  */
        return true;
    }

    let partitionIndex = await partition(arr, start, end);

    await Promise.all([
        quickSort(arr, start, partitionIndex - 1), 
        quickSort(arr, partitionIndex + 1, end)
    ]);
    return true;
}

/* Helper function for quicksort */
async function partition(arr, start, end) {
    let partitionIndex = start;
    let pivotIndex = end;
    let pivotValue = arr[pivotIndex];

    state[partitionIndex] = stateColor.pivot.value; /* update color of element on canvas to partition color */

    for (let i = start; i < end; i++) {
        state[i] = stateColor.compare.value /* change color to being compared */
        if (arr[i] < pivotValue) {
            await swap(arr, i, partitionIndex);
            state[partitionIndex] = stateColor.unsorted.value; /* change back to unsorted color before swapping */
            partitionIndex++;
            state[partitionIndex] = stateColor.pivot.value; /* update color of element to partition */
        }
        state[i] = stateColor.unsorted.value /* change color back to unsorted */
    }
    await swap(arr, partitionIndex, pivotIndex);
    state[partitionIndex] = stateColor.sorted.value; /* change color of element to sorted */

    return partitionIndex;
}

/* Bubble sort */
async function bubbleSort(arr) {
    let noSwap = false;

    while (!noSwap) {
        noSwap = true;
        for (let i = 0; i < arr.length - 1; i++) {
            /* change color to being compared */
            state[i] = stateColor.compare.value; 
            state[i + 1] = stateColor.compare.value;

            if (arr[i] > arr[i+1]) {
                await swap(arr, i, i + 1);
                noSwap = false;
            }

            /* change color back to unsorted */
            state[i] = stateColor.unsorted.value; 
            state[i + 1] = stateColor.unsorted.value;
        }
    }
    state.fill(stateColor.sorted.value); /* Change color to sorted */

}

async function insertionSort(arr) {
    /* first value is already sorted */
    state[0] = stateColor.sorted.value;
    for (let i = 1; i < arr.length; i ++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && key < arr[j]) {
            const colorBefore = state[j] /* keep track of the color os that we can change back later */
            state[j] = stateColor.compare.value; /* change to compare color */
            await sleep(sort_speed);
            arr[j + 1] = arr[j]
            state[j + 1] = stateColor.sorted.value; /* change to sorted color */
            state[j] = colorBefore /* change back the color */
            j--;
        }
        arr[j + 1] = key;
        state[j + 1] = stateColor.sorted.value; /* change to sorted color */
        await sleep(sort_speed);
    }
}

async function swap(arr, i, j) {
    await sleep(sort_speed); /* sorting speed */
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}