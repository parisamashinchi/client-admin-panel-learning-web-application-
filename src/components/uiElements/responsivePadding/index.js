import React from 'react';
import Style from './style';
import PropTypes from 'prop-types';

const ResponsivePadding = ({ style, className, children, justRight }) => {
    return (
        <Style justRight={justRight} style={style} className={className}>
            <div className="responsive-padding-wrapper">{children}</div>
        </Style>
    );
};
export default ResponsivePadding;

ResponsivePadding.propTypes = {
    style : PropTypes.object,
    className : PropTypes.string,
    justRight: PropTypes.bool,
};

