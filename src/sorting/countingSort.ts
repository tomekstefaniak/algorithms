
export const countingSort = (array: number[], minimum: number, maximum: number) => {
    if (array.length < 2) {
        return;
    }

    let counts: number[] = new Array(maximum - minimum + 1).fill(0);

    for (const integer of array) {
        counts[integer]++;
    }

    for (let i: number = 1; i < counts.length; i++) {
        counts[i] += counts[i - 1];
    }

    let sortedArray = new Array(array.length);
    for (let i: number = array.length - 1; i >= 0; i--) {
        const integer = array[i];
        const index = integer - minimum;
        sortedArray[counts[index] - 1] = integer;
        counts[index]--;
    }

    for (let i: number = 0; i < array.length; i++) {
        array[i] = sortedArray[i];
    }

    return sortedArray;
}
