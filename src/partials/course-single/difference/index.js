import React from 'react';
import Style from './style';
import { Card, Col} from 'antd';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import map from 'lodash/map';

const Difference = (data) => {
const { Meta } = Card;
const {header_title} = data.data
    return (
        <Style>
            <ResponsiveBox>
                <ResponsivePadding>
                    <div className="head">
                        <img src="/static/icons/ensamble-of-circles.png" />
                        <h3>  دوره {header_title} </h3>
                        <h2>چه تفاوتی با دیگر دوره ها داره؟</h2>
                    </div>
                    { map(data.data.properties, (item, index) => (
//                         index < 3 && (
                        <Col xl={8} xs={24}>
                           <Card
                               cover={<img src={item.banner_url}/>}
                               className="diff"
                             >
                               <Meta title={item.title}
                               description ={item.descriptions} />
                             </Card>
                        </Col>
//                         )
                        )
                         )
                    }
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default Difference;
