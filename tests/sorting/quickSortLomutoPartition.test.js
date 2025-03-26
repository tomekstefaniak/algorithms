
import { describe, it, expect } from "vitest";
import { generateRandomIntArray } from "src/utils/generateRandomArray.js";
import { quickSortLomutoPartition } from "src/sorting/quickSortLomutoPartition.ts";

describe("quickSortLomutoPartition()", () => {
    it("Should sort an array", () => {
        // Arrange
        const numberOfElements = 1e2;
        const lowestPossible = 0;
        const greatestPossible = 1e6;

        const array = generateRandomIntArray(
            numberOfElements,
            lowestPossible,
            greatestPossible
        );

        // Act
        quickSortLomutoPartition(array);
        
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
