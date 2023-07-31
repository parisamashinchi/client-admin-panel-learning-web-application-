import React from 'react';
import Style from './style';
import PropTypes from 'prop-types';

const FaqItem = ({ data }) => {
    const { answer, active} = data;

    return (
        <Style active={active}>
            <p className="faq-answer">{answer}</p>
        </Style>
    );
};
export default FaqItem;

FaqItem.propTypes = {
    data: PropTypes.object.isRequired,
};
