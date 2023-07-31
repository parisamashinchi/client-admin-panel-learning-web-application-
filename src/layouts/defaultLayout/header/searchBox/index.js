import React, { Component } from 'react';
import Style from './style';
import { Form, Input } from 'antd';
// import SearchIcon from 'static/icons/loupe.png';
import Router from 'next/router';
import routes from 'routes';
import jsonToQueryString from 'utils/getters/jsonToQueryString';
import { formatMessage } from 'localization';

class SearchBox extends Component {
    handleSubmit = e => {
        e && e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                Router.push('/course-list/all' +
                    jsonToQueryString({ ['key_word']: values['query']}))
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Style>
                <Form onSubmit={this.handleSubmit} className="search-input-form">
                    <Form.Item>{getFieldDecorator('query')(<Input className="search-input" placeholder={formatMessage("header.searchBox.title")} />)}</Form.Item>
                    <Form.Item className="submit-btn">
                        <a onClick={this.handleSubmit}>
                            <i>
                            <img src="/static/icons/loupe.png" />
                            </i>
                        </a>
                    </Form.Item>
                </Form>
            </Style>
        );
    }
}
export default Form.create({ name: 'search' })(SearchBox);
