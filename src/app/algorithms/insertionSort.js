import { swapArray } from "./utils";
import { swap } from "./utils";
import { addWait } from "./utils";
import {disableButtons} from "./utils";

async function insertionSort(nums, waitTime) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j > 0; j--) {
            let div1 = document.getElementById('bar' + j);
            let div2 = document.getElementById('bar' + (j - 1));
            div1.style.backgroundColor = 'aqua';
            div2.style.backgroundColor = 'aqua';
            await addWait(waitTime);
            if (nums[j] < nums[j - 1]) {
                swap(div1, div2);
                swapArray(nums, j, j - 1);
                div1.style.backgroundColor = "#FF008C";
                div2.style.backgroundColor =  "#FF008C";
            }
            else {
                div1.style.backgroundColor =  "#FF008C";
                div2.style.backgroundColor = "#FF008C";
                break;
            }
        }

    }
    disableButtons(false);
}

export {insertionSort};
