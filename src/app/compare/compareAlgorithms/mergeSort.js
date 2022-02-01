import {getArray} from './compareUtils';

//cell number 4
function mergeSort(nums, time) {
    var arr = getArray(nums);
    mergeSort_helper(arr, 0, arr.length);
}

async function merge(arr, left, mid, right) {
    var n1 = mid - left + 1;
    var n2 = right - mid;

    var leftArray = new Array(n1);
    var rightArray = new Array(n2);

    for(var i=0; i<n1; i++) {
        leftArray[i] = arr[left + i];
    }

    for(var i=0; i<n2; i++) {
        rightArray[i] = arr[mid + 1 + i];
    }

    var i = 0;
    var j = 0;
    var k = left;

    while(i<n1 && j<n2) {
        var divElement = document.getElementById("compareBar" + 4 + '-' + k);
        divElement.style.backgroundColor = 'aqua';
        if(leftArray[i] <= rightArray[j]) {
            divElement.style.width = leftArray[i] + 'px';
            arr[k] = leftArray[i];
            i++;
        }
        else {
            divElement.style.width = rightArray[j] + 'px';
            arr[k] = rightArray[j];
            j++;
        }
        k++;
        divElement.style.backgroundColor = "#FF008C";

    }

    while(i < n1) {
        divElement.style.backgroundColor = 'aqua';
        divElement.style.width = leftArray[i] + 'px';
        arr[k] = leftArray[i];
        i++;
        k++;
        divElement.style.backgroundColor =  "#FF008C";
    }

    while(j < n2) {
        divElement.style.backgroundColor = 'aqua';
        divElement.width = rightArray[j] + 'px';
        arr[k] = rightArray[j];
        j++;
        k++;
        divElement.style.backgroundColor = "#FF008C";
    }
}

function mergeSort_helper(arr, left, right) {
    if(left >= right) {
        return;
    }

    var mid = left + parseInt((right-left)/2);
    mergeSort_helper(arr, left, mid);
    mergeSort_helper(arr, mid+1, right);
    merge(arr, left, mid, right);
}


export {mergeSort};
