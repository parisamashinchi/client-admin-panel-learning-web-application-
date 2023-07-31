import React from 'react';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import Style from './style';
import {Col, Row} from 'antd';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import Swiper from 'components/swiper';
import Card from 'components/card';
import HeaderLink from 'components/headerLink';
import PropTypes from 'prop-types';

const FeaturedCourseBox = ({ data }) => {
    const swiperParams = {
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            990: { slidesPerView: 3 },
            700: { slidesPerView: 2 },
            480: { slidesPerView: 1.4 },
        },
    };
    const renderItem = item => {
        return <Card data={item} />;
    };
    return (
        <ResponsiveBox>
            <Style>
                <Row type="flex">
                    <Col span={24}>
                        <ResponsivePadding>
                            <HeaderLink title="home.promotedCourseBox.title" link="#" />
                        </ResponsivePadding>
                        <Swiper data={data} renderItem={({ item }) => renderItem(item)} itemClassName="card-item" {...swiperParams} />
                    </Col>
                </Row>
            </Style>
        </ResponsiveBox>
    );
};

export default FeaturedCourseBox;

FeaturedCourseBox.propTypes = {
    data: PropTypes.object.isRequired,
};
