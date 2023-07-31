import React from 'react';
import Style from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import { Col, Row } from 'antd';
import NewsLetter from './newsLetter';
import basicStyle from 'theme/style';
import Link from 'next/link';
import AparatIcon from 'static/icons/icon-aparat.svg';
import LinkedInIcon from 'static/icons/icon-linkedin.svg';
import TwitterIcon from 'static/icons/icon-twitter.svg';
import TelegramIcon from 'static/icons/icon-telegram.svg';
import WhatsAppIcon from 'static/icons/icon-whatsapp.svg';
import { Icon } from 'antd';
import IntlMessages from 'utils/intlMessages';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import paths from 'paths';
import routes from 'routes';
import { formatMessage } from 'localization';
import {toPersianNumber} from 'utils/getters/PersianNumber';

const { rowStyle } = basicStyle;

const Footer = () => {
    const WhatsApp = () => <WhatsAppIcon />;
    const Telegram = () => <TelegramIcon />;
    const Linkedin = () => <LinkedInIcon />;
    const Twitter = () => <TwitterIcon />;
    const Aparat = () => <AparatIcon />;
    return (
        <Style>
            <Row>
                <Col className="footer-top">
                    <ResponsiveBox>
                        <ResponsivePadding>
                            <Row style={rowStyle}>
                                <Col span={24}>
                                    <Row type="flex" style={{ ...rowStyle, marginTop: '60px' }} gutter={{ xs: 10, md: 20, sm: 10 }}>
                                        <Col className="widget" lg={6} md={8} sm={8} xs={24}>
                                            <h4 className="title">
                                                <IntlMessages id="footer.addressTitle" />
                                            </h4>
                                            <p className="sub-title">
                                                <IntlMessages id="footer.addressSubtitle" />
                                            </p>
                                        </Col>
                                        <Col className="widget" lg={6} md={8} sm={8} xs={24}>
                                            <h4 className="title">
                                                <IntlMessages id="footer.communicationWaysTitle" />
                                            </h4>
                                            <div className="sub-title">
                                                <p>
                                                    <IntlMessages id="footer.communicationWays.PhoneNumber1.title" />
                                                    <a href="tel:+09907892990">
                                                        <IntlMessages id="footer.communicationWays.PhoneNumber1" />
                                                    </a>
                                                </p>
                                                <p>
                                                    <IntlMessages id="footer.communicationWays.PhoneNumber2.title" />
                                                    <a href="tel:+09907892990">
                                                        <span className="phone">
                                                            <IntlMessages id="footer.communicationWays.PhoneNumber2" />
                                                        </span>
                                                        <IntlMessages id="footer.communicationWays.PhoneNumber3" />
                                                    </a>
                                                </p>
                                                <p>
                                                    <IntlMessages id="footer.communicationWays.email" />
                                                    <a href="mailto:info@amoozal.com">
                                                        <IntlMessages id="footer.communicationWaysEmail" />
                                                    </a>
                                                </p>
                                            </div>
                                        </Col>
                                        <Col className="widget" id="free-counseling" lg={6} md={8} sm={8} xs={24}>
                                            <h4 className="title">
                                                <IntlMessages id="footer.freeCounselingTitle" />
                                            </h4>
                                            <p className="sub-title">
                                                <IntlMessages id="footer.freeCounselingSubtitle" />
                                            </p>
                                        </Col>
                                        {/*<Col className="widget" id="news-letter" lg={6} md={24} sm={24} xs={24}>*/}
                                            {/*<h4 className="title">*/}
                                            {/*    <IntlMessages id="footer.newsLetterTitle" />*/}
                                            {/*</h4>*/}
                                            {/*<div>*/}
                                            {/*    <NewsLetter />*/}
                                            {/*</div>*/}
                                        {/*</Col>*/}
                                    </Row>
                                </Col>
                                <Col />
                                <Col span={24}>
                                    <Row
                                        style={{
                                            ...rowStyle,
                                            marginTop: '110px',
                                            alignItems: 'center',
                                        }}
                                        className="nav-row"
                                    >
                                        <Col lg={18} md={24} sm={24} xs={24}>
                                            <div className="footer-nav">
                                                <Link href="#">
                                                    <a>
                                                        <img src="/static/images/logo-footer.png" alt={formatMessage('site.name')} />
                                                    </a>
                                                </Link>
                                                <ul className="nav-list">
                                                    <li>
                                                        <Link href={paths.PATH_CONTACT_US} as={routes.ROUTE_CONTACT_US} prefetch>
                                                            <a>
                                                                <IntlMessages id="footer.contactUs" />
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={paths.PATH_ABOUT_US} as={routes.ROUTE_ABOUT_US} prefetch>
                                                            <a>
                                                                <IntlMessages id="footer.aboutUs" />
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={paths.PATH_QUESTIONS} as={routes.ROUTE_QUESTIONS} prefetch>
                                                            <a>
                                                                <IntlMessages id="footer.faq" />
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={paths.PATH_CERTIFICATE_REQUEST} as={routes.ROUTE_CERTIFICATE_REQUEST} prefetch>
                                                            <a>
                                                                <IntlMessages id="footer.documentInquiry" />
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={paths.PATH_ORGANIZATION} as={routes.ROUTE_ORGANIZATION} prefetch>
                                                            <a>
                                                                <IntlMessages id="footer.organizational" />
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={paths.PATH_RULES} as={routes.ROUTE_RULES} >
                                                            <a>
                                                                <IntlMessages id="footer.rules" />
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col className="certificate-badge" lg={6} md={24} sm={24} xs={24}>
                                            <img id='jxlzwlaofukzoeukapfujxlz' style={{cursor:'pointer'}}
                                                 onClick={() => window.open("https://logo.samandehi.ir/Verify.aspx?id=146851&p=rfthaodsgvkamcsidshwrfth", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")}
                                                 alt='logo-samandehi'
                                                 src='https://logo.samandehi.ir/logo.aspx?id=146851&p=nbpdshwlwlbqaqgwujynnbpd'/>
                                            {/*<img*/}
                                            {/*    onClick={() => {*/}
                                            {/*    // window.open("https://logo.samandehi.ir/Verify.aspx?id=146851&p=rfthaodsgvkamcsidshwrfth", "Popup", "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")}}*/}
                                            {/*    window.open("https://logo.samandehi.ir/Verify.aspx?id=146851&p=rfthaodsgvkamcsidshwrfth", "myWindow","width=200,height=100")}}*/}
                                            {/*        src="/static/images/neshanemelli.png" alt="" />*/}

                                            <Link href="#">
                                                <a target="_blank" href="https://trustseal.enamad.ir/?id=122452&amp;Code=lTpZyboxmdd3gA0Y4fJv">
                                                    <img src="/static/images/namad.png" alt="" />
                                                </a>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </ResponsivePadding>
                    </ResponsiveBox>
                </Col>
                <Col className="footer-bottom">
                    <ResponsiveBox>
                        <Row style={{ ...rowStyle, alignItems: 'center' }}>
                            <Col className="copyright" xl={18} lg={16 }>
                                <p className="copyright-text">
                                    <IntlMessages id="footer.copyRightText" />
                                </p>
                            </Col>
                            <Col xl={6} lg={8} md={24} sm={24} xs={24}>
                                <ul className="social-nav">
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
                        </Row>
                    </ResponsiveBox>
                </Col>
            </Row>
        </Style>
    );
};
export default Footer;
