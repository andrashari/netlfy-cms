const esc = encodeURIComponent;

export function objToParams(obj) {
    return `?${Object.keys(obj).map(key => `${esc(key)}=${esc(obj[key])}`).join('&')}`;
}

export function convertToKebabCase(string) {
    return string.replace(/\s+/g, '-').toLowerCase();
}

export function createGroupedArray(array, chunkSize) {
    const groups = [];
    let i;

    for (i = 0; i < array.length; i += chunkSize) {
        groups.push(array.slice(i, i + chunkSize));
    }

    return groups;
}