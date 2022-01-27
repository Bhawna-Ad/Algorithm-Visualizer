var arr_length = 50;
var time = 100;
var compareArray = [];
document.getElementById("compareAll").addEventListener("click", compareAll);

function compareAll() {
    var board = document.getElementById('board');
    board.innerHTML = "";
    var index = 1;
    for(var row=0; row<2; row++) {
        var rowDiv = document.createElement('div');
        for(var col=0; col<3; col++) {
            var cell = document.createElement('div');
            cell.classList.add('col');
            cell.id = 'cell'+ index;
            index++;
            rowDiv.appendChild(cell);
        }
        board.appendChild(rowDiv);
    }

    
    for(var i=0; i<arr_length; i++) {
        compareArray.push(parseInt(Math.random()*300));
    }

    
    for(var cell_no=0; cell_no<6; cell_no++) {
        index = 0;
        var cell = document.getElementById('cell'+(cell_no+1));
        for(var bar_no=0; bar_no<arr_length; bar_no++) {
            var bar = document.createElement('div');
            bar.classList.add('compareBar');
            bar.id = 'compareBar' + cell_no + '-' + bar_no;
            bar.style.width = compareArray[index] + 'px';
            index++;
            cell.appendChild(bar);
        }
    }
    console.log(compareArray);
    bubbleSort();
    selectionSort();
    insertionSort();
    cyclicSort();
    mergeSort();
    quickSort();
}

function getArray() {
    return compareArray.slice(0);
}

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


// cell number 0
async function bubbleSort() {
    var arr = getArray();
    for (let i = 0; i < arr_length; i++) {
        let swapped = new Boolean(false);
        for (let j = 1; j < arr_length - i; j++) {
            let div1 = document.getElementById('compareBar' + 0 + '-' + j);
            let div2 = document.getElementById('compareBar' + 0 + '-' + (j - 1));
            div1.style.backgroundColor = 'red';
            div2.style.backgroundColor = 'red';
            //check for this later
            await addWait(time);
            //check for the widths in the array and swap the array elements and div elements as well
            if (arr[j] < arr[j - 1]) {
                swap(div1, div2);
                swapArray(arr, j, j - 1);
                // let temp = nums[j];
                // nums[j] = nums[j-1];
                // nums[j-1] = temp;
                swapped = true;
            }
            div1.style.backgroundColor = 'aqua';
            div2.style.backgroundColor = 'aqua';
            if (!swapped) {
                break;
            }

        }
    }
    console.log(arr);
}



//cell number 1
async function selectionSort() {
    var arr = getArray();
    for (var i = 0; i < arr_length; i++) {
        var last = arr_length - 1 - i;
        var max = getMaxIndex(arr, 0, last);
        let div1 = document.getElementById('compareBar' + 1 + '-' + last);
        let div2 = document.getElementById('compareBar' + 1 + '-' + max);
        div1.style.backgroundColor = 'red';
        div2.style.backgroundColor = 'red';
        await addWait(time);
        swap(div1, div2);
        swapArray(arr, last, max);
        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';
    }
}



//cell number 2
async function insertionSort() {
    var arr = getArray();
    for (var i = 0; i < arr_length; i++) {
        for (var j = i + 1; j > 0; j--) {
            let div1 = document.getElementById('compareBar' +  2 + '-' + j);
            let div2 = document.getElementById('compareBar' +  2 + '-' + (j - 1));
            div1.style.backgroundColor = 'red';
            div2.style.backgroundColor = 'red';
            await addWait(time);
            if (arr[j] < arr[j - 1]) {
                swap(div1, div2);
                swapArray(arr, j, j - 1);
                div1.style.backgroundColor = 'aqua';
                div2.style.backgroundColor = 'aqua';
            }
            else {
                div1.style.backgroundColor = 'aqua';
                div2.style.backgroundColor = 'aqua';
                break;
            }
        }

    }
}


