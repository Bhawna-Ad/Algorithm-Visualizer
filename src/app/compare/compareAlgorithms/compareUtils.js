//return a new copy of the array
function getArray(compareArray) {
    return compareArray.slice(0);
}

//adding waiting time in algorithms
function addWait(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

//swapping the styles of two elements
function swap(element1, element2) {
    const style1 = window.getComputedStyle(element1);
    const style2 = window.getComputedStyle(element2);

    const newStyle1 = style1.getPropertyValue("width");
    const newStyle2 = style2.getPropertyValue("width");

    element1.style.width = newStyle2;
    element2.style.width = newStyle1;
}

//function to swap elements of array
function swapArray(arr, first, second) {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

//function to get the maximum index
function getMaxIndex(arr, start, end) {
    var max = start;
    for (var i = start; i <= end; i++) {
        if (arr[max] < arr[i]) {
            max = i;
        }
    }
    return max;
}


export {getArray, addWait, swap, swapArray, getMaxIndex};

