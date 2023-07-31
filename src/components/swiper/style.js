import styled from 'styled-components';
import media from 'theme/MediaQuery';

const Style = styled.div`
    transition: margin 0.1s ease;
    &.add-margin {
        margin-left: 27px;
        margin-right: -27px;
         ${media.phone`
            margin-left: 0;
            margin-right: 0;
         `}
    }
    .swiper-container {
        overflow: hidden;
        text-align: center;
        &.loaded {
            .swiper-slide {
                overflow: visible !important;
                padding: 0 5px;
            }
        }
        .swiper-wrapper {
            display: inline-flex;
            text-align: right;
            .swiper-slide {
                overflow: hidden;
                // width: 0;
                ${media.antDesktop`
                    &:first-child {
                        margin-right: ${({ noMargin }) => (!noMargin ? '27px' : '0')};
                        &.no-margin {
                            margin-right: 0;
                        }
                    }
                `}
                 ${media.phone`
                    &:first-child {
                        margin-right: 0;
                    }
                `}
                &:last-child {
                    margin-left: 0 !important;
                }
            }
        }
        .swiper-button {
            opacity: 1;
            visibility: visible;
            transition: all 0.2s ease;
            &.swiper-button-disabled {
                opacity: 0;
                visibility: hidden;
            }
        }
    }
`;
export default Style;
