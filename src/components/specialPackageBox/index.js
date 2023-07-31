import React, {Component} from 'react';
import {Col, Icon, Row} from 'antd';
import basicStyle from 'theme/style';
import IntlMessages from 'utils/intlMessages';
import Style from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import Swiper from 'components/swiper';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import SpecialPackageItem from './specialPackageItem';
import Link from 'next/link';
import PropTypes from 'prop-types';
import PersianNumber from 'utils/getters/PersianNumber';
import paths from "../../../paths";
import routes from "../../../routes";
import get from "lodash/get";
import * as constants from 'partials/course-single/constants';
import { getPageParams } from 'utils/nextUtils';
import { getRequest } from 'utils/api';
import SpecialCourse from '../../../pages/special-course'
import jsonToQueryString from 'utils/getters/jsonToQueryString';
import { buildCourseLink } from 'utils/getters/linkPropsBuilder';

const { rowStyleNoWidth } = basicStyle;

class SpecialPackageBox extends Component {
    state = {
        ios: false,
    };
    componentDidMount() {
        const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        this.setState({ ios });
    }
    render() {
        const { noBackground, data, path } = this.props;
        const { ios } = this.state;
        const renderItem = path
            ? item => {return <Link {...buildCourseLink(item.category.seo_title,item.seo_title)}>
                                    <a>
                                        <SpecialPackageItem ios={ios} data={item} path={path} />
                                    </a>
                                </Link>
                        }
            : item => {return <SpecialPackageItem ios={ios} data={item} path={path} />};
        const swiperParams = {
            slidesPerView: data.courses.length === 2 ? 2 : 3,
            rtl: true,
            breakpoints: {
                1320: { slidesPerView: 3 },
                1000: { slidesPerView: 2, freeMode: true },
                992: {
                    slidesPerView: 1.8,
                },
                850: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.5 },
                700: { slidesPerView: 2.3 },
                600: { slidesPerView: 2, centerSlides: true },
                540: { slidesPerView: 1.8 },
                480: { slidesPerView: 1.5 },
                430: { slidesPerView: 1.3 },
            },
            navigation: {
                nextEl: '.next',
                prevEl: '.prev',
            },
            spaceBetween: 5,
        };

        const { header_title, header_descriptions, discount, original_price , price_with_discount, courses, seo_title,category} =
            this.props.path === true ? this.props.data : this.props.data.package
        return (
            <Style noBackground={noBackground} path={this.props.path}>
                <ResponsiveBox>
                    <div className="package-box">
                        <Row style={rowStyleNoWidth} className="gutter-pre-style-lg-50" gutter={{ md: 60, lg: 50 }}>
                            <Col xxl={11} md={8} xs={24} className="design-package">
                                <ResponsivePadding>
                                    <div className="design-package-wrapper">
                                        <h1>
                                            {header_title}
                                        </h1>
                                        <p>
                                            {header_descriptions}
                                        </p>
                                        <div className="price-box">
                                            <div className="discount">
                                                <span className="number">
                                                   <PersianNumber className="price">{discount}</PersianNumber>٪
                                                </span>

                                                <br />
                                                <span className="text">تخفیف</span>
                                            </div>
                                            <div className="discounted-price">
                                                <span className="price"><PersianNumber className="price">{price_with_discount}</PersianNumber></span>
                                                <span className="unit">تومان</span>
                                            </div>
                                            <div className="old-price">
                                                <span className="price"><PersianNumber className="price">{original_price}</PersianNumber></span>
                                                <span className="unit">تومان</span>
                                            </div>
                                        </div>
                                        <Link   as={routes.ROUTE_SPECIAL_COURSE.replace(':category',category.seo_title).replace(':id', seo_title)}
                                                href={`${paths.PATH_SPECIAL_COURSE}${jsonToQueryString(seo_title)} `}
                                                prefetch = 'false'
                                          >
                                                <a className="more-info-button">
                                                    {!path ?
                                                        <span>
                                                            <img src="/static/icons/arrowLeft.png" />
                                                            <span className="title">
                                                                <IntlMessages id="courseSingle.packageBox.moreInfoBtn"/>
                                                            </span>
                                                        </span>
                                                        :  <span>
                                                              <img src="/static/icons/arrowLeft.png" />
                                                               <span className="title">
                                                                  <IntlMessages id="courseSingle.introduction.register"/>
                                                              </span>
                                                        </span>
                                                    }
                                                </a>
                                        </Link>
                                        {/*    <a  href={`${paths.PATH_SPECIAL_COURSE}?id=${this.props.data.id}  `}*/}
                                        {/*        className="more-info-button">*/}
                                        {/*        <IntlMessages id="courseSingle.packageBox.moreInfoBtn" />*/}
                                        {/*    </a>*/}
                                    </div>
                                </ResponsivePadding>
                            </Col>
                            <Col xxl={13} md={16} xs={24} className="card-boxes">
                                <Swiper
                                    {...swiperParams}
                                    renderItem={({ item }) => renderItem(item)}
                                    itemClassName="special-package-item-wrapper"
                                    data={courses}
                                    noMargin
                                />
                            </Col>
                        </Row>
                    </div>
                </ResponsiveBox>
            </Style>
        );
    }
}

SpecialPackageBox.propTypes = {
    data: PropTypes.object.isRequired,
    noBackground: PropTypes.bool,
};
export default SpecialPackageBox;
