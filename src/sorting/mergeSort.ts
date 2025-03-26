
const mergeSortRecursive = (array: number[], left: number, right:number) => {
    if (left < right) {
        const borderIndex = Math.floor((right + left) / 2);
        mergeSortRecursive(array, left, borderIndex);
        mergeSortRecursive(array, borderIndex + 1, right);

        let mergedList: number[] = [];
        let i: number = left;
        let j: number = borderIndex + 1;
        while (i <= borderIndex || j <= right) {
            if (i > borderIndex) {
                mergedList.push(array[j]);
                j++;
            }
            else if (j > right) {
                mergedList.push(array[i]);
                i++;
            }
            else {
                if (array[i] <= array[j]) {
                    mergedList.push(array[i]);
                    i++;
                }
                else {
                    mergedList.push(array[j]);
                    j++;
                }
            }
        }

        for (let i: number = left; i <= right; i++) {
            array[i] = mergedList.shift()!;
        }
    }
}

export const mergeSort = (array: number[]) => {
    mergeSortRecursive(array, 0, array.length - 1);
}
