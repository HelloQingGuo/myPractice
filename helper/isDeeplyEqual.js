function isDeeplyEqual(src, dest) {
    if (typeof dest === "undefined") {
        return false;
    }
    // make sure they have the same amount of properties at the current level
    if (Object.keys(src).length !== Object.keys(dest).length) {
        return false;
    }
    for (const key in src) {
        if (src[key] === Object(src[key])) {
            // object type
            // dest[key] could be undefined if key does not exist in dest object
            if (!isDeeplyEqual(src[key], dest[key])) {
                return false;
            }
        } else {
            // primitive type
            if (dest[key] !== src[key]) {
                return false;
            }
        }

    }
    return true;
}