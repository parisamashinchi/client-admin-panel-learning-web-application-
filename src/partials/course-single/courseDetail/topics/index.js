import React from 'react';
import Style from './style';
import CourseVideoButton from './courseVideoButton';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import textDots from 'utils/getters/textDots';
import PersianNumber from 'utils/getters/PersianNumber';
import { Scrollbars } from 'react-custom-scrollbars';
const Topics = props => {
    const { className, active, open, data ,season,courseID} = props;

    const renderFarm = () =>
        map(data, (lesson, index) => {
            const { type, model } = lesson;
            const { title, descriptions, media_url, attachment_url, pdf_url, duration, video_url } = model;
            const isPremium = (pdf_url && pdf_url !== '') || !(video_url && video_url !== '');
            return (
                <div key={index} className={index % 2 === 0 ? "topics-item even-item" : "topics-item"}>
                    <div className="topics-item-wrapper">
                        <div className="topics-title-wrapper">
                            <PersianNumber className="counter">{index + 1}</PersianNumber>
                            <h1 className="topics-title">{textDots(title, 100)}</h1>
                        </div>
                        <CourseVideoButton locked={isPremium} type={type} data={model} season={season} courseID={courseID} className="course-video-button" />
                    </div>
                </div>
            );
        });
    const renderView = ({ style, ...props })=> {
        const customStyle = {
            position: 'relative!important',
            direction: 'ltr',
            'overflow-x': 'hidden!important',
            'overflow-y': 'hidden!important',
    };
        return (
            <div {...props} style={{ ...style, ...customStyle }}/>
        );
    }
    return (

            <Style className={className} active={active} open={open}>
                {open
                    ?  <Scrollbars renderView={renderView}>
                        <div className="topics-list">
                            {renderFarm()}
                        </div>
                    </Scrollbars>
                    :
                    <div className="topics-list">
                        {renderFarm()}
                    </div>

                }
            </Style>

    );
};
export default Topics;

Topics.propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool,
};
