function insertSort(arr: number[], left: number, right: number): number[] {
    for (let i = left + 1; i <= right; i++) {
        const keyItem = arr[i];
        let j = i - 1;

        while (j >= left && arr[j] > keyItem) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = keyItem;
    }

    return arr;
}

function merge(left: number[], right: number[]) {
    let i = 0;
    let j = 0;
    const merged = [];

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }

    return merged.concat(left.slice(i)).concat(right.slice(j));
}

export function timSort(arr: number[]): number[] {
    const minRun = 32;
    const n = arr.length;

    for (let i = 0; i < n; i += minRun) {
        insertSort(arr, i, Math.min(i + minRun - 1, n - 1));
    }

    let size = minRun;
    while (size < n) {
        for (let start = 0; start < n; start += size * 2) {
            const midpoint = start + size - 1;
            const end = Math.min(start + size * 2 - 1, n - 1);
            const merged = merge(
                arr.slice(start, midpoint + 1),
                arr.slice(midpoint + 1, end + 1)
            );
            arr.splice(start, merged.length, ...merged);
        }
        size *= 2;
    }

    return arr;
}
