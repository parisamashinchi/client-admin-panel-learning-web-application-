import React, { useRef,useState } from 'react';
import map from 'lodash/map';
import Style from './style';
import SlideShowItem from './slideShowItem';
import SlideBoxes from '../slideBoxes';
import Swiper from 'react-id-swiper';
import 'react-animated-slider/build/horizontal.css';
import PropTypes from 'prop-types';
import {Col, Row} from 'antd'

const SlideShow = ({ data, params , boxData}) => {
    let hover = false;
    let swiper = null;
    const [Trans, settrans] = useState(false);
    const renderFarm = slides => {
        return map(slides, item => {
            return (
                <div className="swiper-item-wrapper" key={item.id}>
                    <SlideShowItem data={item} move={Trans}/>
                </div>
            );
        });
    };

    const slideChange = () => {
        settrans(false)
        setTimeout(function() {
            settrans(true)
        }, 200);
    }

    const defaultSwiperParams = {
        rtl: true,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        on: {
            'slideChange': () => {slideChange()}
        },
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false
        // },
    };
    const swiperParams = { ...defaultSwiperParams, ...params };

    return (
        <Style
            onMouseEnter={() => (hover = true)}
            onMouseLeave={() => (hover = false)}
            onTouchStart={() => (hover = true)}
            onTouchMove={() => (hover = true)}
            onTouchEnd={() => (hover = false)}
        >
        <Row>
            <Col lg={14} md={24} sm={24} xs={24}>
                <div className="wrapper">
                    <Swiper
                        {...swiperParams}
                        ref={node => {
                            if (node && swiper === null) {
                                swiper = node.swiper;
                            }
                        }}
                    >
                        {renderFarm(data)}
                    </Swiper>
                </div>
            </Col>
             <Col lg={10} md={24} sm={24} xs={24}>
                <SlideBoxes data={boxData}/>
            </Col>
            </Row>
        </Style>
    );
};
SlideShow.propTypes = {
    data: PropTypes.object.isRequired,
    params: PropTypes.object,
};
export default SlideShow;
