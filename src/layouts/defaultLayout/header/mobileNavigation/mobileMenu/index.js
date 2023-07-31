import React, { Component } from 'react';
import { Item, NavWrapper, Style } from './style';
import { Col, Icon, Row } from 'antd';
import Link from 'next/link';
import IntlMessages from 'utils/intlMessages';
import Button from 'components/uiElements/button';
import AparatIcon from 'static/icons/icon-aparat.svg';
import LinkedInIcon from 'static/icons/icon-linkedin.svg';
import TwitterIcon from 'static/icons/icon-twitter.svg';
import TelegramIcon from 'static/icons/icon-telegram.svg';
import WhatsAppIcon from 'static/icons/icon-whatsapp.svg';
import paths from 'paths';
import routes from 'routes';
import PropTypes from 'prop-types';
import SubStyle from "../../navigation/subNavigation/style";
import Dropdown from 'components/uiElements/dropdown';
import map from 'lodash/map';
import jsonToQueryString from 'utils/getters/jsonToQueryString';


export default class MobileMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        this.setState({ ios });
    }

    render() {
        const WhatsApp = () => <WhatsAppIcon />;
        const Telegram = () => <TelegramIcon />;
        const Linkedin = () => <LinkedInIcon />;
        const Twitter = () => <TwitterIcon />;
        const Aparat = () => <AparatIcon />;
        const { open, closeNavBar } = this.props;
        const { ios } = this.state;

        return (
            <Style ios={ios} open={open}>
                <NavWrapper open={open}>
                    <Row type="flex" className="nav-container">
                        <Row type="flex" className="nav-items">
                            <Item className={`item item1 ${open ? 'open' : ''}`} span={24} open={open} >
                                <Link href={paths.PATH_HOME} as={routes.ROUTE_HOME}>
                                    <a>
                                        <IntlMessages id="header.mobileNavigation.mobileMenu.homePage" />
                                    </a>
                                </Link>
                            </Item>
                            <Item className={`item item2 ${open ? 'open' : ''}`} span={24} open={open} >
                                <Dropdown overlay={
                                    map(this.props.course, item =>(
                                        <SubStyle>
                                            <li className="submenu-item" key={item.id}>
                                                <Link
                                                    href={`${paths.PATH_COURSE_LIST}${jsonToQueryString(item.seo_title)}`}
                                                    as={routes.ROUTE_COURSE_LIST.replace(':id', item.seo_title)} prefetch={false}>
                                                    <a className="submenu-text">{item.title}</a>
                                                </Link>
                                            </li>
                                        </SubStyle>
                                    ))
                                }
                                >
                                    <IntlMessages id="header.mobileNavigation.mobileMenu.courses" />
                                </Dropdown>
                            </Item>
                            <Item className={`item item2 ${open ? 'open' : ''}`} span={24} open={open} >
                                <Dropdown overlay={
                                    map(this.props.path, item =>(
                                        <SubStyle>
                                            <li className="submenu-item" key={item.id}>
                                                <Link
                                                    href={`${paths.PATH_LEARNING_PATH}${jsonToQueryString(item.seo_title)}`}
                                                    as={routes.ROUTE_LEARNING_PATH.replace(':id', item.seo_title)} prefetch={false}>
                                                    <a className="submenu-text">{item.title}</a>
                                                </Link>
                                            </li>
                                        </SubStyle>
                                    ))
                                }
                                >
                                    <IntlMessages id="header.mobileNavigation.mobileMenu.learningPath" />
                                </Dropdown>
                            </Item>
                            {/*<Item className={`item item3 ${open ? 'open' : ''}`} span={24} open={open} >*/}
                            {/*    <Link href={paths.PATH_COURSE_LIST} as={routes.ROUTE_COURSE_LIST_ALL}>*/}
                            {/*        <a>*/}
                            {/*            <IntlMessages id="header.mobileNavigation.mobileMenu.courses" />*/}
                            {/*        </a>*/}
                            {/*    </Link>*/}
                            {/*</Item>*/}
                            <Item className={`item item4 ${open ? 'open' : ''}`} span={24} open={open} >
                                <Link href='https://amoozal.com/mag/' as='https://amoozal.com/mag/'>
                                    <a>
                                        <IntlMessages id="header.mobileNavigation.mobileMenu.blog" />
                                    </a>
                                </Link>
                            </Item>
                            {/*<Item className={`item item5 ${open ? 'open' : ''}`} span={24} open={open} >*/}
                            {/*    <Link href={paths.PATH_ORGANIZATION} as={routes.PATH_ORGANIZATION}>*/}
                            {/*        <a>*/}
                            {/*            <IntlMessages id="header.mobileNavigation.mobileMenu.organizational" />*/}
                            {/*        </a>*/}
                            {/*    </Link>*/}
                            {/*</Item>*/}
                            {/*<Item className={`item item6 ${open ? 'open' : ''}`} span={24} open={open} >*/}
                            {/*    <Link href={paths.PATH_ABOUT_US} as={routes.ROUTE_ABOUT_US}>*/}
                            {/*        <a>*/}
                            {/*            <IntlMessages id="header.mobileNavigation.mobileMenu.aboutUs" />*/}
                            {/*        </a>*/}
                            {/*    </Link>*/}
                            {/*</Item>*/}
                            {/*<Item className={`item item7 ${open ? 'open' : ''}`} span={24} open={open} >*/}
                            {/*    <Link href={paths.PATH_CONTACT_US} as={routes.PATH_CONTACT_US}>*/}
                            {/*        <a>*/}
                            {/*            <IntlMessages id="header.mobileNavigation.mobileMenu.contactUs" />*/}
                            {/*        </a>*/}
                            {/*    </Link>*/}
                            {/*</Item>*/}
                            <Item className={`item item7 ${open ? 'open' : ''}`} span={24} open={open} >
                                <Link href={paths.PATH_TEST_LANDING} as={routes.ROUTE_TEST_LANDING}>
                                    <a>
                                        <IntlMessages id="header.mobileNavigation.mobileMenu.test" />
                                        <span className="ant-tag ant-tag-red">جدید</span>
                                    </a>
                                </Link>
                            </Item>

                        </Row>
                        <Row type="flex" className="buttons gutter-pre-style-xs-14" gutter={14}>
                            <Col span={12}>
                                <a href={`${this.props.PanelUrl}auth/sign-in`} className="ant-btn login" size="medium">
                                    <IntlMessages id="button.login" />
                                </a>
                            </Col>
                            <Col span={12}>
                                <a   href={`${this.props.PanelUrl}auth/sign-up`}  size="medium" className="ant-btn register ">
                                    <IntlMessages id="button.membership" />
                                </a>
                            </Col>
                        </Row>
                        <div className="nav-footer-wrapper">
                            <Row className="nav-footer gutter-pre-style-xs-24"  justify="center">
                                <Col className="nav-social-icons" lg={7} xs={24}>
                                    <ul>
                                        <li>
                                            <Link href="https://www.instagram.com/amoozal">
                                                <a target="_blank">
                                                    <Icon type="instagram" />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://api.whatsapp.com/send?phone=989907892990">
                                                <a target="_blank">
                                                    <Icon component={WhatsApp} />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.linkedin.com/company/18802137/admin/">
                                                <a target="_blank">
                                                    <Icon component={Linkedin} />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://t.me/amoozal">
                                                <a target="_blank">
                                                    <Icon component={Telegram} />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://twitter.com/amoozal">
                                                <a target="_blank">
                                                    <Icon component={Twitter} />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.aparat.com/amoozal">
                                                <a target="_blank">
                                                    <Icon component={Aparat} style={{ marginLeft: 0 }} />
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </Col>
                                <Col className="copyright-text" lg={9} xs={24} >
                                    <div>
                                        <IntlMessages id="footer.copyRightText" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <button className="close-icon" onClick={closeNavBar}>
                            <Icon type="close" />
                        </button>
                    </Row>
                </NavWrapper>
            </Style>
        );
    }
}

MobileMenu.propTypes = {
    open: PropTypes.bool,
    closeNavBar: PropTypes.object,
};
