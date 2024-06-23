function sleep(ms: number) {
    // https://stackoverflow.com/a/64408281/2925169
    return new Promise(resolve => setTimeout(resolve, ms));
}


export async function untilTrue(func: () => boolean | null, delay: number, limit: number) {
    while (limit-- && !func()) {
        await sleep(delay);
    }
}

export async function untilFalse(func: () => boolean | null, delay: number, limit: number) {
    return await untilTrue(() => !func(), delay, limit);
}


function allIdentical(arr: any[]): boolean {
    return arr.slice(1).every(val => val === arr[0]);
}


class SizedQueue {
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


export async function untilInvariant(func: () => any | null, delay: number, limit: number, winSize: number) {
    const queue = new SizedQueue(winSize);
    while (limit-- && !queue.uniform) {
        queue.push(func());
        await sleep(delay);
    }
}