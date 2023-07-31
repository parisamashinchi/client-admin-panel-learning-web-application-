import React from 'react';
import Style from './style';
import PropTypes from 'prop-types';

const FactorItem = props => {
    const { children, data } = props;
    const { title } = data;
    return (
        <Style>
            <div className="factor-item-container">
                <div className="factor-item">
                    <div className="factor-header">
                        <h1 className="factor-title">{title}</h1>
                    </div>
                    {children}
                </div>
            </div>
        </Style>
    );
};
export default FactorItem;

FactorItem.propTypes = {
    data: PropTypes.object.isRequired,
};
