import React from 'react';
import { Col, Row } from 'antd';
import basicStyle from 'theme/style';
import Style from './style';
import SocialImages from 'components/socialImages';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import Swiper from 'components/swiper';
import map from 'lodash/map';

const { rowStyle } = basicStyle;
const SocialDetail = ({ data }) => {
    const {properties} = data;
    const renderSwiperItem = item => {
        const {title, media_url} = item;
        return (
            <div className="features-mobile-wrapper">
                <img src={media_url} />
                <div className="text">{title}</div>
            </div>
        );
    };
    const renderItem = () => map(properties, (item, index) => {
        const {title, media_url} = item;
        return (
            <Col span={6} key={index} className="feature-item">
                <img src={media_url} />
                <div className="text">{title}</div>
            </Col>
        );
    });
    const swiperParams = {
        slidesPerView: 4,
        rtl: true,
        breakpoints: {
            480: { slidesPerView: 2, spaceBetween: 28 },
        },
        spaceBetween: 38,
    };
    return (
        <Style>
            <ResponsiveBox>
                <ResponsivePadding>
                    <div className="social-detail">
                        <Row type="flex">
                            <Col lg={13} md={12} xs={24}>
                                <SocialImages />
                            </Col>
                            <Col lg={11} md={12} xs={24} className="features">
                                <div className="features-desktop">
                                    <Row
                                        type="flex"
                                        style={{ ...rowStyle }}
                                        gutter={{ xl: 16, md: 8, sm: 20, xs: 10 }}
                                        className="gutter-pre-style-xs-10 gutter-pre-style-md-8 gutter-pre-style-md-8 gutter-pre-style-xl-16"
                                    >
                                        {renderItem()}
                                    </Row>
                                </div>
                                <div className="features-mobile">
                                    <Swiper {...swiperParams} noMargin renderItem={({ item }) => renderSwiperItem(item)} itemClassName="feature-item" data={properties} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default SocialDetail;
