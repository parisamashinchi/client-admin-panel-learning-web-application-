import React from 'react';
import Style from './style';
import {Col, Card, Divider, Avatar} from "antd";
import PersianNumber from 'utils/getters/PersianNumber';
import IconPlay from 'static/icons/icon-play.svg';
import IntlMessages from 'utils/intlMessages';

const SampleCards = ({ data , teacher}) => {
    const {title, name, family, finished_at,name_image, media_url, media_url_mobile} = data;
    return (
        <Style>
           <img  className="banner-img" src={media_url} alt={name} />
            <div className="card-wrapper">
                <Card>
                    <Col lg={8}>
                        <Avatar size={64} src={name_image} />
                    </Col>
                     <Col lg={8}>
                        <h3>{name }&nbsp;{ family} </h3>
                     </Col>
                      <Col lg={8}>
                         <span>{title}</span>
                      </Col>
                </Card>
            </div>
        </Style>
    );
};
export default SampleCards;
