import { swap } from "../utils";

export function bubbleSort(arr: number[]): number[] {
    if (arr.length < 2) {
        return arr;
    }
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(i, i + 1, arr);
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}
