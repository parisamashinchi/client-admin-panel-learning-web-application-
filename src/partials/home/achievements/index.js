import { useState } from 'react';
import Style from './style';
import { Col, Icon, Row } from 'antd';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import React from 'react';
import IntlMessages from 'utils/intlMessages';
import Swiper from 'components/swiper';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { Collapse } from 'antd';

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Achievements = ({ data }) => {
    const [ShowCurrentAchievement, setShowCurrentAchievement] = useState(0);
    const swiperParams = {
        slidesPerView: 4,
        rtl: true,
        breakpoints: {
            1000: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1,
            },
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        renderPrevButton: () => (
            <div className="swiper-button next">
                <Icon type="left" />
            </div>
        ),
        renderNextButton: () => (
            <div className="swiper-button prev">
                <Icon type="right" />
            </div>
        ),
    };
    const zoomAchievement = (index) => {
       setShowCurrentAchievement(index)
    }
    const renderItem = () => {
        return map(data, (item , index)=> {
            return (
                <Panel header={  <IntlMessages id={item.title} />} key={item.id} showArrow={false}>
                    <Col span={20}>
                    <p>فراگیرانی که بتوانند با انجام تمرین‌‌ها و پروژه‌ها و پشت
                        سر گذاشتن آزمون‌ها نمره قبولی دوره را کسب کنند، واجد
                        شرایط دریافت گواهینامه دانشگاه صنعتی امیرکبیر خواهند بود. گواهینامه به صورت
                        انگلیسی صادر خواهد شد و قابل
                        اعتبار‌سنجی به صورت آنلاین در سایت دانشگاه امیرکبیر است.</p>
                    </Col>
                    <Col span={4}>
                        <img src={`/static/icons/${item.image}`} alt={item.title} />
                    </Col>
                </Panel>
                )
        })
    };

    const renderFarm = () => {
        return map(data, (item , index)=> {
            return (
                index === ShowCurrentAchievement
                ?  <Col span={12}>
                        <a onClick={() => zoomAchievement(index)}>
                            <div className="achievement-item selected">
                                <Col span={4}>
                                    <img src={`/static/icons/${item.image}`} alt={item.title} />
                                </Col>
                                <Col span={20}>
                                    <h6 className="title">
                                        <IntlMessages id={item.title} />
                                    </h6>
                                    <p className="description">فراگیرانی که بتوانند با انجام تمرین‌‌ها و پروژه‌ها و پشت
                                            سر گذاشتن آزمون‌ها نمره قبولی دوره را کسب کنند، واجد
                                            شرایط دریافت گواهینامه دانشگاه صنعتی امیرکبیر خواهند بود. گواهینامه به صورت
                                            انگلیسی صادر خواهد شد و قابل
                                            اعتبار‌سنجی به صورت آنلاین در سایت دانشگاه امیرکبیر است.
                                    </p>
                                </Col>
                            </div>
                        </a>
                    </Col>
                : <Col span={4}>
                    <a onClick={() => zoomAchievement(index)}>
                        <div className="achievement-item">
                            <i className="icon">
                                <img src={`/static/icons/${item.image}`} alt={item.title} />
                            </i>
                            <h6 className="title">
                                <IntlMessages id={item.title} />
                            </h6>
                        </div>
                    </a>
                </Col>
            );
        });
    };

    return (
        <Style>
            <ResponsiveBox style={{ height: '100%' , width:'100%'}}>
                <Row type="flex">
                    <Col span={24} className="desktop-achievement-container">
                        {renderFarm()}
                    </Col>
                    <Col span={24} className="responsive-achievement-container">
                         <Collapse accordion ghost  bordered={false}  defaultActiveKey={['1']} >
                            {renderItem()}
                         </Collapse>
                        {/*<Swiper noMargin data={data} renderItem={({ item }) => renderItem(item)} itemClassName="achievement-item-wrapper" {...swiperParams} />*/}
                    </Col>
                </Row>
            </ResponsiveBox>
        </Style>
    );
};
export default Achievements;

Achievements.propTypes = {
    data: PropTypes.object.isRequired,
};
