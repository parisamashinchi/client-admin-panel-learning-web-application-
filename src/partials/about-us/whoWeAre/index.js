import React from 'react';
import Style from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import { Col, Row } from 'antd';
import basicStyle from 'theme/style';
import IntlMessages from 'utils/intlMessages';
import { getStore } from 'store';
import VideoPlayerModal from 'components/videoPlayerModal';
import { formatMessage } from 'localization';

const WhoWeAre = () => {
    const { rowStyle } = basicStyle;
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
        getStore('ModalContainer').showModal(<VideoPlayerModal  player_url={mp4_videos} />, { closable: true, fullWidth:true });
    };
    return (
        <Style>
            <ResponsiveBox>
                <ResponsivePadding>
                    <div className="fixed-background-1" />
                    <div className="fixed-background-2" />
                    <div className="fixed-background-3" />
                    <div className="fixed-background-4" />
                    <div className="who-we-are">
                        <div className="who-we-are-item">
                            <Row type="flex" className="gutter-pre-style-lg-50" gutter={{ lg: 50 }}>
                                <Col lg={12} xs={24} className="description">
                                    <h1 className="wea-item-title">
                                        <IntlMessages id="aboutUs.item1.title" />
                                    </h1>
                                    <p className="wea-item-description">
                                        <IntlMessages id="aboutUs.item1.description" />
                                    </p>
                                </Col>
                                <Col lg={12} xs={24} className="image">
                                    <div className="image-wrapper">
                                        <img src="/static/images/about-us-1.png" alt={formatMessage('aboutUs.item1.title')} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="who-we-are-item">
                            <Row type="flex" style={rowStyle}>
                                <Col lg={12} xs={24} className="description">
                                    <h1 className="wea-item-title">
                                        <IntlMessages id="aboutUs.item2.title" />
                                    </h1>
                                    <p className="wea-item-description">
                                        <IntlMessages id="aboutUs.item2.description" />
                                    </p>
                                    <div className="wea-description-footer">
                                        <button onClick={openVideoModal}>
                                            <img src="/static/icons/about-us-play-sign.svg" alt="تماشای ویدئو" />
                                        </button>
                                        <div className="play-video">
                                            <IntlMessages id="aboutUs.item2.footer" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} xs={24} className="image">
                                    <img src="/static/images/about-us-2.png" />
                                </Col>
                            </Row>
                        </div>
                        <div className="who-we-are-item">
                            <Row type="flex" style={rowStyle} gutter={{ lg: 50 }} className="gutter-pre-style-lg-50">
                                <Col lg={12} xs={24} className="description">
                                    <h1 className="wea-item-title">
                                        <IntlMessages id="aboutUs.item3.title" />
                                    </h1>
                                    <p className="wea-item-description">
                                        <IntlMessages id="aboutUs.item3.description" />
                                    </p>
                                </Col>
                                <Col lg={12} xs={24} className="image">
                                    <img src="/static/images/about-us-3.jpg" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default WhoWeAre;
