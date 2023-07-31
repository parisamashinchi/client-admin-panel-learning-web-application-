import {Col} from "antd";
import Style from "./style";
import React from "react";
import map from 'lodash/map';

const SlideBoxes = ({ data }) => {

    const renderItem = item => {
            return (
              <Style thumbnail={item.media_url}>
{/*                 <div className="card"> */}
{/*                     <a href={item.url}> */}
{/*                         {(process.browser) && global.window.innerWidth < '575' */}
{/*                             ? <img src={item.mobile_media_url}/> */}
{/*                             : <img src={item.media_url}/> */}
{/*                         } */}
{/*                     </a> */}
{/*                 </div> */}
                </Style>
            );
    };
    return (
        <Style>
             <div className="items">
                 <Col xl={12} xs={12}>
                     { map(data, (item, index) => {
                         if(index < 2)
                         return (
                            renderItem(item)
                         )
                    })}
                </Col>
                <Col xl={12} xs={12}>
                    { map(data, (item, index) => {
                        if(index > 1)
                            return (
                                renderItem(item)
                            )
                    })}
                </Col>
            </div>
        </Style>
    )
}
export default SlideBoxes;
