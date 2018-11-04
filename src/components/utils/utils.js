export function convertToKebabCase(string) {
    return string.replace(/\s+/g, '-').toLowerCase();
}