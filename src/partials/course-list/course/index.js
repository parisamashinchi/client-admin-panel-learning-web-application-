import React from 'react';
import Style from './style';
import Link from 'next/link';
import textDots from 'utils/getters/textDots';
import map from 'lodash/map';
import IconLevels from 'static/icons/icon-levels.svg';
import IntlMessages from 'utils/intlMessages';
import IconPlay from 'static/icons/icon-play.svg';
import { Col, Row } from 'antd';
import basicStyle from 'theme/style';
import { buildCourseLink } from 'utils/getters/linkPropsBuilder';
import PropTypes from 'prop-types';
import take from 'lodash/take';
import isEmpty from 'lodash/isEmpty'
import {Icon, Button} from "antd";
import routes from "../../../../routes";
import paths from "../../../../paths";
import jsonToQueryString from 'utils/getters/jsonToQueryString';

const { rowStyle } = basicStyle;
const Course = ({ data: course}) => {
    const { thumbnail_media,meta_thumbnail_media, mobile_thumbnail_media,meta_mobile_thumbnail_media, header_title, header_descriptions, level, tags, certificate_by_media, category,seo_title, properties } = course;
    console.log(properties,'ppp')
    const courseLinkProps = buildCourseLink(!isEmpty(category) && category.seo_title,seo_title);
    const renderCategory = () => {
        const { title, color, text_color } = category;
        return (
            <div className="tag" style={{ backgroundColor: color , color: text_color}}>
                {title}
            </div>
        );
    };
    const renderTags = () =>
        map(take(tags, 2), item => {
            const { id, tag_name, color, text_color } = item;
            return (
                <div key={id} className="tag" style={{ color: text_color, backgroundColor: color}}>
                    {textDots(tag_name)}
                </div>
            );
        });
    const levelText = () => {
        switch (level) {
            case 'basic':
                return 'courseList.courseLevel.beginner';
            case 'intermediate':
                return 'courseList.courseLevel.intermediate';
            case 'advance':
                return 'courseList.courseLevel.advanced';
        }
    };
    return (
        <Style>
            <Row style={{ ...rowStyle }} type="flex" justify="center">
                <Col sm={8} xs={24} >
                    <div className="course-image-wrapper">
                        { course.type !== 'PACKAGE'
                            ? <Link {...courseLinkProps}>
                                <a className="course-image">
                                    <img src={ (process.browser) && global.window.innerWidth < '575' ? mobile_thumbnail_media : thumbnail_media}
                                         alt={ (process.browser) && global.window.innerWidth < '575' ? meta_mobile_thumbnail_media : meta_thumbnail_media}/>
                                </a>
                            </Link>
                            : <Link as={routes.ROUTE_SPECIAL_COURSE.replace(':category',category.seo_title).replace(':id', seo_title)}
                                    href={`${paths.PATH_SPECIAL_COURSE}${jsonToQueryString(seo_title)} `}
                                    prefetch='false'
                            >
                                <a className="course-image">
                                    {
                                        map(mobile_thumbnail_medias, (item , index)=>
                                            <Col span={
                                                mobile_thumbnail_medias.length === 3
                                                    ? 8
                                                    : mobile_thumbnail_medias.length === 2
                                                    ? 12
                                                    : 24}
                                            >
                                                <img className="card-thumb card-thumb-package" src={item} alt={header_title} />
                                                {index <= mobile_thumbnail_medias.length - 2 &&
                                                <div className="link"><Icon type="plus" /></div>
                                                }

                                            </Col>
                                        )
                                    }
                                </a>
                            </Link>
                        }
                    </div>
                </Col>
                <Col sm={16} xs={24} className="column-container">

                    <div className="course">
                        <div className="course-header">
                            { course.type !== 'PACKAGE'
                                ? <Link {...courseLinkProps}>

                                    <a className="course-title" title={header_title}>
                                        <Col span={2}>
                                         <img src="/static/images/Path 1124.png" />
                                         </Col>
                                          <Col span={22}>
                                            <h1 className="title">{header_title}</h1>
                                            <h1 className="title-eng">Autodesk AutoCAD 2021</h1>
                                        </Col>
                                    </a>
                                </Link>
                                : <Link as={routes.ROUTE_SPECIAL_COURSE.replace(':category',category.seo_title).replace(':id', seo_title)}
                                        href={`${paths.PATH_SPECIAL_COURSE}${jsonToQueryString(seo_title)} `}
                                        prefetch='false'
                                >

                                    <a className="course-title" title={header_title}>
                                        <Col span={2}>
                                            <img src="/static/images/Path 1124.png" />
                                        </Col>
                                         <Col span={22}>
                                            <h1 className="title">{header_title}</h1>
                                            <h1 className="title-eng">Autodesk AutoCAD 2021</h1>
                                        </Col>
                                    </a>
                                </Link>
                            }

                        </div>
                        <div className="course-detail">
                            <p className="course-description">{textDots(header_descriptions, 320)}</p>
                        </div>
                        <div className="course-footer">
                         { map(properties, (item , index)=>
                                <Col span={6} className="certificate-badge">
                                    <Col span={8}>
                                        <img className="madrak" src={item.media_url} />
                                    </Col>
                                     <Col span={16}>
                                        <span>
                                             {item.title}
                                         </span>
                                    </Col>
                                </Col>
                               )
                              }
                        </div>

                    </div>
                </Col>
                <Col xs={24}>
                    {!isEmpty(category) &&
                    <div className="mobile-course-footer">
                        <div className="level-container">
                            <Col span={24} className="level">
                                  <span className="level-title">سطح دوره:</span><span className="level-text" >  {level} </span>
                                  <span className="level-title" >ارایه مدرک:</span><span className="level-text" >امیرکبیر</span>
                            </Col>
                        </div>
                    </div>
                    }
                </Col>
            </Row>
        </Style>
    );
};
export default Course;

Course.propTypes = {
    data: PropTypes.object.isRequired,
};
