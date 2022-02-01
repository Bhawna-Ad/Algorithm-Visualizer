import {getArray} from './compareUtils';
import {addWait} from './compareUtils';
import { swapArray } from "./compareUtils";
import { swap } from './compareUtils';

//cell number 5
function quickSort(nums, time) {
    var arr = getArray(nums);
    quickSort_helper(arr, 0, arr.length-1, time);
}

async function quickSort_helper(arr, low, high, time) {
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
        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';

        await addWait(time);

        if(start <= end) {
            swapArray(arr, start, end);
            swap(div1, div2);
            start++;
            end--;
        }

        div1.style.backgroundColor = "#FF008C";
        div2.style.backgroundColor = "#FF008C";

    }

    if(low < end) {
        quickSort_helper(arr, low, end, time);
    }
    if(start < high) {
        quickSort_helper(arr, start, high, time);
    }
}

export {quickSort};
