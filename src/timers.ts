import {SizedQueue} from "./containers";

export async function sleep(milisec: number): Promise<void> {
    // https://stackoverflow.com/a/64408281/2925169
    return new Promise(resolve => setTimeout(resolve, milisec));
}


export async function untilTrue(func: () => boolean | null, delay: number, limit: number) {
    while (limit-- && !func()) {
        await sleep(delay);
    }
}

export async function untilFalse(func: () => boolean | null, delay: number, limit: number) {
    return await untilTrue(() => !func(), delay, limit);
}


export async function untilInvariant(func: () => any | null, delay: number, limit: number, winSize: number) {
    const queue = new SizedQueue(winSize);
    while (limit-- && !queue.uniform) {
        queue.push(func());
        await sleep(delay);
    }
}