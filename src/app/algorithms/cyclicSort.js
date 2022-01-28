import { swapArray } from "./utils";
import { swap } from "./utils";
import { addWait } from "./utils";

async function cyclicSort(array_length, waitTime) {
    var nums = [];
    var board = document.getElementById('board');
    board.innerHTML = "";
    var len = 0;
    while(len < 100) {
        //take the range of random numbers between 0 to 990 with a gap of 10
        var num = 10 * parseInt(Math.random()*100);
        if(nums.indexOf(num) != -1) {
            continue;
        }
        var bar = document.createElement('div');
        bar.classList.add("bar");
        bar.id = "bar" + len;
        bar.style.width = num + 'px';
        board.appendChild(bar);
        await addWait(2);
        nums.push(num);
        len++;
    }
    console.log(nums);


    var i = 0;
    while(i<array_length) {
        var index = nums[i]/10;
        var div1 = document.getElementById('bar'+i);
        var div2 = document.getElementById('bar'+index);
        div1.style.backgroundColor = 'red';
        div2.style.backgroundColor = 'red';
        await addWait(waitTime);
        if(nums[i] != nums[index]) {
            swapArray(nums, i, index);
            swap(div1, div2);
        }
        else {
            i++;
        }
        div1.style.backgroundColor = 'aqua';
        div2.style.backgroundColor = 'aqua';
    }
    console.log(nums);
}

export {cyclicSort};
