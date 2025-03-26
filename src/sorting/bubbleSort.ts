
const swap = (array: number[], i: number, j: number) => {
    const iValue = array[i];
    array[i] = array[j];
    array[j] = iValue;
}

export const bubbleSort = (array: number[]) => {
    for (let i: number = array.length - 1; i > 0; i--) {
        for (let j: number = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
}
