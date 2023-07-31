import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${media.antDesktop`
        height: 100%;
    `}
    .filter-container {
        ${media.antDesktop`
            margin-top: 0;
            border-radius: 0;
            padding: 35px 33px 35px 33px;
        `}
         ${media.phone`
            text-align: right;
        `}
    }
    .btn-multiple-filter {
        display: none;
        background: ${palette.lightGreen};
        padding: 15px;
        border-radius: 0;
        span {
            font-size: 1.9rem !important;
            color: ${palette.white};
        }
        ${media.antDesktop`
            display: block;
        `}
    }
    .filter-list{
        padding: 0;
         margin-top: 24px;
        .filter-item {
            cursor: pointer;
            position: relative;
            margin-bottom: 15px;
            background-color: white;
            box-shadow: 0 2px 10px #dedddd, 0 0 5px #f7f7f7;
            border-radius: 10px;
            text-align: center;
            height: 45px;
            line-height: 45px;
            color: black;
            img {
                margin-left:10px;
                width:25px
            }
            i {
                opacity:0;
                font-size: 8px;
                font-weight: bold;
             }
            &:hover {
                font-weight: bold;
                transition: 0.8s ease;
                right: 10px;
                i {
                    opacity: 1;
                }
            }
        }
    }
    .active {
        font-weight: bold;
        border: 2px solid #04ddb0;
        color:  #04ddb0;
        background-color:#E8FCF8!important;
    }
`;
export default Style;
