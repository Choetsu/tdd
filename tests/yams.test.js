const calculatePoints = require("../index");

describe("Yams", () => {
    it("should return 50 points if all dice are the same (YAMS)", () => {
        expect(calculatePoints([4, 4, 4, 4, 4])).toBe(50);
    });

    it("should return an error if is not YAMS", () => {
        expect(calculatePoints([4, 4, 4, 4, 3])).toBe(50);
    });
});
