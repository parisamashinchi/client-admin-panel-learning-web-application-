import React from 'react';
import PromotionBox from 'components/promotionBox';
import PropTypes from "prop-types";

const SuggestedCourseBox = ({data}) => {
    return <PromotionBox data={data} />;
};
export default SuggestedCourseBox;

SuggestedCourseBox.propTypes = {
    data: PropTypes.array.isRequired,
};
