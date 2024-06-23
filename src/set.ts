type ArrayOrSet = any[] | Set<any>;
// https://mariusschulz.com/blog/downlevel-iteration-for-es3-es5-in-typescript
// https://stackoverflow.com/questions/53441292/why-downleveliteration-is-not-on-by-default


export function union(a: ArrayOrSet, b: ArrayOrSet) {
    return new Set([...a, ...b]);
}

export function intersection(a: ArrayOrSet, b: ArrayOrSet) {
    b = new Set(b);
    return new Set([...a].filter(x => b.has(x)));
}

export function difference(a: ArrayOrSet, b: ArrayOrSet) {
    b = new Set(b);
    return new Set([...a].filter(x => !b.has(x)));
}

