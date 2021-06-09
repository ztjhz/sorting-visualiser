/* remove loader icon and show the content when ready */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#container').hidden = false;
    document.querySelector('.loader').remove();
})

/* For visualising speed */
const speed_slider = document.querySelector('#speed');
speed_slider.style.direction = 'rtl';
speed_slider.oninput = () => sort_speed = parseInt(speed_slider.value);

/* for size of the array */
const size_slider = document.querySelector('#size');
size_slider.oninput = () => {
    len = parseInt(size_slider.value);
    arrays = createArray(len);
    arr = arrays[0];
    state = arrays[1];
    width = Math.floor(canvasW / len);
}
btns = []
const quick_sort_btn = document.querySelector('#quickSort');
const bubble_sort_btn = document.querySelector('#bubbleSort');
const insertion_sort_btn = document.querySelector('#insertionSort');


btns.push({
        btn: quick_sort_btn,
        sort: () => quickSort(arr, 0, arr.length - 1)
    }, {
        btn: bubble_sort_btn,
        sort: () => bubbleSort(arr)
    }, {
        btn: insertion_sort_btn,
        sort: () => insertionSort(arr)
    })

btns.forEach(btn => {
    btn.btn.onclick = () => {
        state.fill(stateColor.unsorted.value) /* reset the color back to unsorted */
        btn.sort()
        .then(() => enableInputs());
        disableInputs();
    }
});

function createArray(len) {
    let arr = new Array(len);
    let state = new Array(len);
    for (let i = 0; i < len; i++) {
        arr[i] = Math.floor(Math.random() * (canvasH / 2)) + 1;
        state[i] = stateColor.unsorted.value;
    }
    return [arr, state];
}

function enableInputs() {
    btns.forEach(btn => btn.btn.disabled = false);
    size_slider.disabled = false;
}

function disableInputs() {
    btns.forEach(btn => btn.btn.disabled = true);
    size_slider.disabled = true;
}