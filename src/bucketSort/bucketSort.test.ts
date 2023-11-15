import { beforeEach, describe, expect, test } from "@jest/globals";
import { sorted, unsorted } from "../utils";
import { bucketSort } from "./bucketSort";

describe("Bucket sort test", () => {
    let arr;

    beforeEach(() => {
        arr = unsorted;
    });

    test("Should sort array", () => {
        expect(bucketSort(arr)).toEqual(sorted);
    });
});
