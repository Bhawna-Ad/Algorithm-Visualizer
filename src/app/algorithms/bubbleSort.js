import { swapArray } from "./utils";
import { swap } from "./utils";
import { addWait } from "./utils";

async function bubbleSort(nums, waitTime) {
    for (let i = 0; i < nums.length; i++) {
        let swapped = new Boolean(false);
        for (let j = 1; j < nums.length - i; j++) {
            let div1 = document.getElementById('bar' + j);
            let div2 = document.getElementById('bar' + (j - 1));
            div1.style.backgroundColor = 'red';
            div2.style.backgroundColor = 'red';

            await addWait(waitTime);
            //check for the widths in the array and swap the array elements and div elements as well
            if (nums[j] < nums[j - 1]) {
                swap(div1, div2);
                swapArray(nums, j, j - 1);
                swapped = true;
            }
            div1.style.backgroundColor = 'aqua';
            div2.style.backgroundColor = 'aqua';
            if (!swapped) {
                break;
            }

        }
    }
}

export {bubbleSort};
