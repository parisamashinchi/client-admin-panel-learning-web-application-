import React from 'react';
import {Row, Col, Tabs} from 'antd';
import Album from './album';
import Style from "./style";
import isEmpty from "lodash/isEmpty";
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import HeaderLink from 'components/headerLink';

const { TabPane } = Tabs;
const AlbumBox = ({ data }) => {
    function renderMobile() {
        return data.map((album, index) => {
            return (
                album.models[0].type !== 'PACKAGE' &&
                <TabPane tab={album.title} key={index}>
                    <Album data={album}/>
                </TabPane>
            )
        });
    }
    function renderFarm() {
        return data.map((album, index) => {
            const {id} = album;
            return (
                <div>
                    <ResponsiveBox>
                        <Row type="flex">
                            <Col span={24}>
                                {album.models[0].type !== 'PACKAGE' &&
                                <ResponsivePadding>
                                    <HeaderLink title={album.title}
                                                link={isEmpty(album.url) ? 'course-list/all' : album.url}/>
                                </ResponsivePadding>
                                }
                            </Col>
                        </Row>
                    </ResponsiveBox>
                    <Col key={id} span={24} className={index === 0 ? 'gray-back' : ''}>
                        {album.models[0].type !== 'PACKAGE' &&
                        <Album data={album}/>
                        }
                    </Col>
                </div>
            );
        });
    }




return <Style>
    {(process.browser) && global.window.innerWidth < '575'
            ? <Row>
                <Tabs defaultActiveKey="0" >
                    {renderMobile()}
                </Tabs>
              </Row>
            : <Row>{renderFarm()}</Row>
    }
    </Style>

};
export default AlbumBox;
