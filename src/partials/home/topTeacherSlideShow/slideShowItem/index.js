import React, {useEffect, useState} from 'react';
import Style from './style';
import PropTypes from 'prop-types';
import textDots from 'utils/getters/textDots';
import {useRouter} from "next/router";
import {Col, Row} from"antd";

const SlideShowItem = ({ data }) => {
    const { teacher_profile, quote, mobile_teacher_profile, role, name } = data;
    return (
        <Style mobileThumbnail={mobile_teacher_profile}>
            {(process.browser) && global.window.innerWidth < '575'
                ?
                <div>
                    {/*<Row>*/}
                        <Col span={8}>
                            <div className="image-wrapper">
                                <img
                                    src={mobile_teacher_profile}
                                    alt={quote}
                                />
                            </div>
                        </Col>
                        <Col span={16}>
                            <h4>{name}</h4>
                            <h5>{role}</h5>
                        </Col>
                    {/*</Row>*/}
                    <Row>
                        <p className="description">{textDots(quote, 255)}</p>
                    </Row>
                </div>
                : <div>
                    <Col xl={10} xs={8}>
                        <div className="image-wrapper">
                                <img
                                    src={teacher_profile}
                                    alt={quote}
                                />
                        </div>
                    </Col>
                    <Col xl={12} xs={16}>
                        <h1>{name}</h1>
                        <h3>{role}</h3>
                        <p className="description">{textDots(quote, 255)}</p>
                    </Col>
                </div>
                }
        </Style>
    );
};
export default SlideShowItem;

SlideShowItem.propTypes = {
    data: PropTypes.object.isRequired,
};
