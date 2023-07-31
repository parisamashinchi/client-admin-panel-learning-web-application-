import React,{PureComponent} from 'react';
import Style from './style';
import {Col, Form, message, Row} from 'antd';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import Input from 'components/uiElements/textInput';
import { formatMessage } from 'localization';
import basicStyle from 'theme/style';
import Button from 'components/uiElements/button';
import IntlMessages from 'utils/intlMessages';
import { postRequest } from 'utils/api';
import * as constants from 'partials/certificate-request/constants';
import paths from 'paths';
import isEmpty from 'lodash/isEmpty';
import Router from 'next/router';

 class CertificateForm extends PureComponent {
          render() {
            const {rowStyle} = basicStyle;
            const {getFieldDecorator} = this.props.form;

            const handleSubmit = e => {
                e.preventDefault();
                this.props.form.validateFields((err, values) => {
                    if (!err) {
                        (async () => {
                            try {
                                const response = await postRequest(`${constants.CERTIFICATE_URL}`, values);
                                if (!isEmpty(response.data.data)) {
                                    Router.push(`${paths.PATH_CERTIFICATE}?serial=${response.data.data.serial_number} `);
                                } else {
                                    message.error('سریال وارد شده اشتباه می باشد');
                                }
                                this.props.form.resetFields();
                            } catch (e) {
                                console.log(e)
                            }
                        })();
                    }
                });
            }

            return (
                <Style>
                    <ResponsiveBox>
                        <ResponsivePadding>
                            <div className="fixed-background"/>
                            <div className="certificate-form">
                                <Form onSubmit={handleSubmit} id="demo-form">
                                    <Form.Item>
                                        {getFieldDecorator('serial_number', {
                                            rules: [{
                                                required: true,
                                                message: 'لطفا شماره گواهینامه خود را وارد نمایید',
                                                whitespace: true
                                            }],
                                        })(<Input className="input-item"
                                                  placeholder={formatMessage('certificateRequest.certificateForm.inputPlaceHolder2')}/>)}
                                    </Form.Item>

                                    {/*<Form.Item>*/}
                                    {/*    <Row type="flex" style={rowStyle}>*/}
                                    {/*        <Col span={14}>*/}
                                    {/*            {getFieldDecorator('captcha', {*/}
                                    {/*                rules: [{*/}
                                    {/*                    required: true,*/}
                                    {/*                    message: 'لطفا کد امنیتی را وارد نمایید',*/}
                                    {/*                    whitespace: true*/}
                                    {/*                }],*/}
                                    {/*            })(*/}
                                    {/*                <Input className="input-item"*/}
                                    {/*                       placeholder={formatMessage('certificateRequest.certificateForm.inputPlaceHolder3')}/>*/}
                                    {/*            )}*/}
                                    {/*        </Col>*/}
                                    {/*        <Col span={10}>*/}
                                    {/*            <div className="chapta">*/}
                                    {/*            </div>*/}
                                    {/*        </Col>*/}
                                    {/*    </Row>*/}
                                    {/*</Form.Item>*/}

                                    <div className="send-btn-wrapper">
                                        <Button formButton className="send-btn" htmlType="submit">
                                            <IntlMessages id="button.send"/>
                                        </Button>
                                    </div>
                                </Form>

                            </div>
                        </ResponsivePadding>
                    </ResponsiveBox>
                </Style>
            );
        }
};
export default Form.create('input_certificate')(CertificateForm);
