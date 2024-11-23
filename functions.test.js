import {describe, expect, test} from '@jest/globals';
import { capitalize, reverseString, casesarCipher, analyzeArray } from './functions';

describe("Capitalize fcn", () => {
    test("exists", () => expect(capitalize).toBeTruthy());
    test("single word", () => expect(capitalize("hello")).toBe("Hello"));
    test("2 words", () => expect(capitalize("hello 123")).toBe("Hello 123"));
    test("3 words punctuation, space", () => expect(capitalize("hello 123. no")).toBe("Hello 123. no"));
    test("Capital 1st", () => expect(capitalize("Hello 123. no")).toBe("Hello 123. no"));
    test("number", () => expect(capitalize("123")).toBe("123"));
    test("punctuation", () => expect(capitalize(".!!!dfasfsd")).toBe(".!!!dfasfsd"));
});

describe("Reverse String fcn", () => {
    test("exists", () => expect(reverseString).toBeTruthy());
    test("single word", () => expect(reverseString("hello")).toBe("olleh"));
    test("2 words", () => expect(reverseString("hello 123")).toBe("321 olleh"));
    test("3 words punctuation, space", () => expect(reverseString("hello 123. no")).toBe("on .321 olleh"));
    test("number", () => expect(reverseString("123")).toBe("321"));
    test("punctuation", () => expect(reverseString(".!!!dfasfsd")).toBe("dsfsafd!!!."));
    test("blank, single char", () => expect(reverseString(" ")).toBe(" "));
});

describe("Caesar cipher fcn", () => {
    test("exists", () => expect(casesarCipher).toBeTruthy());
    // test("non-alphabetical", () => expect(() => casesarCipher("fdjsaio;123", 10)).toThrow(Error));
    test("alphabetical, lowercase, no spaces", () => expect(casesarCipher("xyz", 3)).toBe("abc"));
    test("alphabetical, mixed case, no spaces", () => expect(casesarCipher('HeLLo', 3)).toBe("KhOOr"));
    test("alphabetical, mixed case, no spaces", () => expect(casesarCipher('World', 3)).toBe("Zruog"));
    test("alphabetical, mixed case, punctuation, spaces", () => expect(casesarCipher('Hello, World!', 3)).toBe("Khoor, Zruog!"));
});

describe("analyzeArray", () => {
    test("exists", () => expect(casesarCipher).toBeTruthy());
    test("general case", () => expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     }))
});