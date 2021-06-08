// Canvas width and height
const canvasW = 500;
const canvasH = 200;

let sort_speed = 50 /* determines the speed of the sorting */
let len = 100; /* Length of the array to be sorted */
let width = Math.floor(canvasW / len); /* width of the blocks of array element shown on canvas */

let arr;
let state; /* state of the array elements: -2 comparing element, -1 unsorted, 0 pivot element, 1 sorted */

let sortedColor = '#00FF00'; /* lime */
let unsortedColor = '#FFFFFF' /* white */
let partitionColor = '#DC143C' /* crimson */
let comparedColor = '#F0E68C'; /* khaki */


function setup() {
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
            case -2: /* being compared */
                fill(comparedColor);
                break;
            case -1: /* unsorted */
                fill(unsortedColor);
                break;
            case 0: /* partition */
                fill(partitionColor);
                break;
            case 1: /* sorted */
                fill(sortedColor);
                break;
        }
        rect(i * width, canvasH/10 * 9 - arr[i], width, arr[i]);
    }
}