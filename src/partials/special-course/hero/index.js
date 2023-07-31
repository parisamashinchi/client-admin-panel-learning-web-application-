import React, {useEffect, useState} from 'react';
import Style from './style';
import IntlMessages from 'utils/intlMessages';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import {Col, Row, Affix, Divider, Icon, Modal, Form, Input} from 'antd';
import basicStyle from 'theme/style';
import Button from 'components/uiElements/button';
import { getStore } from 'store';
import VideoPlayerModal from 'components/videoPlayerModal';
import Anchor, { Link } from 'components/uiElements/anchor';
import Countdown from 'react-countdown-now';
import PersianNumber from 'utils/getters/PersianNumber';
import {useRouter} from "next/router";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const openVideoModal = player_url => () => {
    getStore('ModalContainer').showModal(<VideoPlayerModal player_url={player_url} />, { closable: true, fullWidth:true });
};

const Hero = (data) => {
    const { rowStyle } = basicStyle;
    const { Link } = Anchor;
    const router = useRouter();

    const { header_title, header_descriptions , renewal_date,header_media, mobile_header_media, intro_video, original_price, price_with_discount, mp4_videos} = data.data;
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return (
                <div className="countdown">
                    <Row type="flex" style={rowStyle} gutter={24} className="gutter-pre-style-xs-24">
                        <h3>مهلت ثبت نام:</h3>
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
    const [visible, setVisible] = useState(false);
    const [social, setSocial] = useState('');
    const [copied, setCopied] = useState(false);
    const [innerWidth, setInnerWidth] = useState(null);
    useEffect(() => {
        setInnerWidth(global.window.innerWidth)
    }, []);
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
        <Style background={header_media}  mobileThumbnail={mobile_header_media}>
            <ResponsiveBox>
                <ResponsivePadding>
                            {innerWidth < '600'
                                ?
                                <Col span={24}>
                                    <div className="play-sign">
                                        <button onClick={openVideoModal(mp4_videos)}>
                                            <img src="/static/images/play-sign.png"/>
                                            <p><IntlMessages id="courseSingle.introduction.show.package"/></p>
                                        </button>
                                    </div>
                                </Col>
                                : <Row>
                                    <Col md={10} xl={10} xxl={13}  className="right-section">
                                        <h1 className="title">{header_title}</h1>
                                        <p className="description">{header_descriptions}</p>
                                        <Row>
                                            <Col span={1}>
                                                <Divider type="vertical" className="divider"/>
                                            </Col>
                                            <Col span={9}>
                                                <h3>
                                                    <IntlMessages id="courseSingle.introduction.package"/>
                                                    &nbsp;
                                                    <PersianNumber className="original-price">
                                                        {original_price}
                                                    </PersianNumber>

                                                    <PersianNumber className="discount-price">
                                                        {price_with_discount}
                                                    </PersianNumber>

                                                </h3>
                                            </Col>
                                            <Col span={2}>
                                                <span className="toman"> <IntlMessages id="courseSingle.payBoxCard.unit"/></span>
                                            </Col>
                                            {/*<Col span={1}>*/}
                                            {/*    <Divider type="vertical"/>*/}
                                            {/*</Col>*/}
                                        </Row>
                                        <Row>
                                            <Col span={16}>
                                                {renewal_date !== 'undefined' &&
                                                <Countdown date={Date.now() + renewal_date * 60 * 1000}
                                                           renderer={renderer}/>}
                                            </Col>
                                        </Row>
                                        <Row type="flex" gutter={24} className="gutter-pre-style-xs-24">
                                            <div className="buttons">
                                                <Col span={16}>
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
                                                <Col span={4}>
                                                    <Button className="share-btn" onClick={showModal}>
                                                        <Icon type="share-alt"/>
                                                    </Button>
                                                </Col>
                                            </div>
                                        </Row>
                                    </Col>
                                    <Col md={2} xl={2} xxl={1}>
                                        <div className="play-sign">
                                            <button onClick={openVideoModal(mp4_videos)}>
                                                <img src="/static/images/play-sign.png"/>
                                                <p className="hide"><IntlMessages id="courseSingle.introduction.show"/></p>
                                            </button>
                                        </div>
                                    </Col>
                                    <Col md={12} xl={12} xxl={10}>
                                        <div className="skew">
                                            <img src={header_media} />
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
