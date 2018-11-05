function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i+1] < array[i]) {
            swap(i, array);
        }
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j+1] < array[j])   {
                swap(j, array);
            } 
        }
    }
    return array;
}


function swap(i, array) {
    if (array[i] > array[i+1]) {
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
    }
}