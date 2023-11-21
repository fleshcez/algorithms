import { beforeEach, describe, expect, test } from "@jest/globals";
import { sorted, unsorted } from "../utils";
import { radixSort } from "./radixSort";

describe("Insert sort test", () => {
    let arr;

    beforeEach(() => {
        arr = unsorted;
    });

    test("Should sort array", () => {
        expect(radixSort(arr)).toEqual(sorted);
    });
});
