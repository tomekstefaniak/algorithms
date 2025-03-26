
import { describe, it, expect } from "vitest";
import { generateRandomFloatArray } from "src/utils/generateRandomArray.ts";
import { mergeSort } from "src/sorting/mergeSort.ts";

describe("mergeSort()", () => {
    it("Should sort an array", () => {
        // Arrange
        const numberOfElements = 1e2;
        const lowestPossible = 0;
        const greatestPossible = 1e6;

        const array = generateRandomFloatArray(
            numberOfElements,
            lowestPossible,
            greatestPossible
        );

        // Act
        mergeSort(array);
        
        // Assert
        let sorted = true;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                sorted = false;
            }
        }

        expect(sorted).toBeTruthy();
    });
});
