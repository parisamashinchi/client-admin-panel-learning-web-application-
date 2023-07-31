import React from 'react';
import Style from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import IntlMessages from 'utils/intlMessages';
import { Col, Row } from 'antd';
import map from 'lodash/map';
import { ourTeamData } from './constants';
import OurTeamItem from './ourTeamItem';

const OurTeam = (data) => {
    const renderFarm = () => {
        return map(data, item => {
            return (
                <Col lg={4} md={6} sm={8} xs={24}>
                    <OurTeamItem key={item.id} data={item} />
                </Col>
            );
        });
    };
    return (
        <Style>
            <ResponsiveBox>
                <ResponsivePadding>
                    <div className="our-team">
                        <div className="our-team-header">
                            <h1 className="our-team-title">
                                <IntlMessages id="aboutUs.ourTeam.title" />
                            </h1>
                            <p className="our-team-description">
                                <IntlMessages id="aboutUs.ourTeam.description" />
                            </p>
                        </div>
                        <div className="our-team-list">
                            <Row type="flex" className="gutter-pre-style-xs-16" gutter={16}>
                                {renderFarm()}
                            </Row>
                        </div>
                    </div>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default OurTeam;
