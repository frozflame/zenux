export function allIdentical(arr: any[]): boolean {
    return arr.slice(1).every(val => val === arr[0]);
}

export class SizedQueue {
    readonly size: number;
    readonly items: any[];

    constructor(size: number) {
        this.size = size;
        this.items = [];
    }

    push(...items: any[]) {
        this.items.push(...items);
        while (this.items.length > this.size) {
            this.items.shift();
        }
    }

    get length(): number {
        return this.items.length;
    }

    get full(): boolean {
        return this.items.length >= this.size;
    }

    get uniform(): boolean {
        return this.full && allIdentical(this.items);
    }
}