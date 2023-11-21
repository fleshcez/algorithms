export function radixSort(arr: number[]): number[] {
    let consumedAllDigits = false;
    // Is used to divide and retrieve digits
    let temp;
    let placement = 1;

    while (!consumedAllDigits) {
        consumedAllDigits = true;
        let buckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < arr.length; i++) {
            temp = Math.floor(arr[i] / placement);
            const digit = temp % 10;
            buckets[digit].push(arr[i]);

            if (temp > 0 && consumedAllDigits) {
                // This means that it still found a digit after dividing by 10, 100..
                consumedAllDigits = false;
            }
        }

        let a = 0;
        for (let b = 0; b < 10; b++) {
            const bucket = buckets[b];
            for (let j = 0; j < bucket.length; j++) {
                arr[a] = bucket[j];
                a++;
            }
        }

        placement *= 10;
    }

    return arr;
}
