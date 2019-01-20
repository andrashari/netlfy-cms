const esc = encodeURIComponent;

export function objToParams(obj) {
    return `?${Object.keys(obj).map(key => `${esc(key)}=${esc(obj[key])}`).join('&')}`;
}

export function convertToKebabCase(string) {
    return string.replace(/\s+/g, '-').toLowerCase();
}

export function chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    var myChunk = null;

    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index + chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}

export function createGroupedArray(array, chunkSize) {
    const groups = [];
    let i;

    for (i = 0; i < array.length; i += chunkSize) {
        groups.push(array.slice(i, i + chunkSize));
    }

    return groups;
}