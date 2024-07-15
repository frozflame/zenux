export function paginate1(items: any[], pageSize: number, getSize: (item: any) => number): any[][] {
    let currentPage = [];
    let currentPageUsage = 0;
    const pages = [currentPage];
    items.forEach((item: any) => {
        const size = getSize(item);
        if (size > pageSize) {
            throw new Error("item larger than page size");
        }
        currentPageUsage += size;
        if (currentPageUsage > pageSize) {
            currentPage = [];
            pages.push(currentPage);
            currentPageUsage = size;
        }
        currentPage.push(item);
    });
    return pages;
}

export function joinClassNames(...classNames: (string | undefined)[]) {
    classNames = classNames.filter(Boolean);
    if (classNames.length === 0) return undefined;
    return classNames.join(' ');
}

export function dedup(items: any[]) {
    const primitives = new Set();
    const stringifiedObjects = new Set();
    return items.filter(item => {
        if (['string', 'number', 'boolean', 'undefined'].includes(typeof item)) {
            if (primitives.has(item)) {
                return false;
            }
            primitives.add(item);
            return true;
        }
        const stringified = JSON.stringify(item);
        if (stringifiedObjects.has(stringified)) {
            return false;
        }
        stringifiedObjects.add(stringified);
        return true;
    });
}