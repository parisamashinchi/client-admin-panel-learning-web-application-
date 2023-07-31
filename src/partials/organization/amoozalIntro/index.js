import React from 'react';
import Style from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import IntlMessages from 'utils/intlMessages';
import PlaySign from 'static/icons/play-sign-2.svg';
import { getStore } from 'store';
import VideoPlayerModal from 'components/videoPlayerModal';

const AmoozalIntro = () => {
   const mp4_videos = [
       {
           "label": "360P",
           "link": "https://s4fployi.arvanvod.com/zy8Zl4ZA04/z2746aQYkj/h_360_592k.mp4",
           "selected": false
       },
       {
           "label": "480P",
           "link": "https://s4fployi.arvanvod.com/zy8Zl4ZA04/z2746aQYkj/h_480_592k.mp4",
           "selected": false
       },
       {
           "label": "720P",
           "link": "https://s4fployi.arvanvod.com/zy8Zl4ZA04/z2746aQYkj/h_720_592k.mp4",
           "selected": true
       }
   ]

    const openVideoModal = () => {
        getStore('ModalContainer').showModal(<VideoPlayerModal player_url={mp4_videos}/>, { closable: true, fullWidth:true });
    };
    return (
        <Style>
            <ResponsiveBox>
                <div className="amoozal-intro">
                    <div className="amoozal-intro-wrapper">
                        <h1 className="amoozal-intro-title">
                            <IntlMessages id="organization.amoozalIntro.title" />
                        </h1>
                        <p className="amoozal-intro-description">
                            <IntlMessages id="organization.amoozalIntro.description" />
                        </p>
                        <button className="play-video-btn" onClick={openVideoModal}>
                            <PlaySign />
                        </button>
                    </div>
                </div>
            </ResponsiveBox>
        </Style>
    );
};
export default AmoozalIntro;
