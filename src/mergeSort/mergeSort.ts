export function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
    const res = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] > right[rightIndex]) {
            res.push(right[rightIndex]);
            rightIndex++;
        } else {
            res.push(left[leftIndex]);
            leftIndex++;
        }
    }

    return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
