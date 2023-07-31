import React ,{ useState } from 'react';
import Style from './style';
import IntlMessages from 'utils/intlMessages';
import Link from 'next/link';
import PersianNumber from 'utils/getters/PersianNumber';
import { buildCourseLink } from 'utils/getters/linkPropsBuilder';
import {formatMessage} from 'localization';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import routes from "../../../routes";
import paths from "../../../paths";
import jsonToQueryString from 'utils/getters/jsonToQueryString';
import {Col, Modal, Row, Button} from 'antd'
import {forceDownload} from "../../utils/downloadUtils";

const Card = ({ data , type}) => {
    const { thumbnail_media, mobile_thumbnail_media, header_title,header_descriptions, teachers, duration,seo_title,category, mobile_thumbnail_medias, syllabus_file, clickable } = data;
    const linkProps = buildCourseLink(category.seo_title, seo_title);
    const [visible, setvisible] = useState(0);
    function downloadSyllabus() {
        forceDownload(syllabus_file);
    }

    const showModal = () => {
        setvisible(true)
    };

   const handleOk = e => {
       setvisible(false)
    };

    const handleCancel = e => {
        setvisible(false)
    };
    return (
        <Style>
            <div className={
                type === 'PACKAGE'
                    ? "card-wrapper-package card-wrapper"
                    :  type === "special-course"
                    ? ' card-wrapper card-special-course'
                    : "card-wrapper"
            }>
                <div className="tag-container">
                    {!isEmpty(category) &&
                        <div className="tag" style={{ color: category.text_color, backgroundColor: category.color}}>
                            {category.title}
                        </div>
                    }
                </div>
                {
                type === 'PACKAGE'
                    ? map(mobile_thumbnail_medias, (item , index)=>
                        <Col span={
                            mobile_thumbnail_medias.length === 3
                                ? 8
                                : mobile_thumbnail_medias.length === 2
                                ? 12
                                : 24}
                        >
                            <img className="card-thumb card-thumb-package" src={item} alt={header_title} />
                            {index <= mobile_thumbnail_medias.length - 2 &&
                                 <div className="link"><img src="/static/images/link.svg" /></div>
                            }

                        </Col>
                    )
                    : <div className="card-thumb">
                        <img
                            src={!isEmpty(global.window) && global.window.innerWidth < '575' ? mobile_thumbnail_media : thumbnail_media}
                            alt={header_title}
                        />
                        {type ==="special-course" &&
                            <Button key="submit" type="primary" className="card-special-course-btn"  onClick={showModal}>
                                اطلاعات تکمیلی
                            </Button>
                        }
                    </div>
                }
                <div className="card-detail">
                    <div className="card-text">
{/*                         <Col span={4}> */}
{/*                             <img src="/static/images/Path 1124.png"  alt="arrow"/> */}
{/*                         </Col> */}
                          <Col span={24}>
                            <h6 className="card-title">{header_title}</h6>
                            <p className="teacher-name">{!isEmpty(teachers) ?
                                map(teachers, (item, index) => index === teachers.length-1 ? item.name :  item.name + ', ') : ''}
                            </p>
                        </Col>
                    </div>
                </div>
                <p className={type === 'PACKAGE' ? 'package-card' :'card-duration'}>
                    {/*<PersianNumber comma={false}>{formatMessage("cardBox.duration", {duration: toPersianNumber(msToTime(Number(duration)))})}</PersianNumber>*/}
                    <PersianNumber comma={false}>
                        {type === 'PACKAGE'
                            ?  formatMessage("cardBox.duration.package", {duration: duration})
                            : formatMessage("cardBox.duration", {duration: duration})
                        }
                    </PersianNumber>
                    <IntlMessages id="cardBox.week" />
                    <span className="madrak" >ارایه مدرک</span>
                </p>
                {type ==="special-course"
                    ? ''
                    : type === 'PACKAGE'
                         ? <Link   as={routes.ROUTE_SPECIAL_COURSE.replace(':category',category.seo_title).replace(':id', seo_title)}
                                       href={`${paths.PATH_SPECIAL_COURSE}${jsonToQueryString(seo_title)} `}
                                       prefetch = 'false'
                            >
                                <a className="card-preview">
                                </a>
                            </Link>

                        :  type === 'test'
                        ? clickable && <Link {...linkProps}><a className="card-preview"></a></Link>

                        : <Link {...linkProps}>
                            <a className="card-preview">
                            </a>
                        </Link>
                }
            </div>
            <Modal
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Row>
                        <Col xl={8} xs={0}>
                            <Button key="submit" className="cancel-btn"  onClick={handleCancel}>
                                انصراف
                            </Button>
                        </Col>
                        <Col xl={16} xs={24}>
                           <Link {...linkProps}>
                            <Button key="submit" type="primary" >
                                اطلاعات تکمیلی
                            </Button>
                           </Link>
                        </Col>
                    </Row>
                ]}
                className="card-modal"
            >
                <h1><IntlMessages id="courseSingle.twoColumnDetail.Title" /></h1>
                <p>{header_descriptions}</p>
                <Button  onClick={downloadSyllabus} className="download-btn">
                    <img src="/static/images/download.svg" />
                    <span className="title"> <IntlMessages id="courseSingle.courseDetail.downloadBtn" /></span>
                </Button>
            </Modal>
        </Style>
    );
};
export default Card;
