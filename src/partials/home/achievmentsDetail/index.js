import React, {useEffect, useState} from 'react';
import Style from './style';
import Section from './section';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import Swiper from 'components/swiper';
import {Col, Card} from 'antd';
import isEmpty from "lodash/isEmpty";
import InjectMassage from "../../../utils/intlMessages";

const AchievementsDetail = ({data,path, link}) => {
    const [innerWidth, setInnerWidth] = useState(null);
    useEffect(() => {
        setInnerWidth(global.window.innerWidth)
    }, []);
    const swiperParams = {
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: {
            990: { slidesPerView: 3 },
            700: { slidesPerView: 2 },
            480: { slidesPerView: 1.1 },
        },
    };
    const renderItem = (item, index) => {
        return <Card>
            <Col className="detail-container" lg={12} md={24} sm={24}>
                <div className="header">
                    <h1 className="title">
                        {!path
                            ? item.title : item.titlePath
                        }
                    </h1>
                    <span className="line"/>
                </div>
                <p className="description">
                    {!path
                        ? item.description : item.descriptionPath
                    }
                </p>
                { item.id === 2 && !isEmpty(link.B) &&
                    <a href={link.B}>
                       <InjectMassage id="promotionBox.showMore" />
                    </a>
                }
                { item.id === 3 && !isEmpty(link.C) &&
                    <a href={link.C}>
                        <InjectMassage id="promotionBox.showMore" />
                    </a>
                }
            </Col>
        </Card>
    };

    const renderFarm = () => {
        return  innerWidth < '600' && !path
            ?
            <Swiper data={data} renderItem={({item, index}) => renderItem(item, index)} itemClassName="card-item"
                    {...swiperParams}
            />
            :
            path
                ? <Section key={data[0].id} data={data[0]}  path={path} />
                : map(data, (item,index) => <Section key={item.id} data={item} path={path}
                                             more={
                                                 index === 0
                                                 ? link.A
                                                     : index === 1
                                                 ? link.B
                                                     :  index === 2
                                                 ? link.C
                                                         :  index === 3
                                                 ? link.D
                                                             :''
                                             }
                />)

    }
    return <Style path={path}>{renderFarm()}</Style>;
};
export default AchievementsDetail;

AchievementsDetail.propTypes = {
    data: PropTypes.object.isRequired,
};
