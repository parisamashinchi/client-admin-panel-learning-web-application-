import React from 'react';
import Style from './style';
import PropTypes from 'prop-types';

const TextArea = props => {
    const { placeholder, rows, className, ...rest } = props;

    return <Style placeholder={placeholder} rows={rows} className={className} {...rest} />;
};
export default TextArea;

TextArea.propTypes = {
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    className: PropTypes.string,
    rest: PropTypes.object,
};
