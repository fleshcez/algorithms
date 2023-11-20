import { beforeEach, describe, expect, test } from "@jest/globals";
import { sorted, unsorted } from "../utils";
import { selectionSort } from "./selectionSort";

describe("Selection sort test", () => {
    let arr;

    beforeEach(() => {
        arr = unsorted;
    });

    test("Should sort array", () => {
        expect(selectionSort(arr)).toEqual(sorted);
    });
});
