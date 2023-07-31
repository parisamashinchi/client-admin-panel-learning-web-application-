import React from 'react';
import Style from './style';
import PropTypes from 'prop-types';

const ConditionItem = ({ data }) => {
    const { url, title } = data;
    return (
        <Style>
            <div className="condition-item">
                <div className="condition-image">
                    <img src={url} />
                </div>
                <div className="condition-title">
                    <h1 className="title">{title}</h1>
                </div>
            </div>
        </Style>
    );
};
export default ConditionItem;

ConditionItem.propTypes = {
    data: PropTypes.object.isRequired,
};
