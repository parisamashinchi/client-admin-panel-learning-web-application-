import React from 'react';
import Style from './style';
import PropTypes from 'prop-types';

const ResponsiveBox = ({ style, className, children }) => {
    return <Style className={className} style={style}>
            <div className="responsive-box-wrapper">{children}</div>
        </Style>;
};
export default ResponsiveBox;

ResponsiveBox.propTypes = {
    style : PropTypes.object,
    className : PropTypes.string,
};
