import React, {useEffect, useState} from 'react';
import Style from './style';
import IntlMessages from 'utils/intlMessages';
import Link from 'next/link';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import PropTypes from 'prop-types';
import isEmpty from "lodash/isEmpty";

const SlideShowItem = ({ data, move }) => {
    const { title, descriptions, link_url, media_url, logo_media ,logo_position ,mobile_media_url,button_text, button_background_color,button_color } = data;
    const btnStyle = {
        color: button_color,
        backgroundColor: button_background_color,
    };
    const logoStyle = {
        textAlign:logo_position
    }
    const [innerWidth, setInnerWidth] = useState(null);
    useEffect(() => {
        setInnerWidth(global.window.innerWidth)
    }, []);
    return (
     <a href={link_url}  >
        <Style thumbnail={media_url} mobileThumbnail={mobile_media_url}>
{/*             <ResponsivePadding style={logoStyle} > */}
{/*                 {innerWidth > '600' */}
{/*                     ? logo_position !== 'center' && !isEmpty(logo_media) && <img src={logo_media} alt={title} /> */}
{/*                     : '' */}
{/*                 } */}
{/*                 <div className={move && innerWidth > '600' ? 'detail-container move' : 'detail-container'}> */}
{/*                     <h1 className="title">{title}</h1> */}
{/*                     <p className="description">{descriptions}</p> */}
{/*                     {innerWidth > '600' */}
{/*                         ? logo_position === 'center' && !isEmpty(logo_media) && <img src={logo_media} alt={title} /> */}
{/*                         : !isEmpty(logo_media) && <img src={logo_media} alt={title} /> */}
{/*                     } */}

{/*                     {!isEmpty(link_url) && */}
{/*                             <a className="btn-more-wrapper" title={title} href={link_url}  > */}
{/*                                 <div className="btn-more" style={btnStyle}> */}
{/*                                     {button_text} */}
{/*                                 </div> */}
{/*                             </a> */}
{/*                     } */}

{/*                 </div> */}
{/*             </ResponsivePadding> */}
        </Style>
        </a>
    );
};
SlideShowItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default SlideShowItem;
