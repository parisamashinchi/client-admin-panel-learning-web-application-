import React from 'react';
import Style from './style';
import Footer from './footer';
import Header from './header';
import BackToTop from './backToTop';
import PropTypes from 'prop-types';

const DefaultLayout = ({ children, blackBackground, path}) => {
    return (
        <div id="main">
            <Header blackBackground={blackBackground} path={path} />
            <Style>{children}</Style>
            <Footer />
            <BackToTop />
        </div>
    );
};
DefaultLayout.propTypes = {
    blackBackground: PropTypes.bool,
};
export default DefaultLayout;
