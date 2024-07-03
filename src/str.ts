export function removePrefix(s: string, prefix: string) {
    if (!s.startsWith(prefix)) {
        return s;
    }
    return s.slice(prefix.length);
}