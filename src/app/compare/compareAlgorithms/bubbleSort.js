import {getArray} from './compareUtils';
import {addWait} from './compareUtils';
import { swapArray } from "./compareUtils";
import { swap } from './compareUtils';

//cell number 0
async function bubbleSort(nums, time) {
    var arr = getArray(nums);
    for (let i = 0; i < arr.length; i++) {
        let swapped = new Boolean(false);
        for (let j = 1; j < arr.length - i; j++) {
            let div1 = document.getElementById('compareBar' + 0 + '-' + j);
            let div2 = document.getElementById('compareBar' + 0 + '-' + (j - 1));
            div1.style.backgroundColor = 'aqua';
            div2.style.backgroundColor = 'aqua';
            //check for this later
            await addWait(time);
            //check for the widths in the array and swap the array elements and div elements as well
            if (arr[j] < arr[j - 1]) {
                swap(div1, div2);
                swapArray(arr, j, j - 1);
                swapped = true;
            }
            div1.style.backgroundColor = "#FF008C";
            div2.style.backgroundColor = "#FF008C";
            if (!swapped) {
                break;
            }

        }
    }
}


export {bubbleSort};