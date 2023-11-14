export const unsorted = [10, 16, 8, 12, 15, 6, 3, 9, 5];
export const sorted = [3, 5, 6, 8, 9, 10, 12, 15, 16];

export function swap(i: number, j: number, arr: number[]) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
