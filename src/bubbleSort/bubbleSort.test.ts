import { beforeEach, describe, expect, test } from "@jest/globals";
import { sorted, unsorted } from "../utils";
import { bubbleSort } from "./blubbleSort";

describe("Insert sort test", () => {
    let arr;

    beforeEach(() => {
        arr = unsorted;
    });

    test("Bubblesort", () => {
        const res = bubbleSort(arr);
        expect(res).toEqual(sorted);
    });

    test("short array", () => {
        expect(bubbleSort([1])).toEqual([1]);
    });
});
