import React, { useEffect, useState } from 'react';
import Style from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import ChoiceItem from './choiceItem';
import Swiper from 'components/swiper';
import PropTypes from 'prop-types';

const ChoiceCards = ({ data, onChange, windowWidth , props}) => {
    const swiperParams = {
        slidesPerView: 3,
        noSwiping: true,
        navigation: {
            nextEl: '.next-choice',
            prevEl: '.prev-choice',
        },
        breakpoints: {
            1320: { slidesPerView: 2 },
            1000: { slidesPerView: 2, spaceBetween: 80 },
            820: { slidesPerView: 2, spaceBetween: 50 },
            768: { slidesPerView: 2, spaceBetween: 50 },
            600: { slidesPerView: 1.7, spaceBetween: 50 },
            500: { slidesPerView: 1, spaceBetween: 20 },
            400: { slidesPerView: 1, spaceBetween: 20 },
        },
        spaceBetween: 100,
        renderPrevButton: () => (
            <div className="swiper-button next-choice" onClick={innerWidth< 500 && goNext}>
                <img src="/static/images/chevron-left.png" />
            </div>
        ),
        renderNextButton: () => (
            <div className="swiper-button prev-choice" onClick={innerWidth< 500 && goPrev}>
                <img src="/static/images/chevron-right.png" />
            </div>
        ),
    };
    const [itemId, setItemId] = useState(1);
    const [order, setOrder] = useState(1);
    const [innerWidth, setInnerWidth] = useState(null);

    useEffect(() => {
        document.getElementById(`choice-item-${data[0].order}`).classList.add('active');
        setInnerWidth(global.window.innerWidth)
    }, []);

    const goNext = () => {
        onChange(order+1);
        setOrder(order+1);
        document.getElementById(`choice-item-${order+1}`).classList.add('active');
        data.forEach(d => {
            if (d.order !== order+1) {
                document.getElementById(`choice-item-${d.order}`).classList.remove('active');
            }
        });
    };

    const goPrev = () => {
        onChange(order-1);
        setOrder(order-1);
        document.getElementById(`choice-item-${order-1}`).classList.add('active');
        data.forEach(d => {
            if (d.order !== order-1) {
                document.getElementById(`choice-item-${d.order}`).classList.remove('active');
            }
        });
    }

    const renderItem = item => {
        return (
            <ChoiceItem
                id={`choice-item-${item.order}`}
                data={item}
                onClick={() => {
                    document.getElementById(`choice-item-${item.order}`).classList.add('active');
                    data.forEach(d => {
                        if (d.order !== item.order) {
                            document.getElementById(`choice-item-${d.order}`).classList.remove('active');
                        }
                    });
                     onChange && onChange(item.order);
                    setItemId(item.id);
                    setOrder(item.order);
                }}
            />
        );
    };
    return (
        <Style>
            <ResponsiveBox>
                <ResponsivePadding>
                    <div className="choice-cards">
                        <h1 className="choice-card-title">{data[order-1].descriptions}</h1>
                        <div className="choice-card-swiper">
                            <Swiper noMargin {...swiperParams} renderItem={({ item }) => renderItem(item)} itemClassName="item-wrapper" data={data} />
                        </div>
                    </div>
                </ResponsivePadding>
            </ResponsiveBox>
            <div className="line"/>
        </Style>
    );
};
 export default ChoiceCards;

ChoiceCards.propTypes = {
    data: PropTypes.object.isRequired,
};
