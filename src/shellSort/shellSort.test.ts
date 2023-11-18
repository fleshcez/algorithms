import { beforeEach, describe, expect, test } from "@jest/globals";
import { sorted, unsorted } from "../utils";
import { shellSort } from "./shellSort";

describe("Insert sort test", () => {
    let arr;

    beforeEach(() => {
        arr = unsorted;
    });

    test("Should sort array", () => {
        expect(shellSort(arr)).toEqual(sorted);
    });
});
