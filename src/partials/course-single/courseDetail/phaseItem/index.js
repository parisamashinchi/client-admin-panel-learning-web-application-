import React from 'react';
import Style from './style';
import ExpandableToggle from '../expandableToggle';
import Topic from '../topics';
import PropTypes from 'prop-types';
import textDots from 'utils/getters/textDots';
import PersianNumber from 'utils/getters/PersianNumber';

const PhaseItem = props => {
    const { className, data, index, onToggle, open ,courseID, length} = props;
    const { title, descriptions, is_published, lessons } = data;
    return (
        <Style className={className} active={is_published} unlocked={is_published}>
            <div className="phase-item-wrapper">
                <h1 className="phase-item-title">
                    <PersianNumber className="counter">{title}</PersianNumber>
                </h1>
                <p className="phase-item-description">{descriptions}</p>
                <ExpandableToggle
                    active={is_published}
                    open={open}
                    onClick={e => onToggle(open ? undefined : index)}
                    length={length}
                    index={index}
                    className={`${open ? 'open-toggle' : ''} `}
                />
                <Topic active={is_published} open={open} className="topics" data={lessons} season={props.data.id} courseID={courseID}/>
            </div>
        </Style>
    );
};
export default PhaseItem;

PhaseItem.propTypes = {
    className: PropTypes.string,
};
