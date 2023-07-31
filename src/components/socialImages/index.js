import React from 'react';
import Style from './style';
import IntlMessages from 'utils/intlMessages';
import Link from 'next/link';
import { formatMessage } from 'localization';
import { useRouter } from 'next/router'

const SocialImages = () => {
    const router = useRouter()
    return (
        <Style>
            <div className="social">
                <div className="social-images">
                    <Link href="#" target="_blank">
                        <a  href={`https://wa.me/?text=http://amoozal.com${ router.asPath}`}
                            className="social-image-item"
                            target="_blank"
                            data-action="share/whatsapp/share"
                        >
                            <img
                                src="/static/icons/icon-whatsapp-colorish.png"
                                style={{ width: 24, height: 24 }}
                                alt={formatMessage('socialImages.whatsAppIcon.alt')}
                            />
                        </a>
                    </Link>
                    <Link href="#" >
                        {/*<a  href="https://t.me/amoozal" */}
                        <a  href={`https://telegram.me/share/url?url=http://amoozal.com${ router.asPath}`}
                            className="social-image-item"
                            target="_blank">
                            <img
                                src="/static/icons/icon-telegram-colorish.svg"
                                style={{ width: 24, height: 24 }}
                                alt={formatMessage('socialImages.telegramIcon.alt')}
                            />
                        </a>
                    </Link>
                </div>
                <div className="social-description">
                    <IntlMessages id="courseSingle.socialDetail.socialDescription" />
                </div>
            </div>
        </Style>
    );
};
export default SocialImages;
