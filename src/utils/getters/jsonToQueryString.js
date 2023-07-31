export default function jsonToQueryString(json) {
    if (Object.keys(json).length === 0) return '';
    return (
        '?' +
        Object.keys(json)
            .map(function(key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
            })
            .join('&')
    );
}
