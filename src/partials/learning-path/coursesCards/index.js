import React, { PureComponent } from 'react';
import Style from './style';
import Swiper from 'components/swiper';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import CourseCardItem from './courseCardItem';
import PropTypes from 'prop-types';
import each from 'lodash/each';

export default class Courses extends PureComponent {
    slideChange = translate => {
        if (translate < 0) {
            this.sliderCenterToRight();
        }
    };
    end = () => {
        setTimeout(() => {
            document.querySelector('.courses-style').classList.add('none-background');
        }, 10);
    };
    removeBg = () => {
        document.querySelector('.courses-style').classList.remove('none-background');
    };
    sliderCenterToRight = () => {
        document.querySelectorAll('.swiper-wrapper')[1].style.transform = 'translate3d(0px, 0px, 0px)';
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        const { currentChoice: prevCurrentChoice } = prevProps;
        const { currentChoice } = this.props;
        if (prevCurrentChoice !== currentChoice) {
            each(document.getElementsByClassName('course-card-item'), element => element.classList.add('animate'));
            setTimeout(() => each(document.getElementsByClassName('course-card-item'), element => element.classList.remove('animate')), 500);
        }
    }

    render() {
        const { data } = this.props;
        const renderItem = item => {
            return <CourseCardItem data={item} />;
        };
        const swiperParams = {
            slidesPerView: 4,
            breakpoints: {
                1320: { slidesPerView: 3 },
                900: { slidesPerView: 2.8 },
                768: { slidesPerView: 2.4 },
                680: { slidesPerView: 2 },
                575: { slidesPerView: 1.7 },
                500: { slidesPerView: 1 },
                400: { slidesPerView: 1 },
            },
            navigation: {
                nextEl: '.next-course',
                prevEl: '.prev-course',
            },
            progress: progress => {
                if (progress === 1) {
                    this.end();
                } else {
                    this.removeBg();
                }
            },
            spaceBetween: 65,
            renderPrevButton: () => (
                <button className="swiper-button next-course">
                    <img src="/static/images/chevron-left-2.png" />
                </button>
            ),
            renderNextButton: () => (
                <button className="swiper-button prev-course">
                    <img src="/static/images/chevron-left-2.png" />
                </button>
            ),
        };
        return (
            <Style className="courses-style" length={data.length>4}>
                <div className="courses-cards">
                    <ResponsiveBox>
                        <Swiper {...swiperParams} renderItem={({ item }) => renderItem(item)} itemClassName="course-card-item-wrapper" data={data} />
                    </ResponsiveBox>
                </div>
            </Style>
        );
    }
}

Courses.propTypes = {
    data: PropTypes.object.isRequired,
};
