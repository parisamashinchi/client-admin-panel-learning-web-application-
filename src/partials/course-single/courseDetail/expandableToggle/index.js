import React from 'react';
import Style from './style';
import {Divider, Icon} from 'antd';
import IntlMessages from 'utils/intlMessages';
import PropTypes from 'prop-types';

const ExpandableToggle = props => {
    const { active, open, onClick, className,length, index } = props;
    return (
        <Style active={active} className={className} onClick={onClick}>
            <div className="expandable-toggle" >
                <Icon type={`${active ? (open ? 'up' : 'down') : 'lock'}`} className="icon" />
                <div className="expandable-title">
                    <IntlMessages id={`${active ? 'courseSingle.courseDetail.expandableToggleTitle.unlocked' : 'courseSingle.courseDetail.lockedBtn'}`} />
                </div>
                {length !== index+1  && <Divider type="vertical" className="divider"/>}
            </div>
        </Style>
    );
};
export default ExpandableToggle;

ExpandableToggle.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
};
