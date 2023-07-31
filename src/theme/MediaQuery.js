import {css} from 'styled-components';

const sizes = {
    xxxDesktop: 2000,
    xxDesktop: 1600,
    xDesktop: 1320,
    desktop: 1000,
    antDesktop: 991,
    smallAntDesktop: 955,
    tablet: 768,
    smallTablet: 600,
    bigPhone: 575,
    phone: 480,
    smallPhone: 400,
};

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)};
        }
    `;
    return acc;
}, {});

export default media;
