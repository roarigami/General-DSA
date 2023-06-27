//Bubble sort 
const bubbleSort = (array) => {
    let n = array.length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++){
            if(array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
let arr = [84,12,65,43,29,94,82,53,4];
console.log(bubbleSort(arr));


//Selection Sort 
const selectionSort = (array) => {
    let n = array.length;
    for(let i = 0; i < n; i++){
        let min = i;
        for(let j = i + 1; j < n; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
        }
        if(min != i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

let arr2 = [1, 54, 32, 98, 2132, 09, 143, 1627, 735];
console.log(selectionSort(arr2));