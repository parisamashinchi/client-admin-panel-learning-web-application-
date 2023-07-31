import Style from './style';
import { Col, Row } from 'antd';
import basicStyle from 'theme/style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import InjectMassage from "../../../../utils/intlMessages";
import isEmpty from 'lodash/isEmpty';

const { rowStyle } = basicStyle;

const Section = ({ data , path, more}) => {
    const {id, image, title, description, imageRight, hasShadow, titlePath, descriptionPath } = data;
    const [innerWidth, setInnerWidth] = useState(null);
    useEffect(() => {
        setInnerWidth(global.window.innerWidth)
    }, []);
    return (
        <Style imageRight={imageRight} hasShadow={hasShadow} path={path} id={id}>
            <ResponsiveBox style={{ height: '100%' }}>
                <ResponsivePadding>
                     <Row style={rowStyle}>
                            <Col className="image-container" lg={12} md={24} sm={24}>
                                <div
                                    className={image === '/static/images/achievement-img-3.png' ? "image-wrapper without" : "image-wrapper"}>
                                    <img src={image} alt={title}/>
                                </div>
                            </Col>
                            <Col className="detail-container" lg={12} md={24} sm={24}>
                                <div className="header">
                                    <h1 className="title">
                                        {!path
                                            ? title : titlePath
                                        }
                                    </h1>
                                    <span className="line"/>
                                </div>
                                <p className="description">
                                    {!path
                                        ? description : descriptionPath
                                    }
                                </p>
                                {!isEmpty(more) &&
                                    <a href={more}><InjectMassage id="promotionBox.showMore" /></a>
                                }
                            </Col>
                        </Row>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default Section;

Section.propTypes = {
    data: PropTypes.object.isRequired,
};
