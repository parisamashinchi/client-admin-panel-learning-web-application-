import React from 'react';
import Style from './style';
import { withRouter } from 'next/router';
import IntlMessages from 'utils/intlMessages';
import PropTypes from 'prop-types';

const QuestionPathItem = ({ data, setCurrent, current }) => {
    const { id, titleId } = data;
    return (
        <Style active={id === current}>
            <div onClick={e => setCurrent(id)} className="path-item">
                <span>
                    <IntlMessages id={titleId} />
                </span>
            </div>
        </Style>
    );
};
export default withRouter(QuestionPathItem);

QuestionPathItem.propTypes = {
    data: PropTypes.object.isRequired,
    setCurrent: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
};
