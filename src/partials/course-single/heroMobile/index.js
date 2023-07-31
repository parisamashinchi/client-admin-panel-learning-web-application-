import React, {useState} from 'react';
import Style from './style';
import Button from 'components/uiElements/button';
import IntlMessages from 'utils/intlMessages';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import basicStyle from 'theme/style';
import { Col, Row, Affix, Anchor , Divider, Icon, Modal,Form, Input,} from 'antd';
import Countdown from 'react-countdown-now';
import PersianNumber from 'utils/getters/PersianNumber';
import {CopyToClipboard} from "react-copy-to-clipboard";
import {useRouter} from "next/router";
import isEmpty from "lodash/isEmpty";

const { rowStyle } = basicStyle;

const Completionist = () => <span>جشنواره به پایان رسید!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist />;
    } else {
        return (
            <div className="countdown">
                <Row type="flex" style={rowStyle} gutter={24} className="gutter-pre-style-xs-24">
                    <Col span={12}><h3>مهلت ثبت نام:</h3></Col>
                    <Col span={3} className="countdown-item">
                        <div className="number">
                            {seconds === 0
                                ? '۰۰'
                                :  <PersianNumber>{seconds}</PersianNumber>
                            }

                        </div>
                        <div className="text">ثانیه</div>
                    </Col>
                    <Col span={3} className="countdown-item">
                        <div className="number">
                            {minutes === 0
                                ? '۰۰'
                                : <PersianNumber>{minutes}</PersianNumber>
                            }
                        </div>
                        <div className="text">دقیقه</div>
                    </Col>
                    <Col span={3} className="countdown-item">
                        <div className="number">
                            {hours === 0
                                ? '۰۰'
                                : <PersianNumber>{hours}</PersianNumber>
                            }
                        </div>
                        <div className="text">ساعت</div>
                    </Col>
                    <Col span={3} className="countdown-item">
                        <div className="number">
                            {days === 0
                                ? '۰۰'
                                : <PersianNumber>{days}</PersianNumber>
                            }
                        </div>
                        <div className="text">روز</div>
                    </Col>
                </Row>
            </div>
        );
    }
};

const HeroMobile = ({ data, pack }) => {
    const { header_title, header_descriptions, header_media, mobile_header_media,renewal_date, course_sell_types, original_price, price_with_discount } = data;
    const { Link } = Anchor;
    const [visible, setVisible] = useState(false);
    const [social, setSocial] = useState('');
    const [innerWidth, setInnerWidth] = useState(null);
    const [copied, setCopied] = useState(false);
    const router = useRouter();
    const showModal = () => {
        setVisible(true);
    };

    const handleOk = e => {
        setVisible(false);
    };

    const handleCancel = e => {
        setVisible(false);
    };

    const shareSocial = (link) => {
        window.location.href =link;
    }
    const onFinish = (values) => {
        window.location.href =values
    };
    return (
        <Style background={header_media}  mobileThumbnail={mobile_header_media} >
            <ResponsiveBox>
                <ResponsivePadding>
                 <Col span={24} >
                     <img src="/static/images/Path 1124.png" className="title-img" />
                      <h1 className="title">{header_title}</h1>
                      <h1 className="title-eng">Autodesk AutoCAD 2021</h1>
                      <p className="description">{header_descriptions}</p>
                         <Col span={24} className="level">
                              <span className="level-title">سطح دوره:</span><span className="level-text" >متوسط</span>
                               <span className="level-title" >ارایه مدرک:</span><span className="level-text" >امیرکبیر</span>
                        </Col>
                            <Row>
                                <Col span={24}>
                                    <h3>
                                        <Divider type="vertical" className="divider"/>
                                        <span className="price">
                                            <IntlMessages id="courseSingle.introduction.price"/>
                                            &nbsp;
                                            {pack
                                              ? <span>
                                                    <PersianNumber className="original-price">{original_price}</PersianNumber>
                                                    <PersianNumber>{price_with_discount}</PersianNumber>
                                                </span>
                                                :  <PersianNumber>{ !isEmpty(course_sell_types) && course_sell_types[0].price}</PersianNumber>
                                                }
                                            <IntlMessages id="courseSingle.payBoxCard.unit"/>
                                        </span>
                                        <Divider type="vertical" className="divider"/>
                                    </h3>
                                </Col>
                            </Row>

                        </Col>
{/*                     <Row> */}
{/*                         <div className="counter"> */}
{/*                             {renewal_date !== 'undefined' && */}
{/*                             <Countdown date={Date.now() + renewal_date * 60 * 1000} renderer={renderer}/>} */}
{/*                         </div> */}
{/*                     </Row> */}
                </ResponsivePadding>
            </ResponsiveBox>
            <div id="mobile-buttons" className="mobile-buttons">
                <Affix offsetTop={50}>
                    <Row style={rowStyle} type="flex" justify="center">
                        <Col span={!pack ? 14 : 24}>
                            <Anchor affix={false} offsetTop={50}>
                                <Link
                                    href="#price-box"
                                    title={
                                        <Button yellowSolid className="course-register-button button">
                                            <span><IntlMessages id="button.register" /></span>
                                            {/*<Icon type="arrow-left" />*/}
                                        </Button>
                                    }
                                />
                            </Anchor>
                        </Col>
                        {!pack &&
                            <Col span={10}>
                                <Anchor affix={false} offsetTop={50}>
                                    <Link
                                        href="#course-title"
                                        title={
                                            <Button border className="course-title-button button">
                                                <IntlMessages id="courseSingle.introduction.courseTitle"/>
                                            </Button>
                                        }
                                    />
                                </Anchor>
                            </Col>
                        }
                    </Row>
                </Affix>
            </div>
            <Row className="share-btn">
                <Button onClick={showModal}>
                    <Icon type="share-alt"/>
                    <IntlMessages id="courseSingle.share.course"/>
                </Button>
            </Row>

            <Modal
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[

                    <Button key="submit" type="primary"  onClick={handleCancel}>
                        بازگشت
                    </Button>,
                ]}
                className="share"
            >
                <span>
                    <IntlMessages id="courseSingle.socialDetail.features.share" />
                </span>
                <img src="/static/images/whatsapp.png" onClick={() => shareSocial(`https://wa.me/?text=http://amoozal.com${ router.asPath}`)} />
                <img src="/static/icons/icon-telegram-colorish.svg" onClick={() => shareSocial(`https://telegram.me/share/url?url=http://amoozal.com${ router.asPath}`)} />
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Input.Group size="large">
                        <Row gutter={8}>
                            <Col span={19}>
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    {(process.browser) &&
                                        <Input value={window.location.href}  placeholder=" لینک اشتراک" />
                                    }
                                </Form.Item>

                            </Col>
                            <Col span={5}>
                                <Form.Item>
                                    <CopyToClipboard text={(process.browser) && window.location.href} onCopy={() => setCopied (true)}>
                                        <Button type="primary" htmlType="submit">
                                            کپی
                                        </Button>
                                    </CopyToClipboard>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Input.Group>
                </Form>
            </Modal>
        </Style>
    );
};
export default HeroMobile;
