
const swap = (array, i, j) => {
    const iValue = array[i];
    array[i] = array[j];
    array[j] = iValue;
}

const HoarePartition = (array, left, right) => {
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

const quickSortHoarePartitionRecursive = (array, left, right) => {
    if (left < right) {
        const borderIndex = HoarePartition(array, left, right);
        quickSortHoarePartitionRecursive(array, left, borderIndex);
        quickSortHoarePartitionRecursive(array, borderIndex + 1, right);
    }
}

export const quickSortHoarePartition = (array) => {
    const maxIndex = (array.length - 1);
    if (maxIndex > 0) {
        const borderIndex = HoarePartition(array, 0, maxIndex);
        quickSortHoarePartitionRecursive(array, 0, borderIndex);
        quickSortHoarePartitionRecursive(array, borderIndex+ 1, maxIndex);
    }
}
