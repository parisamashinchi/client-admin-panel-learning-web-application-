import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';


const Style = styled.div`
    &.bottom-of-page {
        .ant-back-top {
            bottom: 100px;
        }
    }
    .ant-back-top {
        width: 45px;
        height: 45px;
        background: ${palette.white};
        text-align: center;
        position: fixed;
        right: 95%;
        bottom: 30px;
        z-index: 100;
        font-size: 1.4rem;
        line-height: 50px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: bottom 0.1s ease;
         ${media.phone`
           right: 80%;
        `}
        svg {
            width: 15px;
            height: 15px;
            transition: all 0.4s ease;
        }
        &:hover {
            svg {
                transform: scale(1.5);
            }
        }
    }
`;
export default Style;
