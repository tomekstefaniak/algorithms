
const swap = (array: number[], i: number, j: number) => {
    const iValue = array[i];
    array[i] = array[j];
    array[j] = iValue;
}

const hoarePartition = (array: number[], left: number, right: number) => {
    let i = left - 1;
    let j = right + 1;

    const pivot = array[Math.floor((left + right) / 2)];

    while (true) {
        i++;
        while (array[i] < pivot) {
            i++;
        }

        j--;
        while (array[j] > pivot) {
            j--;
        }

        if (j <= i) {
            return j;
        }

        swap(array, i, j);
    }
}

const quickSortHoarePartitionRecursive = (array: number[], left: number, right: number) => {
    if (left < right) {
        const borderIndex = hoarePartition(array, left, right);
        quickSortHoarePartitionRecursive(array, left, borderIndex);
        quickSortHoarePartitionRecursive(array, borderIndex + 1, right);
    }
}

export const quickSortHoarePartition = (array: number[]) => {
    quickSortHoarePartitionRecursive(array, 0, array.length - 1);
}
