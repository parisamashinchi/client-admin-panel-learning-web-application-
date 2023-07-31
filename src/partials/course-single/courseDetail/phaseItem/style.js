import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    position: relative;
    .phase-item-wrapper {
        ${({ unlocked }) => (unlocked ? 'opacity: 1' : 'opacity: 0.5')};
        .phase-item-title {
            font-size: 1.9rem;
            font-family: Samim;
            color: ${palette.darkGreyTertiary};
            margin-bottom: 5px;
            ${media.phone`
                margin-right: 42px;
            `}  
            span {
                 ${media.antDesktop`
                   &:before {
                        content: '';
                        width: 10px;
                        height: 10px;
                        position: absolute;
                        margin-left: 5px;
                        top: 13px;
                        transform: translateY(-50%);
                        border-radius: 100%;
                        background: ${palette.darkGreenSecond};
                        z-index: 1;
                         ${media.tablet`
                             right: -34px;
                        `} 
                         ${media.phone`
                             margin-right: -15px;
                        `} 
                    }
                `}  
            }  
        }
        .phase-item-description {
            color: ${palette.lightGreyTwentyNinth};
            margin-bottom: 15px;
            ${media.antDesktop`
                margin-bottom: 23px;
            `}
              ${media.phone`
                margin-bottom: 0;
              `}
        }
        .topics {
            margin-top: 20px;
        }  
    }
    
    &:not(:last-child) {
        &:after {
            content: '';
            position: absolute;
            height: 100%;
            width: 2px;
            background: ${palette.lightGreyThirtieth};
            top: 15px;
            right: -30px;
            ${media.phone`
               display:  none
         `}
        }
    }
    &:before {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        right: -34px;
        top: 13px;
        transform: translateY(-50%);
        border-radius: 100%;
        background: ${palette.darkGreenSecond};
        z-index: 1;
         ${media.antDesktop`
               display:none;
         `}
    }
`;

export default Style;
