export function checkNull(data) {
    if (data === null || data === undefined || data === '') {
        return ' ';
    } else {
        return data;
    }
}
