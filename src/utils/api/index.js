import React from 'react';
import { create } from 'apisauce';
import Cookies from "js-cookie";
import isEmpty from 'lodash/isEmpty';


export const api = create({
    baseURL: process.env.REACT_APP_AMOOZAL_API_URL,
    headers: {
        'Accept-Language': 'fa',
        'Content-Type': 'application/json; charset=utf-8; v=1.0',
        // 'Authorization' : ''
    },
});

// export function getAuthHeader(ctx) {
//     const tokenCookieName = `${COOKIE_TOKEN}-${uniqueId(ctx)}`;
//     const token = get(nextCookies(ctx), tokenCookieName, undefined);
//     return { headers: { Authorization: `Bearer ${token}` } };
// }

// export async function authReq(req) {
//     const tokenCookieName = `${COOKIE_TOKEN}-${uniqueId()}`;
//     const token = Cookies.get(tokenCookieName);
//     if (token) {
//         return await req();
//     }
// }

// export async function serverAuthReq(req, ctx) {
//     const tokenCookieName = `${COOKIE_TOKEN}-${uniqueId(ctx)}`;
//     const token = get(nextCookies(ctx), tokenCookieName, undefined);
//     if (token) {
//         return await req();
//     }
// }

api.addAsyncRequestTransform(request => async () => {
    // await console.log("request", request);
    // todo add token to request in the future
    // const token = JSON.parse(
    //     get(parseCookies(), COOKIE_APP_USER_CREDENTIAL, '{}')
    // );
    // let token = undefined;
    // const tokenCookieName = `${COOKIE_TOKEN}-${uniqueId()}`;
    // token = Cookies.get(tokenCookieName);
    // if (token) {
    //     request.headers['Authorization'] = `Bearer ${token}`;
    // }
});
api.addResponseTransform(response => {
    switch (response.status) {
        case 401: {
            // removeUserCredentials();
        }
            break;
        // case 403:
        //     message.error(response.error.errorDescription);
        //     break;
        // case 404:
        //     {
        //     }
        //     break;
        // case 500:
        //     message.error(response.error.errorDescription);
        //     break;
        // default:
        // code block
    }
    if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 204
    ) {
        return response;
    } else {
        throw response;
    }
});

function createRequestHeaders(ctx, params) {
    const headers = {};
    if (ctx && ctx.req) {
        const userAgent = ctx.req && ctx.req.headers['user-agent'];
        if (userAgent) {
            headers['User-Agent'] = userAgent;
        }
    }
    // else {
    //      if(!isEmpty(params) && params.hasOwnProperty('token')) {
    //          headers['Authorization'] = params.token;
    //          Cookies.set('token', params.token, {
    //              path: '/',
    //          })
    //     } else if(isEmpty(params) || !params.hasOwnProperty('token')){
    //          if(!isEmpty(Cookies.get('token'))){
    //              headers['Authorization'] = Cookies.get('token');
    //          }
    //     }
    // }
    return headers;
}


export async function getRequest(url, params, ctx) {
    return api.get(url, params, { headers: createRequestHeaders(ctx, params)});
}

export async function postRequest(url, body, ctx) {
    return api.post(url, body, { headers: createRequestHeaders(ctx)});
}

export async function putRequest(url, body, ctx) {
    return api.put(url, body, { headers: createRequestHeaders(ctx) });
}

export async function deleteRequest(url, params, ctx) {
    return api.delete(url, params, { headers: createRequestHeaders(ctx) });
}
