import React from 'react';
import Style from './style';
import { Col, Form, Row ,message} from 'antd';
import basicStyle from 'theme/style';
import Button from 'components/uiElements/button';
import IntlMessages from 'utils/intlMessages';
import Input from 'components/uiElements/textInput';
import TextArea from 'components/uiElements/textArea';
import { formatMessage } from 'localization';
import { postRequest } from 'utils/api';
import * as constants from 'partials/contact/constants';

const ContactInputs = props => {
    const { rowStyleNoWidth } = basicStyle;
    const { getFieldDecorator } = props.form;
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                (async () => {
                    try {
                        await postRequest(`${constants.CONTACT_US_URL}`,values );
                        message.success('پیام شما ارسال شد.');
                        props.form.resetFields();
                    } catch (e){
                        console.log(e)
                    }
                })();
            }
        });
    };;
    return (
        <Style>
            <div className="contact-inputs">
                <Form onSubmit={handleSubmit}>
                    <Row style={rowStyleNoWidth} gutter={20} type="flex" className="gutter-pre-style-xs-20">
                        <Col sm={12} xs={24}>
                            <Form.Item>
                                {getFieldDecorator('first_name', {
                                    rules: [{ required: true, message: 'لطفا نام خود را وارد نمایید', whitespace: true }],
                                })(<Input  placeholder={formatMessage('placeholder.name')} />)}
                            </Form.Item>
                        </Col>
                        <Col sm={12} xs={24}>
                            <Form.Item>
                                {getFieldDecorator('last_name', {
                                    rules: [{ required: true, message: 'لطفا نام خانوادگی خود را وارد نمایید', whitespace: true }],
                                })(<Input placeholder={formatMessage('placeholder.familyName')} />)}
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
                                            message: 'لطفا ایمیل خود را وارد نمایید',
                                        },
                                    ],
                                })(<Input placeholder={formatMessage('placeholder.email')} />)}
                            </Form.Item>
                        </Col>
                        <Col sm={12} xs={24}>
                            <Form.Item>
                                {getFieldDecorator('title',{
                                    rules: [{ required: true, message: 'لطفا عنوان پیام خود را وارد نمایید', whitespace: true }]})
                                (<Input f placeholder={formatMessage('placeholder.messageTitle')} />)}
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item>
                                {getFieldDecorator('descriptions',{
                                    rules: [{ required: true, message: 'لطفا متن پیام خود را وارد نمایید', whitespace: true }]})
                                    (<TextArea className="contact-form-textarea" rows={10} placeholder={formatMessage('placeholder.messageText')} />
                                )}
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
        </Style>
    );
};
export default Form.create('input_contact')(ContactInputs);
