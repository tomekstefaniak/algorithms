
const swap = (array: number[], i: number, j: number) => {
    const iValue = array[i];
    array[i] = array[j];
    array[j] = iValue;
}

const lomutoPartition = (array: number[], left: number, right: number) => {
    let i: number = left - 1;
    for (let j: number = left; j < right; j++) {
        if (array[j] <= array[right]) {
            i++;
            swap(array, i, j);
        }
    }

    i++;
    swap(array, i, right);

    return i;
}

const quickSortLomutoPartitionRecursive = (array: number[], left: number, right: number) => {
    if (left < right) {
        const pivotIndex: number = lomutoPartition(array, left, right);
        quickSortLomutoPartitionRecursive(array, left, pivotIndex - 1);
        quickSortLomutoPartitionRecursive(array, pivotIndex + 1, right);
    }
}

export const quickSortLomutoPartition = (array: number[]) => {
    quickSortLomutoPartitionRecursive(array, 0, array.length - 1);
}
