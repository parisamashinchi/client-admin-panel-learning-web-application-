import React, { PureComponent } from 'react';
import PHelmet from 'components/pHelmet';
import DefaultLayout from 'layouts/defaultLayout';
import {Button, Col, Row, Dropdown, Menu, Switch} from 'antd';
import Filter from 'partials/course-list/filter';
import SearchBar from 'partials/course-list/searchBar';
import InfiniteList from 'components/infiniteList';
import Course from 'partials/course-list/course';
import basicStyle from 'theme/style';
import * as constants from 'partials/course-list/constants';
import { mockCourses } from 'partials/course-list/constants';
import { getPageParams } from 'utils/nextUtils';
import Style from 'partials/course-list/style';
import IntlMessages from 'utils/intlMessages';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import { formatMessage } from 'localization';
import ParallaxHero from 'components/parallaxHero';
import { getRequest } from 'utils/api';
import { DEFAULT_PAGE_SIZE } from 'utils/constants';
import get from 'lodash/get';
import { getStore } from 'store';
import Router from 'next/router';
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";


export default class CourseList extends PureComponent {
    static async getInitialProps({ ctx }) {
        const query = getPageParams(ctx);
        const page = parseInt(get(query, 'page', 1));
        const limit = parseInt(get(query, 'limit', DEFAULT_PAGE_SIZE));
        const requestParams = { ...query, page, limit };
        let responseCourseListData = {};
        try {
            responseCourseListData = await getRequest(constants.DEPARTMENT_ALL_API_URL, requestParams);
        } catch (e) {
            await console.error(e);
        }
        return {
            initialCourseList: get(responseCourseListData, 'data.data', []),
            initialTotal: get(responseCourseListData, 'data.meta.total', 0),
            initialPerPage: get(responseCourseListData, 'data.meta.per_page', 0),
            requestParams
        };
    }
    constructor(props) {
        super(props);
        this.state = {
            list: {},
            total: null,
            perPage: null,
        }
        this.modalContainer = getStore('ModalContainer');
    }


    resize = () => {
        if (window.innerWidth > 1000 && this.modalContainer.state.open) {
            this.modalContainer.closeModal();
        }
    };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        this.setState({
            path: window.location.pathname
        })
        if(window.location.pathname !== '/course-list' && isEmpty(window.location.search)) { //if filter by department
            (async () => {
                let response = {};
                try {
                    response = await getRequest(`${constants.DEPARTMENT_LIST_API_URL}${window.location.pathname.split('/')[2]}`);
                } catch (e) {
                    console.error(e);
                }
                this.setState({
                    list: response.data.data,
                    total:response.data.meta.total,
                    perPage: response.data.meta.per_page
                })
            })();

        }else if(!isEmpty(window.location.search)){ //if search something in input
            (async () => {
                let response = {};
                try {
                    window.location.pathname.split('/').length === 3
                        ? response = await getRequest(`${constants.DEPARTMENT_LIST_API_URL}${window.location.pathname.split('/')[2]}${window.location.search}`)
                        : response = await getRequest(`${constants.DEPARTMENT_LIST_API_URL}all${window.location.search}`)
                } catch (e) {
                    console.error(e);
                }
                this.setState({
                    list: response.data.data,
                    total:response.data.meta.total,
                    perPage: response.data.meta.per_page
                })
            })();
        }else { // if call course-list without filter and search
            this.setState({
                list: this.props.initialCourseList,
                total: this.props.initialTotal,
                perPage: this.props.initialPerPage
            })
        }

    }
    componentDidUpdate (prevState) {
        if( window.location.pathname  !== this.state.path && window.location.pathname !== '/course-list') {
            Router.push(window.location.pathname + window.location.search);
        }
        if(window.location.pathname === '/course-list'){
            this.setState({
                list: this.props.initialCourseList,
                total: this.props.initialTotal,
                perPage: this.props.initialPerPage
            })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    openFilterModal = () => {
        this.modalContainer.showModal(<Filter />, { fullWidth: true, destroyOnClose: false, fullHeight: false });
    };

     handleMenuClick = (e)=> {
        console.log('click', e);
    }

     onChangeSwitch = (checked)=> {
         if(!checked){
             Router.push(origin + '/course-list' );
         } else {
             Router.push(window.location.pathname + '/packages-special-offer');
         }
    }

    render() {
        const {requestParams } = this.props;
        const {list } = this.state;
        const heroData = {
            thumbnail: list.media_url,
            thumbnail_mobile: list.mobile_media_url,
            title: list.title,

        };
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                { map(this.state.list.models,( item, index) => {
                    return (
                        !isEmpty(item.model) &&
                            <Menu.Item key={index}>
                                {item.model.category.title}
                            </Menu.Item>

                    )
                })}
            </Menu>
        );

        return (
            <DefaultLayout>
                <PHelmet title={list.title} description={list.meta_desc} schema={true} img='/static/images/hero-course-list.jpg'/>
                <Style>
                    {/*<ParallaxHero*/}
                    {/*    data={heroData}*/}
                    {/*    back={!isEmpty(this.state.list) && this.state.list}*/}
                    {/*    size="medium"*/}
                    {/*/>*/}
                    <ResponsiveBox>
                        <ResponsivePadding>
                            <Row type="flex" className="gutter-pre-style-lg-30 gutter-pre-style-xl-50" gutter={{ lg: 30, xl: 50 }}>
                                <Col span={0} lg={{ span: 6 }}>
                                    <div className="banner-box">
                                        <img src={this.state.list.small_media_url} />
                                    </div>
                                    {/*<SearchBar />*/}
                                    <Filter />
                                </Col>
                                <Col lg={18} xs={24}>
                                    <Row type="flex" className="gutter-pre-style-lg-30 gutter-pre-style-xl-50" gutter={{ lg: 30, xl: 50 }}>
                                        <img className="banner" src={this.state.list.media_url} />
                                    </Row>
                                    <Row>
                                        <Col xl={24} className="top-btn">
                                           <img src="/static/images/path 1124.png" />
                                            <span className="list-title">لیست دوره ها</span>
                                            <span className="list-pathname">{this.state.list.meta_title}</span>
                                            <div className="switch">
                                                <Switch defaultChecked={(process.browser) && global.window.location.pathname === '/course-list/packages-special-offer' ? "true" :"false"}  onChange={this.onChangeSwitch}  />
                                                پیشنهادات ویژه (پکیج ها)
                                            </div>

                                        </Col>
                                    </Row>
                                    <InfiniteList
                                        initialData={this.state.list}
                                        total={this.state.total}
                                        perPage={this.state.perPage}
                                        initialRequestParams={requestParams}
                                        render={course => <Course data={!isEmpty(course.model) && course.model} />}
                                    />
                                </Col>
                            </Row>
                        </ResponsivePadding>
                    </ResponsiveBox>
                    <div className="search-and-filter">
                        <img src="/static/images/Ellipse 35.png" />
                        <img src="/static/images/Ellipse 35.png" />
                        <img src="/static/images/Ellipse 35.png" />
                        <img src="/static/images/Ellipse 35.png" />
                        <span className="filter" onClick={this.openFilterModal}>
                                        دپارتمان ها
                                    </span>
                        <span className="list-pathname">{this.state.list.meta_title}</span>
                    </div>
                </Style>
            </DefaultLayout>
        );
    }
}
