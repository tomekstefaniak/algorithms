
import { describe, it, expect } from "vitest";
import { generateRandomIntArray, generateRandomFloatArray } from "src/utils/generateRandomArray.js";

describe("generateRandomIntArray()", () => {
    it("Should generate array with provided number of elements within given range", () => {
        // Arrange
        const numberOfElements = 1e3;
        const lowestPossible = 0;
        const greatestPossible = 1e5;

        // Act
        const generatedArray = generateRandomIntArray(
            numberOfElements,
            lowestPossible,
            greatestPossible
        );
        
        // Assert
        let inProvidedRange = true;
        for (const number of generatedArray) {
            if (number < lowestPossible || number > greatestPossible) {
                inProvidedRange = false;
            }
        }

        expect(generatedArray.length).toEqual(numberOfElements);
        expect(inProvidedRange).toBeTruthy();
    });
});

describe("generateRandomFloatArray()", () => {
    it("Should generate array with provided number of elements within given range", () => {
        // Arrange
        const numberOfElements = 1e3;
        const lowestPossible = 0.123;
        const greatestPossible = 10000.756;

        // Act
        const generatedArray = generateRandomFloatArray(
            numberOfElements,
            lowestPossible,
            greatestPossible
        );
        
        // Assert
        let inProvidedRange = true;
        for (const number of generatedArray) {
            if (number < lowestPossible || number > greatestPossible) {
                inProvidedRange = false;
            }
        }

        expect(generatedArray.length).toEqual(numberOfElements);
        expect(inProvidedRange).toBeTruthy();
    });
});
