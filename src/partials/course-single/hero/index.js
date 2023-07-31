import React, {useEffect, useState} from 'react';
import Style from './style';
import Button from 'components/uiElements/button';
import IntlMessages from 'utils/intlMessages';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import basicStyle from 'theme/style';
import { Col, Row, Affix, Anchor , Divider, Icon, Form, Input,Modal } from 'antd';
import Countdown from 'react-countdown-now';
import PersianNumber from 'utils/getters/PersianNumber';
import { getStore } from 'store';
import VideoPlayerModal from 'components/videoPlayerModal';
import { } from 'antd';
import {useRouter} from "next/router";
import map from 'lodash/map';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import isEmpty from 'lodash/isEmpty';

const { rowStyle } = basicStyle;

const Completionist = () => <span>جشنواره به پایان رسید!</span>;
const openVideoModal = player_url => () => {
    getStore('ModalContainer').showModal(<VideoPlayerModal player_url={player_url} />, { closable: true, fullWidth:true });
};

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist />;
    } else {
        return (
            <div className="countdown">
                <Row type="flex" style={rowStyle} gutter={24} className="gutter-pre-style-xs-24">
                    <p className="deadline">مهلت ثبت نام:</p>
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

const Hero = ({ data }) => {
    const { header_title, header_descriptions, header_media,meta_header_media, mobile_header_media,header_price,available_period_day, intro_video, renewal_date, course_sell_types ,properties, id} = data;
    const { Link } = Anchor;
    const [visible, setVisible] = useState(false);
    const [social, setSocial] = useState('');
    const [copied, setCopied] = useState(false);
    const [innerWidth, setInnerWidth] = useState(null);
    const router = useRouter();
    useEffect(() => {
        setInnerWidth(global.window.innerWidth)
    }, []);
    // const mobileButtonWrapperRef = useRef(null);
    // useEffect(() => {
    //     if (window) {
    //         window.addEventListener('scroll', onScrollChangeListener);
    //         return function() {
    //             window.removeEventListener('scroll', onScrollChangeListener);
    //         };
    //     }
    // });
    // const onScrollChangeListener = () => {
    //     if (mobileButtonWrapperRef !== null) {
    //         if (document.getElementById('mobile-buttons').getBoundingClientRect().top <= 50) {
    //             document.querySelector('#mobile-buttons').classList.add('fixed');
    //         } else if (document.getElementById('mobile-buttons').getBoundingClientRect().top > 50) {
    //             document.querySelector('#mobile-buttons').classList.remove('fixed');
    //         }
    //         console.log(document.getElementById('mobile-buttons').getBoundingClientRect().top);
    //     }
    // };
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
                    {innerWidth < '600'
                        ?
                        <Col span={24} >
                            <div className="play-sign">
                                <button onClick={openVideoModal(intro_video)}>
                                    <img src="/static/images/play-sign.png"/>
                                    <p><IntlMessages id="courseSingle.introduction.show"/></p>
                                </button>
                            </div>
                        </Col>
                        : <Row>
                            <Col md={10} xl={10} xxl={13} className="right-section">
                                <h1 className="title">{header_title}</h1>
                                <p className="description">{header_descriptions}</p>
                                {isEmpty(header_price) &&
                                    <Row>
                                        <Col span={1}>
                                            <Divider type="vertical" className="divider"/>
                                        </Col>
                                        <Col span={12}>
                                            <p className="price">
                                                <IntlMessages id="courseSingle.introduction.price"/>
                                                &nbsp;
                                                <PersianNumber>{header_price}</PersianNumber>
                                                <span className="toman">(<IntlMessages id="courseSingle.payBoxCard.unit"/>)</span>
                                            </p>
                                        </Col>
                                        {/*<Col span={1}>*/}
                                        {/*    <Divider type="vertical"/>*/}
                                        {/*</Col>*/}
                                    </Row>
                                }
{/*                                 <Row> */}
{/*                                     <Col span={16}> */}
{/*                                         {renewal_date !== 'undefined' && */}
{/*                                         <Countdown date={Date.now() + renewal_date * 60 * 1000} renderer={renderer}/>} */}
{/*                                     </Col> */}
{/*                                 </Row> */}
                                <Row type="flex" gutter={24} className="gutter-pre-style-xs-24">
                                    <div className="buttons">
                                        <Col span={10}>
                                            <Anchor>
                                                <Link
                                                    href="#price-box"
                                                    title={
                                                        <Button className="course-register-button" size="large">
                                                            <img src="/static/icons/arrowLeft.png" />
                                                            <span className="title"><IntlMessages id="button.register"/></span>
                                                        </Button>
                                                    }
                                                />
                                            </Anchor>
                                        </Col>
                                        <Col span={10}>
                                            <Anchor affix={false} offsetTop={50}>
                                                <Link
                                                    href="#course-title"
                                                    title={
                                                        <Button className="course-title-button" size="large">
                                                            <img src="/static/icons/arrowleftWhite.png" />
                                                            <span className="title"> <IntlMessages id="courseSingle.introduction.courseTitle"/></span>
                                                        </Button>
                                                    }
                                                />
                                            </Anchor>
                                        </Col>
                                        <Col span={4}>
                                            <Button className="share-btn" onClick={showModal}>
                                                <Icon type="share-alt"/>
                                            </Button>
                                        </Col>
                                    </div>
                                </Row>
                                <Col span={20}>
                                    <Divider/>
                                    <Row>
                                        {map(properties, item =>
                                            <Col span={6} className="property">
                                                <Col span={8}>
                                                    <img src={item.media_url} alt={item.title} width="30"/>
                                                </Col>
                                                <Col span={16}>
                                                    <p>{item.title}</p>
                                                </Col>
                                            </Col>
                                        )
                                        }
                                    </Row>
                                </Col>
                            </Col>
                            <Col md={2} xl={2} xxl={1}>
                                <div className="play-sign">
                                    <button onClick={openVideoModal(intro_video)}>
                                        <img src="/static/images/play-sign.png"/>
                                        <p className="hide"><IntlMessages id="courseSingle.introduction.show"/></p>
                                    </button>
                                </div>
                            </Col>
                            <Col md={12} xl={12} xxl={10}>
                                <div className="skew">
                                    <img src={header_media}  alt={id === 13 ? "فیلم معرفی دوره آموزش طراحی فیگور" : meta_header_media}/>
                                </div>
                            </Col>
                        </Row>
                    }
                </ResponsivePadding>
            </ResponsiveBox>
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
                                    <CopyToClipboard text={ (process.browser) && window.location.href} onCopy={() => setCopied (true)}>
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
export default Hero;
