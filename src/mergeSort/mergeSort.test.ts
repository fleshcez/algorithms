import { beforeEach, describe, expect, test } from "@jest/globals";
import { sorted, unsorted } from "../utils";
import { mergeSort } from "./mergeSort";

describe("Insert sort test", () => {
    let arr;

    beforeEach(() => {
        arr = unsorted;
    });

    test("Should sort array", () => {
        expect(mergeSort(arr)).toEqual(sorted);
    });
});
