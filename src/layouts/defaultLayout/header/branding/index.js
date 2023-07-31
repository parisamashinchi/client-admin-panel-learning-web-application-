import React from 'react';
import Style from './style';
import Link from 'next/link';
import routes from 'routes';
import paths from 'paths';
import PropTypes from 'prop-types';

const Branding = ({ mobile }) => {
    const logo = () => {
        if (mobile) {
            return <img className="mobile-logo" src="/static/images/logo-desktop.png" alt="آموزال" />;
        } else {
            return <img className="desktop-logo" src="/static/images/logo-desktop.png" alt="آموزال" />;
        }
    };
    return (
        <Style>
            <h1 className="logo">
                <Link href={paths.PATH_HOME} as={routes.ROUTE_HOME} prefetch>
                    <a>{logo()}</a>
                </Link>
            </h1>
        </Style>
    );
};
Branding.propTypes = {
    mobile: PropTypes.bool,
};
export default Branding;
