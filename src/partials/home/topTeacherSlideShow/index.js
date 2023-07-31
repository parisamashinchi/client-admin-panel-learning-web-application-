import React from 'react';
import map from 'lodash/map';
import 'react-animated-slider/build/horizontal.css';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import SlideShow from './teacherSlideShow';
import SlideShowItem from './slideShowItem';
import PropTypes from 'prop-types';

const TopTeacherSlideShow = ({ data }) => {
    const renderFarm = () => {
        return map(data, item => {
            return (
                <ResponsiveBox style={{ height: '100%' }} key={item.id}>
                    <SlideShowItem data={item} />
                </ResponsiveBox>
            );
        });
    };
    return (
            <SlideShow>{renderFarm()}</SlideShow>
    );
};
export default TopTeacherSlideShow;

TopTeacherSlideShow.propTypes = {
    data: PropTypes.object.isRequired,
};
