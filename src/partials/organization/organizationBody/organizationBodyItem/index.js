import React from 'react';
import Style from './style';
import { Col, Row } from 'antd';
import basicStyle from 'theme/style';
import PropTypes from 'prop-types';

const OrganizationBodyItem = ({ data }) => {
    const { title, imageUrl, description, imageLeft, backgroundUrl } = data;
    const { rowStyleNoWidth } = basicStyle;
    return (
        <Style imageLeft={imageLeft} backgroundUrl={backgroundUrl}>
            <div className="organization-item-fixed-background" />
            <div className="organization-body-item">
                <Row type="flex" style={rowStyleNoWidth} gutter={{ lg: 0, sm: 30 }} className="gutter-pre-style-sm-30">
                    <Col md={14} xs={24} className="description">
                        <div className="organization-description">
                            <h1 className="item-title">{title}</h1>
                            <p className="item-description">{description}</p>
                        </div>
                    </Col>
                    <Col md={10} xs={24} className="image">
                        <div className="organization-image">
                            <img src={imageUrl} alt={title} />
                        </div>
                    </Col>
                </Row>
            </div>
        </Style>
    );
};
export default OrganizationBodyItem;

OrganizationBodyItem.propTypes = {
    data: PropTypes.object.isRequired,
};
