import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

export function getParams(ctx) {
    const reqParams = get(ctx, 'req.params', {});
    const params = get(ctx, 'params', {});
    return !isEmpty(reqParams) ? reqParams : params;
}

export function getQuery(ctx) {
    const reqQuery = get(ctx, 'req.query', {});
    const query = get(ctx, 'query', {});
    return !isEmpty(reqQuery) ? reqQuery : query;
}

export function getPageParams(ctx) {
    const params = getParams(ctx);
    const query = getQuery(ctx);
    return { ...params, ...query };
}
