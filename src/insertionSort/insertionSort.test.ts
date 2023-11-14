import { beforeEach, describe, expect, test } from "@jest/globals";
import { insertionSort } from "./insertionSort";
import { sorted, unsorted } from "../utils";

describe("Insert sort test", () => {
    let arr;

    beforeEach(() => {
        arr = unsorted;
    });

    test("Should sort array", () => {
        expect(insertionSort(arr)).toEqual(sorted);
    });

    test("Should return array if length less than 2", () => {
        const short = [1];
        expect(insertionSort(short)).toEqual(short);
    });

    test("Should sort array with only 2 elements", () => {
        const arr2 = [2, 1];
        expect(insertionSort(arr2)).toEqual([1, 2]);
    });
});
