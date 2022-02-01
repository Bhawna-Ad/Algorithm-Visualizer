import { swapArray } from "./utils";
import { swap } from "./utils";
import { addWait } from "./utils";
import {getMaxIndex} from "./utils";
import {disableButtons} from "./utils";

async function selectionSort(nums, waitTime) {
    for (var i = 0; i < nums.length; i++) {
        var last = nums.length - 1 - i;
        var max = getMaxIndex(nums, 0, last);
        let div1 = document.getElementById('bar' + last);
        let div2 = document.getElementById('bar' + max);
        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';
        await addWait(waitTime);
        swap(div1, div2);
        swapArray(nums, last, max);
        div1.style.backgroundColor =  "#FF008C";
        div2.style.backgroundColor =  "#FF008C";
    }
    disableButtons(false);
}

export {selectionSort};
