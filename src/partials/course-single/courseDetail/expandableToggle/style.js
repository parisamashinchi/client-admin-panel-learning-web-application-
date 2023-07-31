import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    .expandable-toggle {
        display: inline-flex;
        align-items: center;
        border-radius: 7px;
        padding: 6px 18px;
        cursor: pointer;
        ${({ active }) =>
            active
                ? `
     
        .expandable-title, .icon{
            color: ${palette.white};
            user-select: none;
        }
        `
                : `
        background: ${palette.lightGreyTwentyFourth};
        .expandable-title , .icon{
            color: ${palette.lightGreyTwentyFifth};
        }
        `};
        ${media.phone `
            .ant-divider-vertical {
                position: relative;
                top: 3.5em;
                display: inline-block;
                width: 2px;
                height: 3em;
                margin: 7px 8px;
                vertical-align: middle;
                right: -57px;
                margin-bottom: 35px;
            }
            padding:0 ;
        `}
         
        .expandable-title {
            margin-right: 10px;
            margin-top: 2px;
            font-size: 1.3rem;
            color: #5BC5C9;
             ${media.phone`
                font-weight: bold;
            `}
        }
        .icon {
            margin-left: 0;
            font-size: 1.9rem;
             color: #5BC5C9;
             ${media.phone`
                font-size: 1.5rem;
                color: white;
                background: #5BC5C9;
                padding: 4px;
                border-radius: 5px;
             `} 
        }
    }
    ${media.xxDesktop`
          .ant-divider {
               display:  none
           }
         `}
`;
export default Style;
