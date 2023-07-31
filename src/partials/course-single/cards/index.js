import React from 'react';
import Style from './style';
import { Card, Col} from 'antd';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';

const Cards = (data) => {
const { Meta } = Card;
    return (
        <Style>
            <ResponsiveBox>
                <ResponsivePadding>
                     { map(data.data.question_boxes, (item , index)=> (
                        index < 3 && (
                        <Col xs={24} xl={8}>
                           <Card
                               hoverable
                               cover={<img src={ !isEmpty(global.window) && global.window.innerWidth < 575 ? item.mobile_media_url : item.media_url} />}
                             >
                               <Meta title={item.title}
                               description= {item.descriptions}
                               />
                               </Card>
                        </Col>
                         )))
                    }

                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default Cards;
