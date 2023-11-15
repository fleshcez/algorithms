import { quickSort2 } from "../quicksort/quicksort";

export function bucketSort(arr: number[]): number[] {
    let buckets = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        buckets[i] = [];
    }

    arr.forEach((a) => {
        const bucket = Math.floor(a / arr.length);
        buckets[bucket].push(a);
    });

    const res = buckets.reduce((prev, cur) => {
        return [...prev, ...quickSort2(cur)];
    }, []);

    return res;
}
