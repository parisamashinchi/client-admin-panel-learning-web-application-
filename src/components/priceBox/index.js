import React from 'react';
import Style from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import PriceCard from './priceCard';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import IntlMessages from 'utils/intlMessages';
import Swiper from 'components/swiper';
import ChevronLeft from 'static/icons/chevron-left.svg';
import ChevronRight from 'static/icons/chevron-right.svg';
import {Col} from "antd";

const PriceBox = props => {
    const swiperParams = {
        slidesPerView: 2,
        rtl: true,
        centerSlides: true,
        breakpoints: {
            1600: { slidesPerView: 2.8, spaceBetween: 10 },
            1320: { slidesPerView: 2 },
            1000: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 1.5, spaceBetween: 10 },
            680: { slidesPerView: 1.4, spaceBetween: 10 },
            630: { slidesPerView: 1.2, spaceBetween: 10 },
            500: { slidesPerView: 1.1, spaceBetween: 10 },
        },
        spaceBetween: 20,
        navigation: {
            nextEl: '.next-choice',
            prevEl: '.prev-choice',
        },
        renderPrevButton: () => (
            <div className="swiper-button next-choice">
                <ChevronLeft />
            </div>
        ),
        renderNextButton: () => (
            <div className="swiper-button prev-choice">
                <ChevronRight />
            </div>
        ),
    };
    const { data, url,createInvoice } = props;
    const { course_sell_types } = data;
    const renderFarm = item => <PriceCard data={item} course_info={data} key={item.id} user_url={url} createInvoice={createInvoice}/>;
    // const renderItem = item => {
    //     return <PriceCard data={item} key={item.id} />;
    // };
    return (
        <Style >
            <ResponsiveBox>
                <ResponsivePadding>
                    <Col lg={4} className="price-sentences">
                        <h2><IntlMessages id="courseSingle.priceBoxCard.topTitle1" /></h2>
                        <h1>
                            <IntlMessages id="courseSingle.priceBoxCard.topTitle2" />
                        </h1>
                        <img src="/static/images/Group 971.png" />
                    </Col>
                    <Col lg={20} xs={24}>
                        <div className="price-card-section" id="price-box">
                            <Swiper
                                noMargin
                                {...swiperParams}
                                renderItem={({ item }) => renderFarm(item)}
                                itemClassName="teacher-card-wrapper"
                                data={course_sell_types}
                            />
                        </div>
                    </Col>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default PriceBox;

PriceBox.propTypes = {
    data: PropTypes.object.isRequired,
    discounted: PropTypes.bool,
};
