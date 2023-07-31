import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    display: inline-block;
    ${media.bigPhone`
        width:100%;
    `}
    .search-input {
        position: relative;
        .hero-search-input {
            color: ${palette.white};
            background: ${palette.whiteThird};
            height: auto;
            border: 1px solid ${palette.lightGrey};
            border-radius: 6px;
            margin: 0 auto;
            padding: 18px 20px 18px 45px;
            width: 620px;
            direction: ltr;
            text-align: right;
            ${media.tablet`
                width: 500px;
            `}
            ${media.bigPhone`
                width:100%;
            `}
            &::placeholder {
                font-size: 1.7rem;
                color: ${palette.white};
            }
            &:hover {
                border-color: unset;
            }
        }
        .search-icon {
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            height: 100%;
            background: none;
            border: none;
            outline: none;
            display: flex;
            align-items: center;
            cursor: pointer;
            padding-left: 19px;
            svg {
                width: 15px;
                height: 15px;
            }
        }
    }
`;
export default Style;
