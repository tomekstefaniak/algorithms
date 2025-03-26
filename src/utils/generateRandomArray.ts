
export const generateRandomIntArray = (numberOfElements: number, lowestPossible: number, greatestPossible: number) => {
    if (
        numberOfElements < 1 
        || greatestPossible < lowestPossible
        || !Number.isInteger(numberOfElements)
        || !Number.isInteger(lowestPossible)
        || !Number.isInteger(greatestPossible)
    ) {
        throw Error("Function generateRandomArray() got invalid arguments!");
    }

    let randomArray = [];
    const numbersSpan = greatestPossible - lowestPossible;

    for (let i = 0; i < numberOfElements; i++) {
        randomArray.push(Math.floor(Math.random() * numbersSpan) + lowestPossible);
    }

    return randomArray;
};

export const generateRandomFloatArray = (numberOfElements: number, lowestPossible: number, greatestPossible: number) => {
    if (
        numberOfElements < 1 
        || greatestPossible < lowestPossible
    ) {
        throw Error("Function generateRandomArray() got invalid arguments!");
    }

    let randomArray = [];
    const numbersSpan = greatestPossible - lowestPossible;

    for (let i = 0; i < numberOfElements; i++) {
        randomArray.push(Math.random() * numbersSpan + lowestPossible);
    }

    return randomArray;
};
