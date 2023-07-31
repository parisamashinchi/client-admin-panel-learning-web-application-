import React from 'react';
import Style from './style';
import IntlMessages from 'utils/intlMessages';
import { getStore } from 'store';
import VideoPlayerModal from 'components/videoPlayerModal';
import PropTypes from 'prop-types';
import { COURSE_TYPE_VIDEO } from 'utils/constants';
import { forceDownload } from 'utils/downloadUtils';
import Cookies from "js-cookie";
import { getRequest } from 'utils/api';
import * as constants from 'partials/course-single/constants';
import  isEmpty from "lodash/isEmpty";

const CourseVideoButton = props => {
    const { className, locked, type, data, season, courseID } = props;
    const openVideoModal = () => {
        (async () => {
            let  responseGetVideoUrl= {};
            let requestURL=`${constants.GET_VIDEO_URL}/${props.courseID}/season/${props.season}/video/${props.data.id}`;
            try {
                responseGetVideoUrl = await getRequest(requestURL);
                if(!isEmpty(responseGetVideoUrl)){
                    getStore('ModalContainer').showModal(<VideoPlayerModal player_url={responseGetVideoUrl.data.data.mp4_videos} />, { closable: true , fullWidth:true});
                }
           } catch (e) {
            }
        })();

    };
    const downloadFile = () => {
        const { video_url } = data;
        if(!locked) {
            forceDownload(video_url);
        }
    };
    const isVideo = type === COURSE_TYPE_VIDEO;
    return (
        <Style className={className} locked={locked}>
            {!locked
                ? <img src='/static/images/play-sign-white.svg' alt="قفل" className="play-sign"/>
                : <img src='/static/images/Lock.svg' alt="قفل"/>
            }
            <button className="course-video-button-wrapper" onClick={(isVideo) ? openVideoModal : downloadFile}>
                {/*{!locked*/}
                {/*    ? <img src='/static/images/play-sign-white.svg' alt="قفل"/>*/}
                {/*    : <img src='/static/images/Lock.svg' alt="قفل"/>*/}
                {/*}*/}
                {!locked &&
                    <span className="title">
                        <IntlMessages id='courseSingle.courseDetail.topics.unlocked'/>
                    </span>
                }
            </button>
        </Style>
    );
};
export default CourseVideoButton;

CourseVideoButton.propTypes = {
    className: PropTypes.string,
    locked: PropTypes.bool,
};
