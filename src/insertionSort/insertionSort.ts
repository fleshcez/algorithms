import { swap } from "../utils";

export function insertionSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        let j = i;

        while (j > 0 && arr[j - 1] > arr[j]) {
            swap(j, j - 1, arr);
            j--;
        }
    }
    return arr;
}
