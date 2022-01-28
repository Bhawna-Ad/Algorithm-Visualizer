import { swapArray } from "./utils";
import { swap } from "./utils";
import { addWait } from "./utils";

async function insertionSort(nums, waitTime) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j > 0; j--) {
            let div1 = document.getElementById('bar' + j);
            let div2 = document.getElementById('bar' + (j - 1));
            div1.style.backgroundColor = 'red';
            div2.style.backgroundColor = 'red';
            await addWait(waitTime);
            if (nums[j] < nums[j - 1]) {
                swap(div1, div2);
                swapArray(nums, j, j - 1);
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
    console.log(nums);
}

export {insertionSort};
