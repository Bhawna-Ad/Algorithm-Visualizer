import {getArray} from './compareUtils';
import {addWait} from './compareUtils';
import { swapArray } from "./compareUtils";
import { swap } from './compareUtils';
import { getMaxIndex } from './compareUtils';

//cell number 1
async function selectionSort(nums, time) {
    var arr = getArray(nums);
    for (var i = 0; i < arr.length; i++) {
        var last = arr.length - 1 - i;
        var max = getMaxIndex(arr, 0, last);
        let div1 = document.getElementById('compareBar' + 1 + '-' + last);
        let div2 = document.getElementById('compareBar' + 1 + '-' + max);
        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';
        await addWait(time);
        swap(div1, div2);
        swapArray(arr, last, max);
        div1.style.backgroundColor = "#FF008C";
        div2.style.backgroundColor =  "#FF008C";
    }
}

export {selectionSort};

