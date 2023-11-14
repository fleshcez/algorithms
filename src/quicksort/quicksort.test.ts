import { beforeEach, describe, expect, test } from "@jest/globals";
import { quickSort, quickSort2 } from "./quicksort";
import { sorted, unsorted } from "../utils";

describe("Quicksort test", () => {
    let arr;

    beforeEach(() => {
        arr = unsorted;
    });

    test("Quicksort 1", () => {
        const res = quickSort(arr);
        console.log(res);
        expect(res).toEqual(sorted);
    });

    test("Quicksort 2", () => {
        const res = quickSort2(arr);
        expect(res).toEqual(sorted);
    });
});
