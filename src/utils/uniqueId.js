import cookie from 'js-cookie';
import uuidv4 from 'uuid/v4';
import nextCookies from 'next-cookies';
import get from 'lodash/get';

const APP_UUID_COOKIE = 'app-uuid';

export default function(ctx) {
    let uniqueId = undefined;
    if (ctx && ctx.req) {
        uniqueId = get(nextCookies(ctx), APP_UUID_COOKIE, undefined);
    } else {
        uniqueId = cookie.get(APP_UUID_COOKIE);
    }
    if (uniqueId) {
        return uniqueId;
    } else {
        uniqueId = uuidv4();
        cookie.set(APP_UUID_COOKIE, uniqueId, { path: '/' });
        return uniqueId;
    }
}
