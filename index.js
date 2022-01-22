//global arrray to get accessed by other functions
var nums = [];
var sorted = new Boolean(false);

var slider = document.getElementById('array_slider');
var array_length = slider.value;
arrays();

slider.oninput = function() {
    array_length = this.value;
    output.innerHTML = this.value;
    arrays();
}



//adding eventListeners to the buttons
document.getElementById("array").addEventListener("click", arrays);
document.getElementById("bubbleSort").addEventListener("click", bubbleSort);
document.getElementById("selectionSort").addEventListener("click", selectionSort);
document.getElementById("insertionSort").addEventListener("click", insertionSort);
document.getElementById("cyclicSort").addEventListener("click", cyclicSort);
document.getElementById("mergeSort").addEventListener("click", mergeSort);
document.getElementById("quickSort").addEventListener("click", quickSort);

//creating the bars
function arrays() {
    console.clear();
    sorted = false;
    //storing the different widths in the array
    nums = [];
    let board = document.getElementById('board');
    //clearing the board every time a new array is formed
    board.innerHTML = "";
    for (let i = 0; i < array_length; i++) {
        //storing a random number in the range of 100 to 900
        let num = Math.random() * 1000;
        nums.push(parseInt(num));
        //creating bars of varying widths
        let bar = document.createElement('div');
        if(array_length>=20 && array_length<=22) {
            bar.classList.add("bar_size1");
        }
        else if(array_length>=23 && array_length<=35) {
            bar.classList.add("bar_size2");
        }
        else if(array_length>=35 && array_length<=50) {
            bar.classList.add("bar_size3");
        }
        else if(array_length>=51 && array_length<=61) {
            bar.classList.add("bar_size4");
        }
        else {
            bar.classList.add("bar");
        }
        
        bar.id = "bar" + i;
        bar.style.width = parseInt(num) + 'px';
        board.appendChild(bar);
    }
    console.log(nums);
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
function swapArray(first, second) {
    var temp = nums[first];
    nums[first] = nums[second];
    nums[second] = temp;
}

//function to get the maximum index
function getMaxIndex(start, end) {
    var max = start;
    for (var i = start; i <= end; i++) {
        if (nums[max] < nums[i]) {
            max = i;
        }
    }
    return max;
}

//bubble sorting algorithm
async function bubbleSort() {
    console.log(sorted);
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }
    for (let i = 0; i < array_length; i++) {
        let swapped = new Boolean(false);
        for (let j = 1; j < array_length - i; j++) {
            let div1 = document.getElementById('bar' + j);
            let div2 = document.getElementById('bar' + (j - 1));
            div1.style.backgroundColor = 'red';
            div2.style.backgroundColor = 'red';
            //check for this later
            await new Promise(resolve => setTimeout(() => { resolve(), delay(2) }));
            //check for the widths in the array and swap the array elements and div elements as well
            if (nums[j] < nums[j - 1]) {
                swap(div1, div2);
                swapArray(j, j - 1);
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
    sorted = true;
    console.log(nums);
}

async function selectionSort() {
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }
    for (var i = 0; i < array_length; i++) {
        var last = array_length - 1 - i;
        var max = getMaxIndex(0, last);
        let div1 = document.getElementById('bar' + last);
        let div2 = document.getElementById('bar' + max);
        div1.style.backgroundColor = 'red';
        div2.style.backgroundColor = 'red';
        await new Promise(resolve => setTimeout(() => { resolve(), delay(2) }));
        swap(div1, div2);
        swapArray(last, max);
        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';
    }
    sorted = true;
    console.log(nums);
}

async function insertionSort() {
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }
    for (var i = 0; i < array_length; i++) {
        for (var j = i + 1; j > 0; j--) {
            let div1 = document.getElementById('bar' + j);
            let div2 = document.getElementById('bar' + (j - 1));
            div1.style.backgroundColor = 'red';
            div2.style.backgroundColor = 'red';
            await new Promise(resolve => setTimeout(() => { resolve(), delay(2) }));
            if (nums[j] < nums[j - 1]) {
                swap(div1, div2);
                swapArray(j, j - 1);
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
    sorted = true;
    console.log(nums);
}


async function cyclicSort() {
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }
    nums = [];
    var board = document.getElementById('board');
    board.innerHTML = "";
    var len = 0;
    while(len < 100) {
        //take the range of random numbers between 900 to 999
        var num = 10 * parseInt(Math.random()*100);
        if(nums.indexOf(num) != -1) {
            continue;
        }
        var bar = document.createElement('div');
        bar.classList.add("bar");
        bar.id = "bar" + len;
        bar.style.width = num + 'px';
        board.appendChild(bar);
        nums.push(num);
        len++;
    }
    console.log(nums);

    var i = 0;
    while(i<array_length) {
        var index = nums[i]/10;
        var div1 = document.getElementById('bar'+i);
        var div2 = document.getElementById('bar'+index);
        div1.style.backgroundColor = 'red';
        div2.style.backgroundColor = 'red';
        await new Promise(resolve => setTimeout(() => { resolve(), delay(2) }));
        if(nums[i] != nums[index]) {
            swapArray(i, index);
            swap(div1, div2);
        }
        else {
            i++;
        }
        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';
    }
    console.log(nums);
    sorted = true;
}

//add wait time
function mergeSort() {
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }
    mergeSort_helper(nums, 0, array_length);
    console.log(nums);
    sorted = true;
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
        divElement = document.getElementById('bar'+k);
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



//quick sort
function quickSort() {
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }
    quickSort_helper(0, nums.length -1);
    console.log(nums);
    sorted = true;

}

async function quickSort_helper(low, high) {
    var start = low;
    var end = high;
    var mid = parseInt(low + (high - low)/2);
    var pivot = nums[mid];

    while(start <= end) {
        while(nums[start] < pivot) {
            start++;
        }
        while(nums[end] > pivot) {
            end--;
        }

        var div1 = document.getElementById('bar'+start);
        var div2 = document.getElementById('bar'+end);
        div1.style.backgroundColor = 'red';
        div2.style.backgroundColor = 'red';

        await new Promise(resolve => setTimeout(() => { resolve(), delay(2) }));


        if(start <= end) {
            swapArray(start, end);
            swap(div1, div2);
            start++;
            end--;
        }

        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';

    }

    if(low < end) {
        quickSort_helper(low, end);
    }
    if(start < high) {
        quickSort_helper(start, high);
    }
}















