export const GetRandomItemsFromArray = (arr, numItems) => {
    const randomItems = [];

    if (numItems > arr.length) {
        throw new Error('The number of items requested is greater than the array length.');
    }

    while (randomItems.length < numItems) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const randomItem = arr[randomIndex];

        // Check if the random item is not already in the result array
        if (!randomItems.includes(randomItem)) {
            randomItems.push(randomItem);
        }
    }

    return randomItems;
}
