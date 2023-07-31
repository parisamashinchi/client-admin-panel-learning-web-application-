import React from 'react';
import Style, { CourseItemTitle } from './style';
import map from 'lodash/map';
import { Col, Row } from 'antd';
import basicStyle from 'theme/style';
import textDots from 'utils/getters/textDots';
import PropTypes from 'prop-types';
import { buildCourseLink } from 'utils/getters/linkPropsBuilder';
import Link from "next/link";
import isEmpty from 'lodash/isEmpty';

const CourseCardItem = ({ data }) => {
    const {title, descriptions } = data;
    const { rowStyle } = basicStyle;
    const renderFarm = () => {
        return map(data.models, item => {
            const {  id, model, type} = item;
            const courseLinkProps = buildCourseLink(!isEmpty(model.category)&& model.category.seo_title, model.seo_title);
            return (
                <Col span={24} className="item">
                    {type === 'COURSE'
                        ?
                        <Link {...courseLinkProps}>
                            <a>
                                <CourseItemTitle imageUrl={ model.thumbnail_media} key={id}>
                                    <img src={model.thumbnail_media}/>
                                    <span>{model.header_title}</span>
                                </CourseItemTitle>
                            </a>
                        </Link>
                            :
                        <CourseItemTitle imageUrl={ model.media_url} key={id}>
                            <img src={model.media_url}/>
                            <span>{model.title}</span>
                        </CourseItemTitle>
                    }
                </Col>
            );
        });
    };

    return (
        <Style>
            <div className="course-card-item">
                <div className="course-card-title">
                    <Row type="flex" style={rowStyle}>
                        {renderFarm()}
                    </Row>
                </div>
                <div className="course-card-description">
                    <div className="course-card-description-wrapper">
                        <div className="level-title">{title}</div>
                        <div className="level-description">{descriptions}</div>
                    </div>
                </div>
            </div>
        </Style>
    );
};
export default CourseCardItem;

CourseCardItem.propTypes = {
    data: PropTypes.object.isRequired,
};
