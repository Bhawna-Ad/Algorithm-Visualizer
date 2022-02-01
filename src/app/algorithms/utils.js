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
function swapArray(nums, first, second) {
    var temp = nums[first];
    nums[first] = nums[second];
    nums[second] = temp;
}

//function to get the maximum index
function getMaxIndex(nums, start, end) {
    var max = start;
    for (var i = start; i <= end; i++) {
        if (nums[max] < nums[i]) {
            max = i;
        }
    }
    return max;
}

//function to add waiting time
function addWait(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

function disableButtons(val) {
    document.getElementById('array').disabled = val;
    document.getElementById('array_slider').disabled = val;
    document.getElementById('speed_slider').disabled = val;
    document.getElementById('dropdownMenuButton').disabled = val;
}

export {swap, swapArray, getMaxIndex, addWait, disableButtons};



