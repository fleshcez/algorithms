export function shellSort(arr: number[]): number[] {
    let sublistCount = Math.floor(arr.length / 2);

    while (sublistCount > 0) {
        for (let i = 0; i < arr.length; i++) {
            gapInsertionSort(arr, i, sublistCount);
        }
        sublistCount = Math.floor(sublistCount / 2);
    }
    return arr;
}

function gapInsertionSort(arr: number[], start, gap): void {
    for (let i = start + gap; i < arr.length; i++) {
        const currentValue = arr[i];
        let position = i;

        while (position >= gap && arr[position - gap] > currentValue) {
            arr[position] = arr[position - gap];
            position = position - gap;
        }

        arr[position] = currentValue;
    }
}
