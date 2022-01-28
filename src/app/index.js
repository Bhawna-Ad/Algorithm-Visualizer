import { bubbleSort } from "./algorithms/bubbleSort";
import { selectionSort } from "./algorithms/selectionSort";
import { insertionSort } from "./algorithms/insertionSort";
import { cyclicSort } from "./algorithms/cyclicSort";
import { mergeSort } from "./algorithms/mergeSort";
import { quickSort } from "./algorithms/quickSort";


//global arrray to get accessed by other functions
var nums = [];
var sorted = new Boolean(false);

//slider to change length of the array
var slider = document.getElementById('array_slider');
var array_length = slider.value;
arrays();

slider.oninput = function() {
    array_length = this.value;
    arrays();
}


//slider to change speed of the sorting algorithm
var speed_slider = document.getElementById('speed_slider');
var waitTime = 1000 - (10*speed_slider.value);

speed_slider.oninput = function() {
    waitTime = 1000 - (10*this.value);
}



//adding eventListeners to the buttons
document.getElementById("array").addEventListener("click", arrays);
document.getElementById("bubbleSort").addEventListener("click", callForBubbleSort);
document.getElementById("selectionSort").addEventListener("click", callForSelectionSort);
document.getElementById("insertionSort").addEventListener("click", callForInsertionSort);
document.getElementById("cyclicSort").addEventListener("click", callForCyclicSort);
document.getElementById("mergeSort").addEventListener("click", callForMergeSort);
document.getElementById("quickSort").addEventListener("click", callForQuickSort);
document.getElementById("compareAll").addEventListener("click", compareAll);


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


//bubble sorting algorithm
async function callForBubbleSort() {
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }

    bubbleSort(nums, waitTime);

    sorted = true;
    console.log(nums);
}

//selection sorting algorithm
async function callForSelectionSort() {
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }
    selectionSort(nums, waitTime);

    sorted = true;
    console.log(nums);
}


//insertion sorting algorithm
async function callForInsertionSort() {
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }
    insertionSort(nums, waitTime);
    sorted = true;
    console.log(nums);
}


//cyclic sorting function
async function callForCyclicSort() {
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }

    //fix for cyclic sort length
    cyclicSort(nums.length, waitTime);
    console.log(nums);
    sorted = true;
}

//add wait time
//check for the bug in here
//merge sorting algorithm
function callForMergeSort() {
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }
    mergeSort(nums, waitTime);
    console.log(nums);
    sorted = true;
}



//quick sort algorithm
function callForQuickSort() {
    if (sorted === true) {
        alert("Already Sorted!");
        return;
    }
    quickSort(nums, waitTime);
    console.log(nums);
    sorted = true;
}

















