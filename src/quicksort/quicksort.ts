import { swap } from "../utils";

export function quickSort(values: number[]): number[] {
    // let max = Number.NEGATIVE_INFINITY;
    // let indexOfMax = 0;

    // values.forEach((v, i) => {
    //     if (v > max) {
    //         max = v;
    //         indexOfMax = i;
    //     }
    // });

    // swap(indexOfMax, values.length - 1, values);

    // either move max element to the end or introduce positive infinity
    // at the end and then remove it

    const patchedValues = [...values, Number.POSITIVE_INFINITY];
    const res = sort(0, patchedValues.length - 1, patchedValues);
    res.splice(res.length - 1, 1);
    return res;
}

function sort(lowIndex: number, highIndex: number, values: number[]): number[] {
    if (lowIndex < highIndex) {
        const j = partition(lowIndex, highIndex, values);
        sort(lowIndex, j, values);
        sort(j + 1, highIndex, values);
    }
    return values;
}

function partition(l: number, h: number, values: number[]): number {
    let pivot = values[l];
    let i = l;
    let j = h;

    while (i < j) {
        do {
            i++;
        } while (values[i] <= pivot);

        do {
            j--;
        } while (values[j] > pivot);

        if (i < j) {
            swap(i, j, values);
        }
    }
    swap(l, j, values);
    return j;
}

export function quickSort2(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const left = [];
    const right = [];
    const pivot = arr[arr.length - 1];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort2(left).concat(pivot, quickSort2(right));
}
