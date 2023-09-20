
export const FGenerateRandomPosition = (count, w, h) => {


    const GenerateRandomPosition = () => {
        const minX = 0;
        const maxX = w;
        const minY = 0;
        const maxY = h;

        let randomX, randomY;

        do {
            randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
        } while (
            (randomX >= 0 && randomX <= 170 && randomY >= 0 && randomY <= 270) ||
            (randomX >= (w - 170) && randomX <= (w - 20) && randomY >= h - 20 && randomY <= h)
        );

        return { x: randomX, y: randomY };
    };

    const generateRandomPositionsArray = (count) => {
        const positionsArray = [];

        for (let i = 0; i < count; i++) {
            const position = GenerateRandomPosition();
            positionsArray.push(position);
        }

        return positionsArray;
    };

    const randomPositions = generateRandomPositionsArray(count);
    return randomPositions
}