//cell number 3
async function cyclicSort() {
    var arr = [];
    var cell = document.getElementById('cell4');
    cell.innerHTML = "";
    var len = 0;
    while(len < 50) {
        //take the range of random numbers between 900 to 999
        var num = 6 * parseInt(Math.random()*50);
        if(arr.indexOf(num) != -1) {
            continue;
        }
        var bar = document.createElement('div');
        bar.classList.add("compareBar");
        bar.id = "compareBar" + 3 + '-' + len;
        bar.style.width = num + 'px';
        cell.appendChild(bar);
        arr.push(num);
        len++;
    }

    var i = 0;
    while(i<50) {
        var index = arr[i]/6;
        var div1 = document.getElementById("compareBar" + 3 + '-' +i);
        var div2 = document.getElementById("compareBar" + 3 + '-' + index);
        div1.style.backgroundColor = 'red';
        div2.style.backgroundColor = 'red';
        await addWait(time);
        if(arr[i] != arr[index]) {
            swapArray(arr, i, index);
            swap(div1, div2);
        }
        else {
            i++;
        }
        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';
    }
    console.log(arr);
}


//cell number 4
function mergeSort() {
    var arr = getArray();
    mergeSort_helper(arr, 0, arr_length);
}

async function merge(arr, left, mid, right) {
    var n1 = mid - left + 1;
    var n2 = right - mid;

    var leftArray = new Array(n1);
    var rightArray = new Array(n2);

    for(var i=0; i<n1; i++) {
        leftArray[i] = arr[left + i];
    }

    for(var i=0; i<n2; i++) {
        rightArray[i] = arr[mid + 1 + i];
    }

    var i = 0;
    var j = 0;
    var k = left;

    while(i<n1 && j<n2) {
        divElement = document.getElementById("compareBar" + 4 + '-' + k);
        divElement.style.backgroundColor = 'red';
        if(leftArray[i] <= rightArray[j]) {
            divElement.style.width = leftArray[i] + 'px';
            arr[k] = leftArray[i];
            i++;
        }
        else {
            divElement.style.width = rightArray[j] + 'px';
            arr[k] = rightArray[j];
            j++;
        }
        k++;
        divElement.style.backgroundColor = 'aqua';

    }

    while(i < n1) {
        divElement.style.backgroundColor = 'red';
        divElement.style.width = leftArray[i] + 'px';
        arr[k] = leftArray[i];
        i++;
        k++;
        divElement.style.backgroundColor = 'aqua';
    }

    while(j < n2) {
        divElement.style.backgroundColor = 'red';
        divElement.width = rightArray[j] + 'px';
        arr[k] = rightArray[j];
        j++;
        k++;
        divElement.style.backgroundColor = 'aqua';
    }
}

function mergeSort_helper(arr, left, right) {
    if(left >= right) {
        return;
    }

    var mid = left + parseInt((right-left)/2);
    mergeSort_helper(arr, left, mid);
    mergeSort_helper(arr, mid+1, right);
    merge(arr, left, mid, right);
}


//cell number 5
function quickSort() {
    var arr = getArray();
    quickSort_helper(arr, 0, arr_length-1);
}

async function quickSort_helper(arr, low, high) {
    var start = low;
    var end = high;
    var mid = parseInt(low + (high - low)/2);
    var pivot = arr[mid];

    while(start <= end) {
        while(arr[start] < pivot) {
            start++;
        }
        while(arr[end] > pivot) {
            end--;
        }

        var div1 = document.getElementById("compareBar" + 5 + '-' + start);
        var div2 = document.getElementById("compareBar" + 5 + '-' + end);
        div1.style.backgroundColor = 'red';
        div2.style.backgroundColor = 'red';

        await addWait(time);

        if(start <= end) {
            swapArray(arr, start, end);
            swap(div1, div2);
            start++;
            end--;
        }

        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';

    }

    if(low < end) {
        quickSort_helper(arr, low, end);
    }
    if(start < high) {
        quickSort_helper(arr, start, high);
    }
}






