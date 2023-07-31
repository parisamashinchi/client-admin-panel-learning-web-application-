import React from 'react';
import Style from '../style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import { Col, Row } from 'antd';
import IntlMessages from 'utils/intlMessages';
import { formatMessage } from 'localization';

const SiteRules = () => {
    return (
        <Style>
            <ResponsiveBox>
                <ResponsivePadding>
                    <div className="fixed-background-1" />
                    <div className="fixed-background-2" />
                    <div className="fixed-background-3" />
                    <div className="fixed-background-4" />
                    <div className="who-we-are">
                        <div className="who-we-are-item">
                            <Row type="flex" className="gutter-pre-style-lg-50" gutter={{ lg: 50 }}>
                                <Col lg={24} xs={24} className="description">
                                    <h1 className="wea-item-title">
                                        <IntlMessages id="rules.title" />
                                    </h1>
                                    <p className="wea-item-description">
                                        <IntlMessages id="rules.description1" />
                                        <br/>
                                        <IntlMessages id="rules.description2" />
                                        <br/>
                                        <IntlMessages id="rules.description3" />
                                        <br/>
                                        <IntlMessages id="rules.description4" />
                                        <br/>
                                        <IntlMessages id="rules.description5" />
                                        <br/>
                                        <IntlMessages id="rules.description6" />
                                        <br/>
                                        <IntlMessages id="rules.description7" />
                                        <br/>
                                        <IntlMessages id="rules.description8" />
                                        <br/>
                                        <IntlMessages id="rules.description9" />
                                        <br/>
                                        <IntlMessages id="rules.description10" />
                                        <br/>
                                        <IntlMessages id="rules.description11" />
                                        <br/>
                                        <IntlMessages id="rules.description12" />
                                        <br/>
                                        <IntlMessages id="rules.description13" />
                                        <br/>
                                        <IntlMessages id="rules.description14" />

                                    </p>
                                </Col>

                            </Row>
                        </div>

                    </div>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default SiteRules;
