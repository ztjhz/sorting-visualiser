// Canvas width and height
let canvasW = 500;
let canvasH = 200;

let sort_speed = 50 /* determines the speed of the sorting */
let len = 100; /* Length of the array to be sorted */
let width = Math.floor(canvasW / len); /* width of the blocks of array element shown on canvas */

let arr;
let state; /* state of the array elements: -2 comparing element, -1 unsorted, 0 pivot element, 1 sorted */
const stateColor = {
    sorted: {value: 1, color: '#00FF00'}, /* lime */
    unsorted: {value: 0, color: '#FFFFFF'}, /* white */
    compare: {value: -1, color: '#F0E68C'}, /* khaki */
    pivot: {value: -2, color: '#DC143C'}, /* crimson */
}
let sortedColor = '#00FF00'; 
let unsortedColor = '#FFFFFF' 
let partitionColor = '#DC143C' 
let comparedColor = '#F0E68C'; 


function setup() {
    if (canvasW > windowWidth) {
        canvasW = windowWidth;
    }
    let canvas = createCanvas(canvasW, canvasH);
    canvas.parent('canvas-container');
    const arrays = createArray(len);
    arr = arrays[0];
    state = arrays[1];
    //quickSort(arr, 0, arr.length - 1);
}

function draw() {
    background(50);
    noStroke();
    for (let i = 0; i < arr.length; i++) {
        switch (state[i]) {
            case stateColor.compare.value: /* being compared */
                fill(stateColor.compare.color);
                break;
            case stateColor.unsorted.value: /* unsorted */
                fill(stateColor.unsorted.color);
                break;
            case stateColor.pivot.value: /* partition */
                fill(stateColor.pivot.color);
                break;
            case stateColor.sorted.value: /* sorted */
                fill(stateColor.sorted.color);
                break;
        }
        rect(i * width, canvasH/10 * 9 - arr[i], width, arr[i]);
    }
}