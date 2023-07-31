import React from 'react';
import Style from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import IntlMessages from 'utils/intlMessages';
import {Col, Form, Row, message} from 'antd';
import basicStyle from 'theme/style';
import Button from 'components/uiElements/button';
import Input from 'components/uiElements/textInput';
import TextArea from 'components/uiElements/textArea';
import { postRequest } from 'utils/api';
import * as constants from '../constants';

const ContactForm = props => {
    const { rowStyleNoWidth } = basicStyle;
    const { getFieldDecorator } = props.form;
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                (async () => {
                    try {
                        await postRequest(`${constants.CONTACT_US_URL}`,values );
                        success();
                        props.form.resetFields();
                    } catch (e){
                        console.log(e)
                    }
                })();
            }
        });
    };
    const success = () => {
        message.success('پیام شما ارسال شد.');
    };
    return (
        <Style>
            <ResponsiveBox>
                <ResponsivePadding>
                    <div className="fixed-background" />

                    <div className="contact-form">
                        <h1 className="contact-form-title">
                            <IntlMessages id="organization.contactForm.title" />
                        </h1>
                        <div className="contact-inputs-container">
                            <div className="contact-inputs">
                                <Form onSubmit={handleSubmit}>
                                    <Row style={rowStyleNoWidth} gutter={20} type="flex" className="gutter-pre-style-xs-20">
                                        <Col sm={12} xs={24}>
                                            <Form.Item>
                                                {getFieldDecorator('first_name', {
                                                    rules: [{ required: true, message: 'لطفا نام سازمان خود را وارد نمایید', whitespace: true }],
                                                })(<Input  placeholder="نام سازمان" />)}
                                            </Form.Item>
                                        </Col>
                                        <Col sm={12} xs={24}>
                                            <Form.Item>
                                                {getFieldDecorator('last_name', {
                                                    rules: [{ required: true, message: 'لطفا نام نماینده سازمان خود را وارد نمایید', whitespace: true }],
                                                })(<Input placeholder="نام نماینده سازمان" />)}
                                            </Form.Item>
                                        </Col>
                                        <Col sm={12} xs={24}>
                                            <Form.Item>
                                                {getFieldDecorator('email', {
                                                    rules: [
                                                        {
                                                            type: 'email',
                                                            message: 'ایمیل به درستی وارد نشده است',
                                                        },
                                                        {
                                                            required: true,
                                                            message: 'لطفا ایمیل سازمانی خود را وارد نمایید',
                                                        },
                                                    ],
                                                })(<Input placeholder="ایمیل سازمانی" />)}
                                            </Form.Item>
                                        </Col>
                                        <Col sm={12} xs={24}>

                                            <Form.Item>
                                                {getFieldDecorator('title',{
                                                    rules: [{ required: true, message: 'لطفا عنوان پیام خود را وارد نمایید', whitespace: true }]})
                                                (<Input  placeholder="موضوع " />)}
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item>
                                                {getFieldDecorator('descriptions',{
                                                    rules: [{ required: true, message: 'لطفا متن پیام خود را وارد نمایید', whitespace: true }]})
                                            (<TextArea placeholder="متن پیام" rows={10} />)}
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item>
                                                <Button formButton htmlType="submit">
                                                    <IntlMessages id="contact.contactForm.sendButton" />
                                                </Button>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </div>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default Form.create({ name: 'form_contact' })(ContactForm);
