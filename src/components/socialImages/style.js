import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    height: 100%;
    display: flex;
    .social {
        display: flex;
        height: 100%;
        align-items: center;
        .social-images {
            display: inline-flex;
            position: relative;
            align-items: center;
            .social-image-item {
                padding-left: 50px;
                ${media.phone`
                    padding-left: 40px;
                `}
                img {
                    cursor: pointer;
                    transition: all 0.2s ease;
                    filter: grayscale(1);
                    &:hover {
                        filter: grayscale(0);
                    }
                    svg {
                        fill: ${palette.lightGreyFiftySeventh};
                        width: 24px;
                        height: 24px;
                    }
                }
            }
            &:after {
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                width: 2px;
                height: 18px;
                background: ${palette.lightGreySixteenth};
                transform: translateY(-50%);
            }
        }
        .social-description {
            margin-right: 50px;
            color: ${palette.lightGreyFiftySeventh};
            font-size: 1.2rem;
            align-self: center;
            ${media.phone`
                margin-right: 40px;
            `}
        }
    }
`;
export default Style;
