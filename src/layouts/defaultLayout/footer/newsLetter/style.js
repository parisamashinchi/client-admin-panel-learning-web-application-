import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery.js';

const Style = styled.div`
    .form-item-wrapper {
        display: flex;
        width: 100%;
        margin: 0 auto;
        .news-letter-input-wrapper {
            width: 100%;
            .news-letter-input {
                height: 55px;
                background-color: ${palette.white};
                border: none;
                text-align: center;
                direction: ltr;
                &::placeholder {
                    ${media.xDesktop`
                        font-size: 1.5rem; ;
                    `}
                    ${media.desktop`
                        font-size: 1.2rem;
                    `}
                    ${media.antDesktop`
                        font-size: 1.6rem;
                    `}
                }
            }
            .ant-form-explain {
                margin-top: 10px;
            }
        }
        .news-letter-submit-btn {
            flex-shrink: 0;
            background-color: ${palette.lightGreen};
            color: ${palette.white};
            font-weight: bold;
            text-align: center;
            border: none;
            border-radius: 0;
            &:hover {
                box-shadow: 0 0 10px ${palette.lightGreen};
                span{
                    color: ${palette.white};
                }
            }
            ${media.xDesktop`
                padding-right: 0;
                padding-left: 0;
                width: 60px;    
            `}
            ${media.antDesktop`
                width: 122px;
            `}
        }
    }
    ${media.phone`
        .form-item-wrapper{
            width:100%;
        }
    `}
`;
export default Style;
