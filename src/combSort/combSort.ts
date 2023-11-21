import { bubbleSort } from "../bubbleSort/blubbleSort";
import { swap } from "../utils";

export function combSort(arr: number[]): number[] {
    let sorted = false;
    const shrink = 1.3;
    let gap = arr.length;

    while (!sorted) {
        sorted = true;
        gap = Math.floor(gap / shrink);

        if (gap <= 1) {
            sorted = true;
        }
        for (let i = 0; i < arr.length - gap; i++) {
            if (arr[i] > arr[i + gap]) {
                swap(i, i + gap, arr);
            }
        }
    }

    return bubbleSort(arr);
}
