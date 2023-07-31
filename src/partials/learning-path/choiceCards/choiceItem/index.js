import React from 'react';
import Style from './style';
import PropTypes from 'prop-types';

const ChoiceItem = ({ id, data, onClick }) => {
    const { media_url, title } = data;
    return (
        <Style>
            <div onClick={onClick} id={id} className="choice-item">
                <div className="choice-image">
                    <img src={media_url} alt={title} />
                </div>
                <div className="choice-title">
                    <h2>{title}</h2>
                </div>
            </div>
        </Style>
    );
};
export default ChoiceItem;

ChoiceItem.propTypes = {
    data: PropTypes.object.isRequired,
};
