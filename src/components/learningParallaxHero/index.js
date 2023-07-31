import React, {Fragment, useEffect, useState} from 'react';
import {Col,Row} from 'antd';
import Style from './style';
import IntlMessages from 'utils/intlMessages';
import ResponsivePadding from '../uiElements/responsivePadding';
import ResponsiveBox from '../uiElements/responsiveBox';
import PropTypes from 'prop-types';
import { getStore } from 'store';
import VideoPlayerModal from 'components/videoPlayerModal';
import IconPlaySign from 'static/icons/play-sign.svg';
import isEmpty from "lodash/isEmpty"

const ParallaxHero = props => {
    const { children, data, size , path} = props;
    const { title, description, thumbnail, backgroundColor, thumbnail_mobile,hasButton, intro_video, header_media, mobile_header_media } = data;
    const openVideoModal = player_url => () => {
        getStore('ModalContainer').showModal(<VideoPlayerModal player_url={player_url} />, { closable: true, fullWidth:true });
    };
    const [innerWidth, setInnerWidth] = useState(null);
    useEffect(() => {
        setInnerWidth(global.window.innerWidth)
    }, []);
    return (
        <Style thumbnail={thumbnail} backgroundColor={backgroundColor} thumbnail_mobile={thumbnail_mobile} size={size}>
            <ResponsiveBox>
                {/*<ResponsivePadding>*/}
                    {/*<div className="hero">*/}
                        <Row>
                        <Col  xl={13} xs={24} className="intro-video">
                            <div>
                                {innerWidth < '600'
                                    ?
                                    <Col span={24}>
                                        {!isEmpty(intro_video)
                                            ? <div className="play-sign">
                                                <button onClick={openVideoModal(intro_video)}>
                                                    <img src="/static/images/play-sign.png"/>
                                                    <p><IntlMessages id="courseSingle.introduction.show.path"/></p>
                                                </button>
                                            </div>
                                            : <img src={mobile_header_media}/>
                                        }
                                    </Col>
                                    :
                                    <div>
                                        {!isEmpty(intro_video)
                                            ? <div className="play-sign">
                                                <button onClick={openVideoModal(intro_video)}>
                                                    <img src="/static/images/play-sign.png"/>
                                                    <p className="hide"><IntlMessages
                                                        id="courseSingle.introduction.show.path"/></p>
                                                </button>
                                            </div>
                                            : <img src={header_media}/>
                                        }
                                    </div>
                                }
                                {/*<p className="description">*/}
                                {/*    <IntlMessages id="courseSingle.introduction.show"/>*/}
                                {/*</p>*/}
                            </div>
                        </Col>
                        <Col  xl={11} xs={24} >
                            <h1 className="hero-title">{title}</h1>
                            {description ? <p className="hero-description">{description}</p> : <Fragment />}
                        </Col>
                        </Row>
                        {hasButton &&
                            <a className="btn-more-wrapper" target="_blank" href={'http://amoozal.com/' +'Amoozal_Proposal.pdf'} >
                                <div className="btn-more">
                                    <IntlMessages id="organization.hero.button"/>
                                </div>
                            </a>
                        }
                        {children ? <div className="children">{children}</div> : <Fragment />}
                    {/*</div>*/}
                {/*</ResponsivePadding>*/}
            </ResponsiveBox>
        </Style>
    );
};

ParallaxHero.propTypes = {
    data: PropTypes.object.isRequired,
    size: PropTypes.string,
};
export default ParallaxHero;
