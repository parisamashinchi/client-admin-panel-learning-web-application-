import React from 'react';
import map from 'lodash/map';
import Swiper from 'react-id-swiper';
import 'react-animated-slider/build/horizontal.css';
import Style from './style';
import useInterval from 'utils/hooks/useInterval';
import PropTypes from 'prop-types';

const SlideShow = ({ style, duration = 0, swiperParams, getSwiper, children }) => {
    let hover = false;
    let swiper = null;
    duration !== 0 &&
        useInterval(() => {
            if (swiper !== null && !hover) {
                swiper.slideNext();
            }
        }, duration);
    const defaultSwiperParams = {
        rtl: true,
        slidesPerView: 1,
        loop: true,
        speed: 500,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        shouldSwiperUpdate: true,
        rebuildOnUpdate: true,
    };
    const params = { ...defaultSwiperParams, ...swiperParams };
    return (
        <Style
            style={style}
            onMouseEnter={() => (hover = true)}
            onMouseLeave={() => (hover = false)}
            onTouchStart={() => (hover = true)}
            onTouchMove={() => (hover = true)}
            onTouchEnd={() => (hover = false)}
        >
            <Swiper
                {...params}
                ref={node => {
                    if (node && swiper === null) {
                        swiper = node.swiper;
                        getSwiper && getSwiper(swiper);
                    }
                }}
            >
                {map(children, (child, index) => (
                    <div className="swiper-item-wrapper" key={index}>
                        {child}
                    </div>
                ))}
            </Swiper>
        </Style>
    );
};
export default SlideShow;

SlideShow.propTypes = {
    style: PropTypes.object,
    duration: PropTypes.number,
    swiperParams: PropTypes.object,
    getSwiper: PropTypes.func,
};
