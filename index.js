const speed_slider = document.querySelector('#speed');
const size_slider = document.querySelector('#size');

speed_slider.style.direction = 'rtl';
speed_slider.oninput = () => sort_speed = parseInt(speed_slider.value);
size_slider.oninput = () => {
    len = parseInt(size_slider.value);
    arrays = createArray(len);
    arr = arrays[0];
    state = arrays[1];
    width = Math.floor(canvasW / len);
}

const quick_sort_btn = document.querySelector('#quickSort');
quick_sort_btn.onclick = () => {
    quickSort(arr, 0, arr.length - 1)
    .then(() => {
        quick_sort_btn.disabled = false;
        size_slider.disabled = false;
    });
    quick_sort_btn.disabled = true;
    size_slider.disabled = true;
}
function createArray(len) {
    let arr = new Array(len);
    let state = new Array(len);
    for (let i = 0; i < len; i++) {
        arr[i] = Math.floor(Math.random() * (canvasH / 2)) + 1;
        state[i] = -1;
    }
    return [arr, state];
}