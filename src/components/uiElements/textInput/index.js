import React, { Component } from 'react';
import Style from './style';
import PropTypes from 'prop-types';

export default class TextInput extends Component {
    triggerOnChange = e => {
        const value = e.target.value;
        const { onChange, formatter, validator } = this.props;
        if (validator) {
            if (validator(value)) {
                onChange(formatter ? formatter(value) : value);
            }
        } else {
            onChange(formatter ? formatter(value) : value);
        }
    };
    render() {
        return <Style {...this.props} onChange={this.triggerOnChange} />;
    }
}

export function numberValidator(value) {
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    return (!isNaN(value) && reg.test(value)) || value === '' || value === '-';
}

TextInput.propTypes = {
    formatter: PropTypes.func,
    validator: PropTypes.func,
};
