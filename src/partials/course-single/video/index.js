import React from 'react';
import Style from './style';
import { Card, Col, Collapse} from 'antd';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import VideoPlayerModal from 'components/videoPlayerModal';
import { getStore } from 'store';
import map from 'lodash/map';

const Videos = (data) => {
const openVideoModal = player_url => () => {
    getStore('ModalContainer').showModal(<VideoPlayerModal player_url={player_url} />, { closable: true, fullWidth:true });
};
    return (
        <Style>
            <ResponsiveBox>
                <ResponsivePadding>
                   <div class="head">
                     <img src="/static/icons/video.png" />
                        <h2>نمونه ای از ویديو های </h2>
                        <h3>دوره {data.data.header_title}</h3>
                    </div>
                       { map(data.data.free_videos, item => (
                        <Col xl={8} xs={24} className="videoBox">
                            <video src={item.video.video_url.mp4_videos[0].link}  onClick={openVideoModal(item.video.video_url.mp4_videos[0].link)} autoplay loop playsInline muted />
                        </Col>
                     ))}
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );

};
export default Videos;
