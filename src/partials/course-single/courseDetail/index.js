import React, { useState, useRef } from 'react';
import IntlMessages from 'utils/intlMessages';
import { Col, Row } from 'antd';
import Style from './style';
import basicStyles from 'theme/style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import Button from 'components/uiElements/button';
import PhaseItem from './phaseItem';
import Link from 'next/link';
import map from 'lodash/map';
import { buildCourseLink } from 'utils/getters/linkPropsBuilder';
import { formatMessage } from 'localization';
import textDots from 'utils/getters/textDots';
import msToTime from '../../../utils/getters/msToTime';
import { toPersianNumber } from '../../../utils/getters/PersianNumber';
import {forceDownload} from "../../../utils/downloadUtils";
import isEmpty from "lodash/isEmpty";

const { rowStyle } = basicStyles;
const CourseDetail = props => {
    const [current, setCurrent] = useState(0);
    const { data } = props;
    const {
        header_title,
        syllabus_title,
        syllabus_descriptions,
        syllabus_media,
        syllabus_file,
        seasons,
        course_prerequisites,
        duration,
        courseTopicTitle,
        courseTopicSubtitle,
        courseTopicPhasesData,
    } = data;
    function downloadSyllabus() {
        forceDownload(syllabus_file);
    }
     function onToggle (index){
         setCurrent(index)
         document.getElementsByClassName("open-toggle")[0].scrollIntoView(
             {behavior: "smooth", block: "center", inline: "nearest"}
         );
     }
    const renderPhases = () => {
        return map(seasons, (item, index) => (
            !isEmpty(global.window) && global.window.innerWidth < 575
            ? <PhaseItem index={index} length={seasons.length} current={current} data={item} key={item.id} className="phase-item" onToggle={setCurrent} open={current === index} courseID={data.id}/>
            : <PhaseItem index={index} length={seasons.length} current={current} data={item} key={item.id} className="phase-item" onToggle={() => onToggle(index)} open={current === index} courseID={data.id}/>
        ));
    };
    const hasPrerequisites = course_prerequisites && course_prerequisites.length > 0;
    const renderPrerequisites = () => {
        if (hasPrerequisites) {
            return (
                <Col xxl={8} lg={8} className="prerequisite-box">
                    <div className="prerequisite-box-wrapper">
                        <div className="prerequisite-header">
                            <img src="/static/images/book.svg" alt="کتاب" />
                            <h1 className="prerequisite-title">
                                <IntlMessages id="courseSingle.courseDetail.details.coursePrerequisite" />
                            </h1>
                        </div>
                        <div className="prerequisite-content">
                            {formatMessage('courseSingle.courseDetail.details.coursePrerequisiteDescription', {
                                course_title: header_title,
                                prerequisites: course_prerequisites.map(({ header_title }) => header_title).join(formatMessage('andJoin')),
                            })}
                        </div>
                        <div className="prerequisite-footer">
                            {map(course_prerequisites, (prerequisite, index) => {
                                const { id, header_title, header_descriptions, seo_title } = prerequisite;
                                return (
                                    <Link key={index}  href={seo_title}>
                                        <a title={header_descriptions}>
                                            <button>{header_title}</button>
                                        </a>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </Col>
            );
        } else return <fragment />;
    };
    const coursePhaseColSpan = () => {
        if (hasPrerequisites) {
            return { xxl: 16, lg: 16, md: 24 };
        } else return { lg: 18, xs:24 };
    };
    return (
        <Style id="course-title">
            <ResponsiveBox>
                <ResponsivePadding>
                    <div className="course-detail">
                        <div className="course-detail-header">
                            <h1 className="course-detail-title">
                                <IntlMessages id="courseSingle.courseDetail.title" />
                            </h1>
{/*                             <a> */}
{/*                                 <Button className="course-download-btn" size="medium" onClick={downloadSyllabus}> */}
{/*                                     <img src="/static/images/download.svg" /> */}
{/*                                     <span className="title"> <IntlMessages id="courseSingle.courseDetail.downloadBtn" /></span> */}
{/*                                 </Button> */}
{/*                             </a> */}
                        </div>
                        <div className="course-detail-content">
                            <div className="intro">
                                <Row style={rowStyle}>
                                    <Col xxl={16} xl={12} lg={11} className="intro-content">
                                        <div className="intro-content-wrapper">
                                            <h1 className="title">
                                                <IntlMessages id="courseSingle.courseDetail.introTitle" />
                                            </h1>
                                            <p className="description">{syllabus_descriptions}</p>
                                            <div className="footer">
                                                {formatMessage('courseSingle.courseDetail.details.courseDuration', {
                                                    duration: toPersianNumber(duration),
                                                })}
                                            </div>
                                        </div>
                                    </Col>
{/*                                     <Col xxl={8} xl={12} lg={13} md={24} className="intro-image"> */}
{/*                                         <div className="intro-image-wrapper"> */}
{/*                                             <img src={syllabus_media} alt={syllabus_title} /> */}
{/*                                         </div> */}
{/*                                     </Col> */}
                                </Row>
                            </div>
                            <div className="details">
                                <Row style={rowStyle} gutter={{ xxl: 32, xl: 12 }} className="gutter-pre-style-xxl-32 gutter-pre-style-xl-12">
                                    <Col {...coursePhaseColSpan()}>
                                        <h2 className="details-title">{courseTopicTitle}</h2>
                                        <div className="details-features">{courseTopicSubtitle}</div>
                                        <div className="phases">{renderPhases()}</div>
                                    </Col>
                                    {renderPrerequisites()}
                                </Row>
                            </div>
                        </div>
                    </div>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default CourseDetail;
