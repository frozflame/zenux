// https://stackoverflow.com/a/44145857/2925169

export function slice(array: any[], start: number, stop: number, step: number) {
    if (!step) {
        return array.slice(start, stop);
    }
    let n = [];
    for (let i = start; i < stop; i += step) {
        n.push(array[i]);
    }
    return n;
}


export function repeat(array: any, n: number) {
    return Array(n).fill(array).flat();
}


export function zip(rows: any[][]) {
    return rows[0].map((_, c) => rows.map(row => row[c]));
}
