import React from 'react';
import Style from './style';
import { Card, Col} from 'antd';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import Swiper from 'components/swiper';
import SampleCards from 'components/samplesCards';

const Samples = (data,samples) => {
const { Meta } = Card;
const swiperParams = {
    slidesPerView: 2.5,
    breakpoints: {
        1600: { slidesPerView: 2.5 },
        1320: { slidesPerView: 2.5 },
        1000: { slidesPerView: 2.5 },
        992: {slidesPerView: 2.8},
        850: {
            slidesPerView: 2.5,
        },
        768: { slidesPerView: 3 },
        700: { slidesPerView: 2 },
        575: { slidesPerView: 1.5},
        480: { slidesPerView: 1.2},
        420: { slidesPerView: 1.2},
        400: { slidesPerView: 1.2},
    },
    spaceBetween: 25,
};
  const  renderSamples = item => {
        return <SampleCards data={item} teacher={data}/>;
    };
    return (
        <Style>
            <ResponsiveBox>
                <ResponsivePadding>

                    <Swiper {...swiperParams} renderItem={({item}) => renderSamples(item)}
                                            itemClassName="teacher-card-wrapper" data={data.samples}/>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default Samples;
