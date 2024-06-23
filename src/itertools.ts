function mod(a: number, n: number) {
    if (n < 0) {
        return -mod(a, -n);
    }
    a %= n;
    return a < 0 ? a + n : a;
}


export class cycle {
    array: any[];
    index: number;

    constructor(array: any[]) {
        this.array = array;
        this.index = 0;
    }

    next() {
        if (!this.array) {
            return null;
        }
        return this.array[mod(this.index++, this.array.length)];
    }
}
