import {getArray} from './compareUtils';
import {addWait} from './compareUtils';
import { swapArray } from "./compareUtils";
import { swap } from './compareUtils';

//cell number 2
async function insertionSort(nums, time) {
    var arr = getArray(nums);
    for (var i = 0; i < arr.length-1; i++) {
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

export {insertionSort};


