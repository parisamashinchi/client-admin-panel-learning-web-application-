import React, { PureComponent ,Fragment } from 'react';
import Style from 'partials/special-course/style';
import Hero from 'partials/special-course/hero';
import DefaultLayout from 'layouts/defaultLayout';
import TwoColumnDetail from 'components/twoColumnDetail';
import TeacherBox from 'components/teacherBox';
import PriceBox from 'components/priceBox';
import PHelmet from 'components/pHelmet';
import { formatMessage } from 'localization';
import PackageCourses from 'partials/special-course/packageCourses';
import get from "lodash/get";
import * as constants from 'partials/course-single/constants';
import { getRequest } from 'utils/api';
import {Col, Row, Icon} from "antd";
import Button from 'components/uiElements/button';
import basicStyle from 'theme/style';
import IntlMessages from 'utils/intlMessages';
import PersianNumber from 'utils/getters/PersianNumber';
import PriceCardStyles from 'components/priceBox/priceCard/style';
import PriceBoxStyles from 'components/priceBox/style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import isEmpty from 'lodash/isEmpty';
import HeroMobile from 'partials/course-single/heroMobile';

export default class SpecialCourse extends PureComponent {
    constructor(props){
        super(props);
        this.state ={
            packageUrl : {} ,
            innerWidth: null,
        }
    }
    componentDidMount() {
        (async () => {
            let responsePackageUrl = {};
            let responseUserPanelUrl = {};
            try {
                responsePackageUrl = await getRequest(`shared/package/seo_title/${window.location.pathname.split('/')[3]}`);
                responseUserPanelUrl = await getRequest(`${constants.USER_PANEL_URL}`);
                this.setState({
                    PanelUrl: get(responseUserPanelUrl, 'data.data',{}),
                    packageUrl: get(responsePackageUrl, 'data.data', {}),
                })
            } catch (e) {
                if (e.status === 401) {
                    console.log(e, '401')
                }
            }
        })();
        this.setState({
            innerWidth: global.window.innerWidth
        })
    }

    handleConfirmClick = (id)=> {
        window.location.href = this.state.PanelUrl+'auth/sign-up'+`?product_id=${id}`+`?type=package`
    }

    render() {
        const {packageUrl} = this.state;
        const { rowStyle } = basicStyle;
        const { sell_type_descriptions,id,original_price, price_with_discount, has_degree, properties} = packageUrl;
        function renderPrice() {
                return (
                    <Fragment>
                            <div className="discounted">
                                <div className="actual-price">
                                    <PersianNumber className="price">{price_with_discount}</PersianNumber>
                                    <span className="unit">
                                    <IntlMessages id="courseSingle.priceBoxCard.unit" />
                                </span>
                                </div>
                                <div className="discounted-price">
                                    <PersianNumber className="price">{original_price}</PersianNumber>
                                    <span className="unit">
                                    <IntlMessages id="courseSingle.priceBoxCard.unit" />
                                </span>
                                </div>
                            </div>
                    </Fragment>
                );
            }
        return (
            <DefaultLayout blackBackground>
                <PHelmet title={formatMessage('specialCourse.meta.title')} description="" schema={true} />
                <Style  golden={has_degree}>
                    <Hero  data={packageUrl} />
                    {this.state.innerWidth < '600' &&
                        <HeroMobile data={packageUrl} pack={true}/>
                    }
                    <TwoColumnDetail data={packageUrl} />
                    <TeacherBox data={packageUrl.teacher} />
                    <PackageCourses data={packageUrl.courses} />
                    {/*<PriceBox discounted data={packageUrl} />*/}
                    <PriceBoxStyles  pack={true}>
                        <ResponsiveBox>
                            <ResponsivePadding>
                                <h1 className="price-box-title">
                                    <IntlMessages id="courseSingle.priceBoxCard.topTitle" />
                                </h1>
                                <div className="price-card-section" id="price-box">
                                    <PriceCardStyles golden={has_degree}>
                                    <div className="price-card"
                                         onClick={() => this.handleConfirmClick(packageUrl.id)}
                                    >
                                        {!isEmpty(sell_type_descriptions) && sell_type_descriptions.includes(')')
                                            ?
                                            <div>
                                                <h1 className="card-title"> {sell_type_descriptions.split("(")[0]}</h1>
                                                <h1 className="card-title_sec"> ({sell_type_descriptions.split("(")[1]}</h1>
                                            </div>
                                            :
                                            <h1 className="card-title"> {sell_type_descriptions}</h1>
                                        }
                                        <div className="card-price">{renderPrice()}</div>
                                        <hr className="separator"/>
                                        <div className="card-content-wrapper">
                                            <div className="card-content">
                                                <p></p>
                                            </div>
                                            <div className="card-footer">
                                                <Row type="flex" style={rowStyle} gutter={32} className="gutter-pre-style-xs-32">
                                                    <Col span={14} className="certificate-text-wrapper">
                                                        {has_degree ?
                                                            isEmpty(properties)
                                                                ? <div className="certificate-text">
                                                                    گواهینامه دانشگاه امير كبير
                                                                    <br/>
                                                                    ارزیابی و امتحان پروژه محور
                                                                    <br/>
                                                                    کارآموزی
                                                                    <br/>
                                                                    تضمین کیفیت
                                                                    <br/>
                                                                    استادیار
                                                                    <br/>
                                                                </div>
                                                                : <div className="certificate-text">{properties}</div>
                                                            :
                                                            isEmpty(properties)
                                                                ? <div className="certificate-text">
                                                                        تمرین و پروژه
                                                                        <br/>
                                                                        تضمین کیفیت
                                                                        <br/>
                                                                        گواهی پایان دوره
                                                                    </div>
                                                                : <div className="certificate-text">{properties}</div>
                                                        }
                                                    </Col>
                                                    <Col span={10}>
                                                        <div className="certificate-image">
                                                            <img
                                                                src={`${has_degree ? '/static/images/golden-certificate.png' : '/static/images/certificate-tick.png'}`}
                                                                alt="مدرک"/>
                                                            <div className="golden-reward">{has_degree ? `گواهی نامه  دانشگاه صنعتی امیرکبیر` : ``}</div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="card-button">
                                                <Button size="medium"
                                                        onClick={() => this.handleConfirmClick(id)}
                                                        className="ant-btn style__Style-sc-1i4df0q-0 ctRBQK">
                                                    <Icon type="arrow-left" />
                                                    <span className="special-title"><IntlMessages id="courseSingle.priceBoxCard.btnTitle"/></span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    </PriceCardStyles>
                                </div>
                            </ResponsivePadding>
                        </ResponsiveBox>
                    </PriceBoxStyles>
                </Style>
            </DefaultLayout>
        );
    }
}
