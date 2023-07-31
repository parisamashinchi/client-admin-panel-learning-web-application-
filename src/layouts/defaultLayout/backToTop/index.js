import React, { useEffect } from 'react';
import Style from './style';
import { BackTop } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const BackToTop = () => {
    useEffect(() => {
        window.onscroll = function(ev) {
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
                document.querySelector('#back-to-top').classList.add('bottom-of-page');
            } else {
                document.querySelector('#back-to-top').classList.remove('bottom-of-page');
            }
        };
    });

    return (
        <Style id="back-to-top">
            <BackTop>
                <FontAwesomeIcon icon={faChevronUp} />
            </BackTop>
        </Style>
    );
};
export default BackToTop;
