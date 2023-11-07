function calculatePoints(dice) {
    const counts = Array(7).fill(0);

    dice.forEach((die) => {
        counts[die]++;
    });

    const maxCount = Math.max(...counts);

    if (maxCount === 5) {
        return 50;
    }

    if (maxCount === 4) {
        return 35;
    }
}

module.exports = calculatePoints;
