import {removePrefix} from "./str";


export function encodeURL(url?: string): string {
    url = url || window.location.href;
    return encodeURIComponent(removePrefix(url, window.location.origin));
}


export function inferFetchOptions(data?: any) {
    if (data === undefined || data === null) {
        return undefined;
    }
    if (data instanceof FormData) {
        return {
            method: 'POST',
            body: data,
        }
    }
    return {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
}