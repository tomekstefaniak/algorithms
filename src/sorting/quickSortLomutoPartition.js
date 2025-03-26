
const swap = (array, i, j) => {
    const iValue = array[i];
    array[i] = array[j];
    array[j] = iValue;
}

const lomutoPartition = (array, left, right) => {
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (array[j] <= array[right]) {
            i++;
            swap(array, i, j);
        }
    }

    i++;
    swap(array, i, right);

    return i;
}

const quickSortLomutoPartitionRecursive = (array, left, right) => {
    if (left < right) {
        const pivotIndex = lomutoPartition(array, left, right);
        quickSortLomutoPartitionRecursive(array, left, pivotIndex - 1);
        quickSortLomutoPartitionRecursive(array, pivotIndex + 1, right);
    }
}

export const quickSortLomutoPartition = (array) => {
    const maxIndex = (array.length - 1);
    if (maxIndex > 0) {
        const pivotIndex = lomutoPartition(array, 0, maxIndex);
        quickSortLomutoPartitionRecursive(array, 0, pivotIndex - 1);
        quickSortLomutoPartitionRecursive(array, pivotIndex + 1, maxIndex);
    }
}
