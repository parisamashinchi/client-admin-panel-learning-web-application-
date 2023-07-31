import React from 'react';
import Style from '../subNavigation/style';
import map from 'lodash/map';
import Link from 'next/link';
import PropTypes from 'prop-types';
import * as constants from '../../../../../partials/constants';
import Cookies from "js-cookie";
import { getRequest } from 'utils/api';
import {Button} from 'antd';

const LoginSubNavigation = ({ data: subNavigations }) => {
    function logOutClick(href) {
        (async () => {
            try {
                await getRequest(`${constants.GET_LOGOUT_URL}` );
                Cookies.set('user', '', {
                    path: '/',
                })
                Cookies.set('token', '', {
                    path: '/',
                })
                window.location.href =  href.href.PanelUrl
            } catch (e) {
            }
        })();
    }
    const subNavs = () =>
        map(subNavigations, item => {
            const { title, href, as, prefetch,id } = item;
            return (
                <li className="submenu-item" key={item.id}>
                    {id === 2
                        ? <Button onClick={()=>logOutClick({href})}>
                            {title}
                            </Button>
                        : <Link href={href} as={as} prefetch={prefetch}>
                            <a className="submenu-text" >{title}</a>
                        </Link>
                }
                </li>
            );
        });
    return <Style>{subNavs()}</Style>;
};
export default LoginSubNavigation;

LoginSubNavigation.propTypes = {
    data: PropTypes.object,
};
