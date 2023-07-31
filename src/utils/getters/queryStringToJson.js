export default function(query) {
    if (query !== undefined && query !== null) {
        const pairs = query.startsWith('?') ? query.slice(1).split('&') : query.split('&');
        let result = {};
        pairs.forEach(function(pair) {
            pair = pair.split('=');
            result[pair[0]] = decodeURIComponent(pair[1] || '');
        });
        return JSON.parse(JSON.stringify(result));
    } else {
        return {};
    }
}
