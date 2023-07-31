import React, { PureComponent } from 'react';
import Style from './style';
import IntlMessages from 'utils/intlMessages';
import Input from 'components/uiElements/textInput';
import { formatMessage } from 'localization';
import { Col, Form, Row } from 'antd';
import basicStyle from 'theme/style';
import Button from 'components/uiElements/button';
import { banksImages } from './constants';
import map from 'lodash/map';
import PersianNumber from "utils/getters/PersianNumber";
import {getStore} from 'store'
import get from "lodash/get";
import { postRequest } from 'utils/api';
import * as constants from 'partials/course-single/constants';

export default class PayCard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            price: props.data.price
        }
    }
    handleCloseModal= ()=> {
        getStore("ModalContainer").closeModal();
    }
    renderFarm = () => {
        return map(banksImages, item => {
            const { imageUrl, imageAlt } = item;
            return (
                <button className="bank-item" key={item.id}>
                    <img src={imageUrl} alt={imageAlt} />
                </button>
            );
        });
    };
    handleChange = value => {
         this.setState({
             code:  value
         })
    };
     handleSubmit = () => {
         (async () => {
             let responseCreateInvoice = {}
             const body = JSON.stringify({
                 "product_id":  this.props.data.id,
                 "product_type": "COURSE",
                 "discount_code": this.state.code
             });
             try {
                 responseCreateInvoice = await postRequest(`${constants.CREATE_INVOICE_URL}`, body);
                 this.setState({
                     url: responseCreateInvoice.data.data.url,
                     price: responseCreateInvoice.data.data.price
                 })
             } catch (e) {
                 await console.error(e);
             }
             return {
                 // createInvoice: get(responseCreateInvoice, 'data', {}),
             }
         })();

    };
    onClickBuy = () => {
         window.location.href = this.state.url
    }
    render(){
    const {title, descriptions, price} = this.props.data;
    const { rowStyle } = basicStyle;
    return (
        <Style>
            <div className="pay-card">
                <div className="pay-card-wrapper">
                    <h3 className="pay-card-title">
                        {formatMessage("courseSingle.payBoxCard.title", {course_title: title})}
                    </h3>
                    <hr className="separator"/>
                    <div className="pay-card-body">
                        <div className="price">
                            <span>
                                <IntlMessages id="courseSingle.payBoxCard.priceText"/>
                            </span>
                            <PersianNumber>{this.state.price}</PersianNumber>
                            <span>
                                <IntlMessages id="courseSingle.payBoxCard.unit"/>
                            </span>
                        </div>
                        <div className="discount-code">
                            <Form>
                                <Row type="flex" style={rowStyle}>
                                    <Col span={15}>
                                        <Form.Item>
                                            <Input className="discount-input"
                                                    placeholder={formatMessage('promotionBox.input')}
                                                    onChange={this.handleChange}
                                            />

                                            </Form.Item>
                                    </Col>
                                    <Col span={9}>
                                        <Form.Item>
                                            <Button className="action-btn"  onClick={this.handleSubmit}>
                                                <IntlMessages id="button.action" />
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                    <div className="banks">{this.renderFarm()}</div>
                    <Button formButton className="gateway-btn" onClick={this.onClickBuy}>
                        <IntlMessages id="courseSingle.payBoxCard.gatewayBtn"/>
                    </Button>
                    {/*<button className="close-button" onClick={handleCloseModal}>*/}
                    {/*    <img src="/static/icons/close-icon.svg" />*/}
                    {/*</button>*/}
                </div>
            </div>
        </Style>
    );
}
};
// export default PayCard;
