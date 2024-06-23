export * as dict from "./pythonish/dict";
export * as list from "./pythonish/list";

export function str(obj: any) {
    return '' + obj;
}

export function int(value: any) {
    return parseInt(value);
}

export function float(value: any) {
    return parseFloat(value);
}


export function is_null(obj: any) {
    return [null, undefined].includes(obj);
}


export function is_iterable(obj: any): boolean {
    // checks for null and undefined
    if (is_null(obj)) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}

export const json = {
    loads: JSON.parse,
    dumps: function (obj: any, indent: number) {
        return JSON.stringify(obj, undefined, indent);
    }
};
