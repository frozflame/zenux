/* mimic python dict.items() */
export function items(obj: any) {
    return Object.entries(obj);
}

/* mimic python dict.keys() */
export function keys(obj: any) {
    return Object.keys(obj);
}

/* mimic python dict.values() */
export function values(obj: any) {
    return Object.values(obj);
}


export function get(obj: any, key: string, default_: any) {
    let null_values = [null, undefined];
    if (null_values.includes(obj)) {
        return default_;
    }
    let val = obj[key];
    if (null_values.includes(val)) {
        return default_;
    }
}

export function setdefault(obj: any, key: string, default_: any) {
    let val = obj[key];
    if (val === undefined) {
        obj[key] = default_;
        return default_;
    }
    return val;
}

export function pop(obj: any, key: string, default_: any) {
    let val = obj[key];
    if (val === undefined) {
        return default_;
    }
    delete obj[key];
    return val;
}

export function popitem(obj: any) {
    let _keys = keys(obj);
    if (!_keys) {
        return undefined;
    }
    let key = _keys[0];
    return [key, obj[key]];
}

export function fromkeys(keys: string[], val: any) {
    let obj = {};
    if (val === undefined) {
        val = null;
    }
    keys.forEach(function (k: string) {
        obj[k] = val;
    });
    return obj;
}

export function update(obj: any, other: any) {
    return Object.assign(obj, other);
}


export function clear(obj) {
    Object.keys(obj).forEach(key => {
        delete obj[key];
    });
}