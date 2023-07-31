import React, { Fragment } from 'react';
import Style from './style';
import map from 'lodash/map';
import Link from 'next/link';
import PropTypes from 'prop-types';

const SubNavigation = ({ data: subNavigations }) => {
    const renderInnerSubNavs = innerSubNavs =>
        map(innerSubNavs, item => {
            const { title, href, as, prefetch } = item;
            return (
                <li className="submenu-item" key={item.id}>
                    <Link href={href} as={as} prefetch={prefetch}>
                        <a>{title}</a>
                    </Link>
                </li>
            );
        });
    const subNavs = () =>
        map(subNavigations, item => {
            const { title, subNavs, href, as, prefetch } = item;
            return (
                <li className="submenu-item" key={item.id}>
                    <Link href={href} as={as} prefetch={prefetch}>
                        <a className="submenu-text">{title}</a>
                    </Link>
                    {subNavs && subNavs.length > 0 ? <ul>{renderInnerSubNavs(subNavs)}</ul> : <Fragment />}
                </li>
            );
        });
    return <Style>{subNavs()}</Style>;
};
export default SubNavigation;

SubNavigation.propTypes = {
    data: PropTypes.object,
};
