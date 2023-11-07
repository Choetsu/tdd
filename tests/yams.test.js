const calculatePoints = require("../index");

describe("Yams", () => {
    it("should return 50 points if all dice are the same (YAMS)", () => {
        expect(calculatePoints([4, 4, 4, 4, 4])).toBe(50);
    });
    it("should not return 50 points if all dice are not the same (YAMS)", () => {
        expect(calculatePoints([4, 4, 4, 4, 3])).not.toBe(50);
    });

    it("should return 35 points if 4 dice are the same (Carré)", () => {
        expect(calculatePoints([4, 4, 4, 4, 3])).toBe(35);
    });
    it("should not return 35 points if 4 dice are not the same (Carré)", () => {
        expect(calculatePoints([4, 4, 4, 3, 3])).not.toBe(35);
    });

    it("should return 30 points if 3 dice are the same and 2 dice are the same (Full)", () => {
        expect(calculatePoints([4, 4, 4, 3, 3])).toBe(30);
    });
    it("should not return 30 points if 3 dice are not the same and 2 dice are the same (Full)", () => {
        expect(calculatePoints([4, 5, 3, 3, 3])).not.toBe(30);
    });

    it("should return 28 points if 3 dice are the same and 2 dice are not the same (Brelan)", () => {
        expect(calculatePoints([4, 4, 4, 3, 2])).toBe(28);
    });
    it("should not return 28 points if 3 dice are not the same and 2 dice are not the same (Brelan)", () => {
        expect(calculatePoints([4, 4, 3, 3, 2])).not.toBe(28);
    });

    it("should return 40 points if all dice are in order (Grande suite)", () => {
        expect(calculatePoints([1, 2, 3, 4, 5])).toBe(40);
    });
    it("should not return 40 points if all dice are not in order (Grande suite)", () => {
        expect(calculatePoints([1, 2, 3, 4, 6])).not.toBe(40);
    });
});
