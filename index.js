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

    if (maxCount === 3) {
        if (counts.includes(2)) {
            return 30;
        }
        return 28;
    }

    if (dice.sort().join("") === "12345" || dice.sort().join("") === "23456") {
        return 40;
    }

    return dice.reduce((acc, val) => acc + val, 0);
}

module.exports = calculatePoints;
