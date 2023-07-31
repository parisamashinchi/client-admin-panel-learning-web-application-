import React from 'react';
import { Col, Row } from 'antd';
import basicStyle from 'theme/style';
import Style from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import PropTypes from 'prop-types';

const { rowStyleNoWidth } = basicStyle;

const TwoColumnDetail = ({ data }) => {
    const { content_media, mobile_content_media, content_title, content_descriptions } = data;
    return (
        <Style>
            <ResponsiveBox>
                <div className="two-column-detail">
                    <Row style={rowStyleNoWidth} gutter={{ lg: 40 }}>
                      <div className="fixed-background" />
                        <Col lg={12} xl={10} xs={24} className="image">
                            {(process.browser) &&
                            <img src={global.window.innerWidth < '575' ? mobile_content_media : content_media}
                                 alt={content_title}/>
                            }
                        </Col>
                        <Col lg={12} xl={14} xs={24} className="content">
                            <h1 className="title">{content_title}</h1>
                            <p className="description">{content_descriptions}</p>
                        </Col>
                    </Row>
                </div>
            </ResponsiveBox>
        </Style>
    );
};
TwoColumnDetail.propTypes = {
    data: PropTypes.bool.isRequired,
};
export default TwoColumnDetail;
