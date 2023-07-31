import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    height: 100%;
    .ant-col-12{
        float: left;
    }
    .social {
        height: 100%;
        .social-images {
            position: relative;
            float:left;
            .social-image-item{
                &:first-child {
                    padding-left: 50px;
                }
                ${media.phone`
                    padding-left: 40px;
                `}
                img {
                    cursor: pointer;
                    transition: all 0.2s ease;
                    filter: grayscale(1);
                     width: 18px!important;
                     height: 18px!important;
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
        
        }
        .social-description {
            margin-right: 40px;
            color: ${palette.lightGreyFiftySeventh};
            font-size: 1.2rem;
            color: #BCBCBC;
            ${media.phone`
                margin-right: 40px;
            `}
        }
    }
`;
export default Style;
