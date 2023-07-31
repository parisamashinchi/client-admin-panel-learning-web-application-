import React from 'react';
import Style from './style';
import PropTypes from 'prop-types';

const HamburgerIcon = ({ open, onClick }) => {
    return (
        <Style open={open} onClick={onClick}>
            <span className="hamburger-icon-inner">
                <span className="line line-1" />
                <span className="line line-2" />
                <span className="line line-3" />
            </span>
        </Style>
    );
};
export default HamburgerIcon;

HamburgerIcon.propTypes = {
    open: PropTypes.bool,
    onClick: PropTypes.object,
};
