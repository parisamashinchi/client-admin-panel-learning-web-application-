import React, {useState} from 'react';
import Style from './style';
import Link from 'next/link';
import { formatMessage } from 'localization';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import {Col, Form, message, Row} from "antd";
import Input from 'components/uiElements/textInput';
import Button from 'components/uiElements/button';
import * as constants from 'partials/learning-path/constants';
import { postRequest } from 'utils/api';
import VideoPlayerModal from 'components/videoPlayerModal';

const PromotionBox = ({data = [], medium, white, id,path} ) => {
    const { media_url, title, descriptions, buttonTitle = formatMessage('promotionBox.showMore'), link_url, mobile_media_url ,mp4_videos} = data[0];
    const [number, setNumber] = useState(0);
    const [sent, setSent] = useState(false);
    const handleChange = value => {
        setNumber(value);
    };
    const handleSubmit = () => {
        (async () => {
            const body = JSON.stringify({
                "mobile_number":  number,
                "learning_path_id": id,
            });
            try {
              await postRequest(`${constants.LEARNING_PATH_CONTACT_URL}`, body);
                message.success('شماره شما ارسال شد.');
                setSent(true);
            } catch (e) {
                await console.error(e);
            }
        })();
    };
    return (
        <Style image={media_url} medium={medium} white={white}  mobileThumbnail={mobile_media_url} path={path}>
            <ResponsivePadding className="promotion-wrapper">
                {!path && <video src={mp4_videos[0].link} autoPlay loop playsInline muted />}
                <div className="content">
                <img src="/static/icons/architecture.svg" className="icon" />
                    {path ? '' :<h1 className="title">{title}</h1>}
                    {path
                        ? <h6 className="description">{descriptions}</h6>
                        : <h6 className="description">{descriptions}</h6>
                    }
                </div>
            </ResponsivePadding>
            {path &&
            <Form>
                <Row type="flex">
                    <Form.Item>
                        <Input className="input"
                               placeholder={formatMessage('promotionBox.input')}
                               onChange={handleChange}
                               disabled = {sent && 'disabled'}
                        />
                    </Form.Item>
                </Row>
                <Row>
                <Form.Item>
                    <Button className="btn-more" onClick={handleSubmit}   disabled = {sent && 'disabled'}>
                        {sent ? 'ثبت شد': buttonTitle}
                    </Button>
                </Form.Item>
                </Row>
            </Form>
            }
            {!path &&
                    !isEmpty(link_url) &&
                    <a  href={link_url} className="btn-more">{buttonTitle}</a>
            }
        </Style>
     );
};

PromotionBox.propTypes = {
    data: PropTypes.array.isRequired,
    medium: PropTypes.bool,
    white: PropTypes.bool,
};
export default PromotionBox;
