import { beforeEach, describe, expect, test } from "@jest/globals";
import { quickSort, quickSort2 } from "./quicksort";

describe("Quicksort test", () => {
    let arr;

    beforeEach(() => {
        arr = [10, 16, 8, 12, 15, 6, 3, 9, 5];
    });

    test("Quicksort 1", () => {
        const res = quickSort(arr);
        console.log(res);
        expect(res).toEqual([3, 5, 6, 8, 9, 10, 12, 15, 16]);
    });

    test("Quicksort 2", () => {
        const res = quickSort2(arr);
        expect(res).toEqual([3, 5, 6, 8, 9, 10, 12, 15, 16]);
    });
});
