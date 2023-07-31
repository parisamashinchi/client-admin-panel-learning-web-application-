import React, { Fragment  } from 'react';
import Style from './style';
import IntlMessages from 'utils/intlMessages';
import basicStyle from 'theme/style';
import { Col, Row, Icon, Divider } from 'antd';
import Button from 'components/uiElements/button';
import PropTypes from 'prop-types';
import PersianNumber from 'utils/getters/PersianNumber';
import {getStore} from "store";
import PayBox from "partials/course-single/payBox";
import Link from 'next/link';
import Cookies from 'js-cookie';
import * as constants from 'partials/course-single/constants';
import isEmpty from "lodash/isEmpty";
import * as routes from "../../../../routes";
import { postRequest } from 'utils/api';
import get from "lodash/get";
import PriceBox from "../index";


const PriceCard = props => {
    const { data , course_info, user_url,createInvoice} = props;
    const { title, price, descriptions, type, discounted, discountedPrice, properties } = data;
    const { rowStyle } = basicStyle;
    const golden = type === 'with_degree';
    function handleConfirmClick(id) {
        window.location.href = user_url+'auth/sign-up'+`?product_id=${id}`
        // (async () => {
        //    let  responseCreateInvoice= {};
        //    const body= JSON.stringify({
        //             "product_id": id,
        //             "product_type":"COURSE",
        //             "discount_code":""
        //         });
        //     try {
        //         console.log(Cookies.get('token'),Cookies.get('hash'),' card')
        //          responseCreateInvoice = await postRequest(`${constants.CREATE_INVOICE_URL}`,body );
        //
        //         if(parseInt(data.price) > 0) {
        //             getStore('ModalContainer').showModal(
        //                 <PayBox data={data}  url={responseCreateInvoice.data.data.url} />,
        //                 { closable: true }
        //                 );
        //         }else {
        //             console.log('free')
        //               window.location.href = user_url
        //         }
        //     } catch (e) {
        //         if (e.status === 401 ) {
        //             console.log(user_url,'401')
        //                window.location.href = user_url+'auth/sign-in'+`?product_id=${id}`
        //         }
        //     }
        // })();
    }
    function renderPrice() {
        if (parseInt(price) === 0) {
            return (
                <span className="price">
                    <IntlMessages id="courseSingle.priceBoxCard.free" />
                </span>
            );
        } else {
            return (
                <Fragment>
                    {discounted ? (
                        <div className="discounted">
                            <div className="discounted-price">
                                <PersianNumber className="price">{discountedPrice}</PersianNumber>
                                <span className="unit">
                                    <IntlMessages id="courseSingle.priceBoxCard.unit" />
                                </span>
                            </div>
                            <div className="actual-price">
                                <PersianNumber className="price">{price}</PersianNumber>
                                <span className="unit">
                                    <IntlMessages id="courseSingle.priceBoxCard.unit" />
                                </span>
                            </div>
                        </div>
                    ) : (
                        <Fragment>
                            <PersianNumber className="price">{price}</PersianNumber>
                            <div className="unit">
                                <IntlMessages id="courseSingle.priceBoxCard.unit" />
                            </div>
                        </Fragment>
                    )}
                </Fragment>
            );
        }
    }
        return (
            <Style golden={golden}>
                <div className="price-card" onClick={() => handleConfirmClick(data.id)}>
                <div className="yellow-section">
                    {title.includes(')')
                        ?
                        <div>
                            <h1 className="card-title"> {title.split("(")[0]}</h1>
                            <h1 className="card-title_sec"> ({title.split("(")[1]}</h1>
                        </div>
                        :
                        <h1 className="card-title"> {title}</h1>
                    }

                    <div className="card-price">{renderPrice()}</div>
                  </div>
                    <div className="card-content-wrapper">
                        <div className="card-content">
                            <Col span={4}>
                                <img src="/static/icons/Path 1156.png" />
                                <Divider type="vertical" />
                            </Col>
                             <Col span={20}>
                                <span>گواهینامه</span>
                               <b>  دانشگاه امیرکبیر</b>
                               <span>به شرط قبولی در این دوره و</span>
                               <button className="card-btn" >اموزش طراخی جهره</button>
                               <button className="card-btn">اموزش چنسیت سازی</button>
                             </Col>
                        </div>
                        <div className="card-footer">
                            <Row type="flex" style={rowStyle} gutter={32} className="gutter-pre-style-xs-32">
                                <div className="certificate-text-wrapper">
                                    <span className="certificate-text">
                                        <img src="/static/icons/Path 1156.png" />
                                        پشتیبانی آموزشی
                                    </span>
                                     <span className="certificate-text">
                                       <img src="/static/icons/Path 1156.png" />
                                      پشتیبانی آموزشی
                                     </span>
                                   <span className="certificate-text">
                                        <img src="/static/icons/Path 1156.png" />
                                           پشتیبانی آموزشی
                                    </span>
                                    <span className="certificate-text">
                                             <img src="/static/icons/Path 1156.png" />
                                              پشتیبانی آموزشی
                                    </span>
                                </div>
                            </Row>
                        </div>
                        <div className="card-button">
                            <Button size="medium"
                                    onClick={() => handleConfirmClick(data.id)}
                                    className="ant-btn style__Style-sc-1i4df0q-0 ctRBQK">
                                    <Icon type="arrow-left" />
                                <span className="title"> <IntlMessages id="courseSingle.priceBoxCard.btnTitle"/></span>
                            </Button>
                        </div>
                    </div>
                </div>
            </Style>
        );

};
PriceCard.propTypes = {
    className: PropTypes.string,
    golden: PropTypes.bool,
    rightCard: PropTypes.bool,
    discounted: PropTypes.bool,
};
export default PriceCard;

