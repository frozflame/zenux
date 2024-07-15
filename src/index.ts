import {patch} from "./polyfills";

patch();


export function pageslice(values: any[], pageNum: number, pageSize: number): any[] {
    const start = pageSize * (pageNum - 1);
    const end = pageSize * pageNum;
    return values.slice(start, end);
}


export function clamp(x: number, min: number, max: number): number {
    if (x < min) {
        return min;
    }
    if (x > max) {
        return max;
    }
    return x;
}


export function range(...args: number[]) {
    let start: number;
    let stop: number;
    let step: number;
    switch (args.length) {
        case 1:
            start = 0;
            stop = args[0];
            step = 1;
            break;
        case 2:
            [start, stop] = args;
            step = 1;
            break;
        case 3:
            [start, stop, step] = args;
            break;
        default:
            throw new Error(`Invalid number of arguments: ${args.length}`);
    }
    const values: number[] = [];
    for (let i = start; i < stop; i += step) {
        values.push(i);
    }
    return values;
}


export * as pythonish from "./pythonish";
export * as string from "./string";
export {allIdentical, SizedQueue} from "./containers";
export {mod, cycle} from "./itertools";
export {encodeURL, inferFetchOptions} from "./requests";
export {union, intersection, difference} from "./set";
export {sleep, untilFalse, untilTrue, untilInvariant} from "./timers";
export {strftime} from "./strftime";
export {removePrefix} from "./str";
export {paginate1, joinClassNames, dedup} from "./misc";
