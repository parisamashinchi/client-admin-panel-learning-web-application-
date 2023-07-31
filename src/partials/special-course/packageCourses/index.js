import React from 'react';
import Style from './style';
import Swiper from 'components/swiper';
import Card from 'components/card';
import IntlMessages from 'utils/intlMessages';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import PropTypes from 'prop-types';

const PackageCourses = ({ data }) => {
    const renderItem = item => {
        return <Card data={item} type="special-course"/>;
    };
    const swiperParams = {
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            990: { slidesPerView: 3 },
            700: { slidesPerView: 2 },
            480: { slidesPerView: 1.4 },
        },
    };
    return (
        <Style>
            <div className="package-courses">
                <ResponsiveBox>
                    <ResponsivePadding>
                        <h1 className="title">
                            <IntlMessages id="learningPath.packageCourses.title" />
                        </h1>
                    </ResponsivePadding>
                    <Swiper {...swiperParams} renderItem={({ item }) => renderItem(item)} itemClassName="card-item" data={data} />
                </ResponsiveBox>
            </div>
        </Style>
    );
};
export default PackageCourses;

PackageCourses.propTypes = {
    data: PropTypes.object.isRequired,
};
