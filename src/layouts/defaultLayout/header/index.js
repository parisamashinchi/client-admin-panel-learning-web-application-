import React, { Component } from 'react';
import Style from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import { Col, Row ,Icon} from 'antd';
import Branding from './branding';
import Navigation from './navigation';
import SearchBox from './searchBox';
import Link from 'next/link';
import MobileNavigation from './mobileNavigation';
import IntlMessages from 'utils/intlMessages';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import PropTypes from 'prop-types';
import Cookies from "js-cookie";
import isEmpty from 'lodash/isEmpty';
import LoginSubNavigation from "./navigation/loginSubNavigation";
import Dropdown from 'components/uiElements/dropdown';
import { formatMessage } from 'localization';
import { getRequest } from 'utils/api';
import * as constants from 'partials/course-list/constants';
import get from "lodash/get";

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sticked: false,
        };
    }
    componentDidMount() {
        // Cookies.set('hash', location.search.slice(1), {
        //     path: '/',
        // })
        document.addEventListener('scroll', this.handleScroll, true);
        (async () => {
            let responseUserPanelUrl = {};
            let responseLearningPathUrl = {};
            let responseCourseUrl = {};
            // let responseGetTokenData = {};
            // let responseProfileInfo = {};
            try {
                responseUserPanelUrl = await getRequest(`${constants.USER_PANEL_URL}`);
                responseLearningPathUrl = await getRequest(`${constants.LEARNING_PATH_URL}`);
                responseCourseUrl = await getRequest(`${constants.DEPARTMENT_LIST_URL}`);
                this.setState({
                    PanelUrl: get(responseUserPanelUrl, 'data.data',{}),
                    LearningPath: get(responseLearningPathUrl, 'data.data',{}),
                    CourseUrl: get(responseCourseUrl, 'data.data',{}),
                })

                // if( !isEmpty(Cookies.get('hash'))) {
                //     let url = constants.GET_TOKEN_URL + '?mystery_id=' + Cookies.get('hash');
                //     responseGetTokenData = await getRequest(url);
                //     Cookies.set('token', responseGetTokenData.data.data.name, {
                //         path: '/',
                //     })
                //
                //     const token = responseGetTokenData.data.data;
                //     const requestParams = {token};
                //      responseProfileInfo = await getRequest(`${constants.GET_PROFILE_INFO_URL}`,requestParams );
                //     Cookies.set('user', responseProfileInfo.data.data.name, {
                //         path: '/',
                //     })
                // }
            } catch (e) {
                if (e.status === 401) {
                    console.log(e, '401')
                }
            }
        })();
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        scrollY = window.pageYOffset;
        if (scrollY > 0 && !this.state.sticked) {
            document.querySelector('#main-style').classList.add('black-background');
            this.setState({ sticked: true });
        }
        if (scrollY === 0 && this.state.sticked) {
            document.querySelector('#main-style').classList.remove('black-background');
            this.setState({ sticked: false });
        }
    };

    render() {
        const { sticked ,PanelUrl, LearningPath,CourseUrl} = this.state;
        const { blackBackground  } = this.props;

        // const user = Cookies.get('user');
        // const token = Cookies.get('token');
        // const logNav ={
        //     id: 1,
        //     title: user,
        //     subNavs: [
        //         { id: 1, title: formatMessage('header.myCourse'), href: `${PanelUrl}user/course/active`, as: `${PanelUrl}user/course/active` , prefetch: false },
        //         { id: 2, title: formatMessage('header.logout'), href: {PanelUrl}, as: PanelUrl, prefetch: false },
        //     ]
        // }
        return (
            <Style sticked={sticked} id="main-style" blackBackground={blackBackground} path={this.props.path}>
                <ResponsiveBox className="desktop-nav-bar-container">
                    <ResponsivePadding>
                        <Row type="flex" style={{ alignItems: 'center' }} gutter={{ md: 20 }}>
                            <Col lg={4}>
                                <Branding />
                            </Col>
                            <Col lg={11} xl={11}>
                                <Navigation path={LearningPath} course={CourseUrl} />
                            </Col>
                            <Col lg={9} xl={9}>
                                <div className="search-login-container">
                                    <div className="search">
                                        <SearchBox />
                                    </div>
                                {/*{isEmpty(token)*/}
                                {/*    ?*/}
                                    <ul>
                                        <li>
                                            <a href={`${PanelUrl}auth/sign-in`} className={isEmpty(PanelUrl) && "disable"}>
                                                <IntlMessages id="header.login"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`${PanelUrl}auth/sign-up`} className={isEmpty(PanelUrl) && "disable"}>
                                                <IntlMessages id="header.signUp"/>
                                            </a>
                                        </li>
                                    </ul>
                                    {/*:*/}
                                    {/*<ul>*/}
                                    {/*    <li className="nav-item" key={logNav.title}>*/}
                                    {/*        <Dropdown overlay={<LoginSubNavigation data={logNav.subNavs} /> }>*/}
                                    {/*            <Icon type="user" />*/}
                                    {/*            {logNav.title}*/}
                                    {/*        </Dropdown>*/}
                                    {/*    </li>*/}
                                    {/*</ul>*/}
                                {/*}*/}
                                </div>
                            </Col>
                        </Row>
                    </ResponsivePadding>
                </ResponsiveBox>
                <MobileNavigation sticked={sticked}  PanelUrl={PanelUrl} path={LearningPath} course={CourseUrl} />
            </Style>
        );
    }
}

Header.propTypes = {
    blackBackground: PropTypes.bool,
};
