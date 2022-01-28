import { bubbleSort } from "./compareAlgorithms/bubbleSort";
import { selectionSort } from "./compareAlgorithms/selectionSort";
import { insertionSort } from "./compareAlgorithms/insertionSort";
import { cyclicSort } from "./compareAlgorithms/cyclicSort";
import { mergeSort } from "./compareAlgorithms/mergeSort";
import { quickSort } from "./compareAlgorithms/quickSort";

var arr_length = 50;
var time = 100;
var compareArray = [];

function compareAll() {
    var board = document.getElementById('board');
    board.innerHTML = "";
    var index = 1;
    for(var row=0; row<2; row++) {
        var rowDiv = document.createElement('div');
        for(var col=0; col<3; col++) {
            var cell = document.createElement('div');
            cell.classList.add('col');
            cell.id = 'cell'+ index;
            index++;
            rowDiv.appendChild(cell);
        }
        board.appendChild(rowDiv);
    }

    
    for(var i=0; i<arr_length; i++) {
        compareArray.push(parseInt(Math.random()*300));
    }

    
    for(var cell_no=0; cell_no<6; cell_no++) {
        index = 0;
        var cell = document.getElementById('cell'+(cell_no+1));
        for(var bar_no=0; bar_no<arr_length; bar_no++) {
            var bar = document.createElement('div');
            bar.classList.add('compareBar');
            bar.id = 'compareBar' + cell_no + '-' + bar_no;
            bar.style.width = compareArray[index] + 'px';
            index++;
            cell.appendChild(bar);
        }
    }
    console.log(compareArray);
    bubbleSort(compareArray, time);
    selectionSort(compareArray, time);
    insertionSort(compareArray, time);
    cyclicSort(time);
    mergeSort(compareArray, time);
    quickSort(compareArray, time);
}


export {compareAll};




