const calculatePoints = require("../index");

describe("Yams", () => {
    it("should return 50 points if all dice are the same (YAMS)", () => {
        expect(calculatePoints([4, 4, 4, 4, 4])).toBe(50);
    });
    it("should return an error if is not YAMS", () => {
        expect(calculatePoints([4, 4, 4, 4, 3])).not.toBe(50);
    });

    it("should return 35 points if 4 dice are the same (Carré)", () => {
        expect(calculatePoints([4, 4, 4, 4, 3])).toBe(35);
    });
});
