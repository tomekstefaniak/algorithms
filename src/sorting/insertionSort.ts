
export const insertionSort = (array: number[]) => {
    if (array.length < 2) {
        return;
    }

    for (let i: number = 1; i < array.length; i++) {
        const currValue: number = array[i];

        let j: number = i;
        while (j > 0 && array[j - 1] > currValue) {
            array[j] = array[j - 1];
            j--;
        }

        array[j] = currValue;
    }
}
