import Calculator from './Calculator';

describe("Calculator tests", () => {
    test("exists", () => {
        expect(Calculator).toBeTruthy();
    });
    describe("add tests", () => {
        test("exists", () => {
            const calc = new Calculator();
            expect(calc.add).toBeTruthy();
        });
        test("2 postive", () => {
            const calc = new Calculator();
            expect(calc.add(1, 5)).toBe(6);
        })
        test("1 postive", () => {
            const calc = new Calculator();
            expect(calc.add(1, -5)).toBe(-4);
        })
        test("commutes", () => {
            const calc = new Calculator();
            expect(calc.add(-5, 1)).toBe(-4);
        })
    });
    describe("subs tests", () => {
        test("exists", () => {
            const calc = new Calculator();
            expect(calc.subtract).toBeTruthy();
        });
        test("2 postive, negative result", () => {
            const calc = new Calculator();
            expect(calc.subtract(1, 5)).toBe(-4);
        })
        test("2 postive, positive result", () => {
            const calc = new Calculator();
            expect(calc.subtract(5, 1)).toBe(4);
        })
        test("subtract negative", () => {
            const calc = new Calculator();
            expect(calc.subtract(1, -5)).toBe(6);
        })
        test("subtract positive from negative", () => {
            const calc = new Calculator();
            expect(calc.subtract(-5, 1)).toBe(-6);
        })
    });
    describe("div tests", () => {
        test("exists", () => {
            const calc = new Calculator();
            expect(calc.divide).toBeTruthy();
        });
        test("result > 1", () => {
            const calc = new Calculator();
            expect(calc.divide(1, 5)).toBeCloseTo(.2);
        });
        test("result < 1", () => {
            const calc = new Calculator();
            expect(calc.divide(5, 2)).toBeCloseTo(2.5);
        });
        test("result = 1", () => {
            const calc = new Calculator();
            expect(calc.divide(5, 5)).toBeCloseTo(1);
        });
        test("denominator < 1", () => {
            const calc = new Calculator();
            expect(calc.divide(5, .2)).toBeCloseTo(25);
        });
    });
    describe("mult tests", () => {
        test("exists", () => {
            const calc = new Calculator();
            expect(calc.multiply).toBeTruthy();
        });
        test("2 postive", () => {
            const calc = new Calculator();
            expect(calc.multiply(7, 5)).toBe(35);
        })
        test("1 postive", () => {
            const calc = new Calculator();
            expect(calc.multiply(4, -5)).toBe(-20);
        })
        test("commutes", () => {
            const calc = new Calculator();
            expect(calc.multiply(-5, 4)).toBe(-20);
        })
        test("2 negative", () => {
            const calc = new Calculator();
            expect(calc.multiply(-5, -4)).toBe(20);
        })
    });
});