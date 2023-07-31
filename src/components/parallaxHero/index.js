import React, { Fragment } from 'react';
import Style from './style';
import IntlMessages from 'utils/intlMessages';
import ResponsivePadding from '../uiElements/responsivePadding';
import ResponsiveBox from '../uiElements/responsiveBox';
import PropTypes from 'prop-types';
import { getStore } from 'store';
import VideoPlayerModal from 'components/videoPlayerModal';
import IconPlaySign from 'static/icons/play-sign.svg';
import isEmpty from 'lodash/isEmpty';

const ParallaxHero = (props) => {
    const { children, data, size , path, back} = props;
    const {  description, thumbnail, backgroundColor, thumbnail_mobile,hasButton, intro_video, title } = data;
    // if(!isEmpty(back)){
    //     const {media_url, mobile_media_url, title} = back;
    // }
    const openVideoModal = player_url => () => {
        getStore('ModalContainer').showModal(<VideoPlayerModal player_url={player_url} />, { closable: true, fullWidth:true });
    };
    return (
        <Style thumbnail={!isEmpty(back) ? back.media_url : thumbnail}
               backgroundColor={backgroundColor}
               thumbnail_mobile={!isEmpty(back) ? back.mobile_media_url : thumbnail_mobile}
               size={size}>
            <ResponsiveBox>
                <ResponsivePadding>
                    <div className="hero">
                        <h1 className="hero-title">{!isEmpty(back) ? back.title : title}</h1>
                        {description ? <p className="hero-description">{description}</p> : <Fragment />}
                        { path &&
                            <div>
                                <div className="play-sign">
                                    <button onClick={openVideoModal(intro_video)}>
                                        <IconPlaySign/>
                                    </button>
                                </div>
                                <p className="description">
                                    <IntlMessages id="courseSingle.introduction.show"/>
                                </p>
                            </div>
                        }
                        {hasButton &&
                            <a className="btn-more-wrapper" target="_blank" href={'http://amoozal.com/' +'Amoozal_Proposal.pdf'} >
                                <div className="btn-more">
                                    <IntlMessages id="organization.hero.button"/>
                                </div>
                            </a>
                        }
                        {children ? <div className="children">{children}</div> : <Fragment />}
                    </div>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};

ParallaxHero.propTypes = {
    data: PropTypes.object.isRequired,
    size: PropTypes.string,
};
export default ParallaxHero;
