import {addWait} from './compareUtils';
import { swapArray } from "./compareUtils";
import { swap } from './compareUtils';

//cell number 3
async function cyclicSort(time) {
    var arr = [];
    var cell = document.getElementById('cell4');
    cell.innerHTML = "";
    var len = 0;
    while(len < 50) {
        //take the range of random numbers between 900 to 999
        var num = 6 * parseInt(Math.random()*50);
        if(arr.indexOf(num) != -1) {
            continue;
        }
        var bar = document.createElement('div');
        bar.classList.add("compareBar");
        bar.id = "compareBar" + 3 + '-' + len;
        bar.style.width = num + 'px';
        cell.appendChild(bar);
        arr.push(num);
        len++;
    }

    var i = 0;
    while(i<50) {
        var index = arr[i]/6;
        var div1 = document.getElementById("compareBar" + 3 + '-' +i);
        var div2 = document.getElementById("compareBar" + 3 + '-' + index);
        div1.style.backgroundColor = 'red';
        div2.style.backgroundColor = 'red';
        await addWait(time);
        if(arr[i] != arr[index]) {
            swapArray(arr, i, index);
            swap(div1, div2);
        }
        else {
            i++;
        }
        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';
    }
}

export {cyclicSort};



