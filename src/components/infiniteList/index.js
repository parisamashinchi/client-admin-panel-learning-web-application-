import React, { Component, Fragment } from 'react';
import Style from './style';
import { List, Row, Col } from 'antd';
import Pagination from 'components/uiElements/pagination';
import { formatMessage } from 'localization';
import EmptyData from 'static/icons/empty-data.svg';

export default class InfiniteList extends Component {
    constructor(props) {
        super(props);
        const { initialData = [], total = 0, perPage , initialRequestParams = { page: 1, limit: 10 } } = props;
        this.state = {
            data: initialData,
            total,
            perPage,
            requestParams: initialRequestParams,
            loading: false,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { initialData: prevInitialData } = prevProps;
        const { initialData, total,perPage, initialRequestParams } = this.props;
        if (prevInitialData !== initialData) {
            this.setState({
                data: initialData,
                total,
                perPage,
                requestParams: initialRequestParams,
            });
        }
    }
    render() {
        const { render, perPage } = this.props;
        const { loading, data, total, requestParams } = this.state;
        const { page, limit } = requestParams;
        const paginationConfig = {
            current: page,
            defaultCurrent: 1,
            pageSize: 8,
            totalItems: total,
            requestParams,
        };
        const pageRange = () => {
            const end = page * limit > total ? total : page * limit;
            const start = page * limit - (limit - 1);
            return { start, end };
        };
        const emptyRender = {
            emptyText: (
                <div className="empty-list">
                    <EmptyData />
                    <span>{formatMessage('list.noData')}</span>
                </div>
            ),
        };
        return (
            <Style>
                <Row>
                    <Col span={24} className="empty-data-container">
                        <List
                            locale={emptyRender}
                            dataSource={data.models}
                            renderItem={item => <List.Item key={item.id}>{render(item)}</List.Item>}
                            loading={loading}
                        />
                    </Col>
                    <Col span={24}>
                        {total !== 0 ? <Pagination paginationConfig={paginationConfig} /> : <Fragment />}
                    </Col>
                </Row>
            </Style>
        );
    }
}
