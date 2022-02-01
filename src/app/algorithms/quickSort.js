import { swapArray } from "./utils";
import { swap } from "./utils";
import { addWait } from "./utils";
import {disableButtons} from "./utils";


//quick sort
function quickSort(nums, waitTime) {
    quickSort_helper(nums, 0, nums.length -1, waitTime);
}

async function quickSort_helper(nums, low, high, waitTime) {
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
        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';

        await addWait(waitTime);


        if(start <= end) {
            swapArray(nums, start, end);
            swap(div1, div2);
            start++;
            end--;
        }

        div1.style.backgroundColor = "#FF008C";
        div2.style.backgroundColor =  "#FF008C";

    }

    if(low < end) {
        quickSort_helper(nums, low, end, waitTime);
    }
    if(start < high) {
        quickSort_helper(nums, start, high, waitTime);
    }

    if(start>end) {
        disableButtons(false);
    }
}


export {quickSort};

