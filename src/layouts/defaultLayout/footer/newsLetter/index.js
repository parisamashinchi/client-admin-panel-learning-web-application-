import React, { Component } from 'react';
import Style from './style';
import { Form, Input } from 'antd';
import IntlMessages from 'utils/intlMessages';
import Button from 'components/uiElements/button';

class NewsLetter extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll();
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Style>
                <Form onSubmit={this.handleSubmit} className="form-item-wrapper">
                    <Form.Item className="news-letter-input-wrapper">
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
                        })(<Input className="news-letter-input" placeholder="ایمیل خود را وارد نمایید" />)}
                    </Form.Item>
                    <Form.Item className="submit-btn-wrapper">
                        <Button className="news-letter-submit-btn" htmlType="submit" size="small">
                            <IntlMessages id="button.send" />
                        </Button>
                    </Form.Item>
                </Form>
            </Style>
        );
    }
}
export default Form.create({ name: 'news_letter' })(NewsLetter);
