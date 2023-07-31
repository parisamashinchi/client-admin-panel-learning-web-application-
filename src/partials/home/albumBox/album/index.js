import React from 'react';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import Style from './style';
import { Col, Row } from 'antd';
import Swiper from 'components/swiper';
import Card from 'components/card';
import PropTypes from 'prop-types';

const Album = ({ data }) => {
    const swiperParams = {
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            990: { slidesPerView: 3 },
            700: { slidesPerView: 2 },
            480: { slidesPerView: 1.4 },
        },
    };
    const swiperParamsPackage = {
        slidesPerView: 3,
        spaceBetween: 40,
        breakpoints: {
            990: { slidesPerView: 2 },
            700: { slidesPerView: 1 },
            480: { slidesPerView: 1.2  },
        },
    };

    const renderItem = course => {
        return <Card data={course.model} type={course.type} />;
    };
    const {models} = data;
    return (
        <ResponsiveBox>
            <Style>
                <Row type="flex">
                    <Col span={24}>
                        <Swiper data={models} renderItem={({item}) => renderItem(item)} itemClassName="card-item"
                                   {...swiperParams}  />

                        {/*<Swiper data={models} renderItem={({item}) => renderItem(item)} itemClassName="card-item"*/}
                        {/*       {...swiperParamsPackage}/>*/}
                    </Col>
                </Row>
            </Style>
        </ResponsiveBox>
    );
};

export default Album;

Album.propTypes = {
    data: PropTypes.object.isRequired,
};
