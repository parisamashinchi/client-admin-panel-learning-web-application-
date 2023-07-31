import React from 'react';
import Style from './style';
import textDots from 'utils/getters/textDots';
import PropTypes from 'prop-types';
import {Col} from "antd";

const OurTeamItem = ({ data }) => {
    const {name, role, media_url,mobile_media_url } = data[0];
    return (
        <Style>
            <div className="our-team-item">
                <div className="team-image">
                    {(process.browser) && global.window.innerWidth > '575'
                        ? <img src={media_url} alt={name}/>
                        : <img src={mobile_media_url} alt={name}/>
                    }
                </div>
                <div className="our-team-content">
                    <h3 className="team-title">{name}</h3>
                    <div className="team-subtitle">{role}</div>
                    {/*<div className="team-description">{textDots(description, 97)}</div>*/}
                </div>
            </div>
        </Style>
    );
};
export default OurTeamItem;

OurTeamItem.propTypes = {
    data: PropTypes.object.isRequired,
};
