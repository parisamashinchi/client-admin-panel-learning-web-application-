import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery.js';

const Style = styled.div`
    width: 100%;
    padding: 0px 3px 6px 3px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .box-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 72px 0 25px;
        ${({ noHeader }) => (noHeader ? `display: none;` : ``)};
        .title {
            flex-shrink: 0;
            font-size: 2.3rem;
            font-weight: bold;
            margin: 0px;
        }
        .line {
            width: 100%;
            height: 1px;
            margin: 0 20px;
            background-color: ${palette.lightGrey};

            ${media.desktop`
                display: none;
            `}
        }
        .btn-more {
            flex-shrink: 0;
            width: 142px;
            border: 1px solid ${palette.lightGrey};
            border-radius: 12px;
            text-align: center;
            font-size: 1.3rem;
            font-weight: normal;
            margin-left: 0;
            color: ${palette.lightGreyTenth};
            transition: all 0.3s ease;
            &:hover{
                color: ${palette.black};
                border-color: ${palette.lightGreySenary};
                i {
                   left: -5%;
                }
            }
            ${media.desktop`
                border: none;
                border-bottom: 1px solid ${palette.lightGreySecondary};
                border-radius: 0;
                font-size: 1.4rem;
                width: auto;
                line-height: 2.5;
            `}
            i {
                font-size: .8rem;
                left: -40%;
                transition: all 1s ease;
            }
        }
    }
    .swiper-container,
    .swiper-wrapper {
        display: flex;
        flex-direction: row;
        .card-item-wrapper {
            width: 0px;
            height: auto;
            user-select: none;
            outline: 0;
        }
    }

    ${media.xDesktop`
        .box-header{
            margin: 40px 0;
        }
    `}
    ${media.tablet`
        .box-header{
            margin: 35px 0;
        }
    `}
    ${media.phone`
        .box-header{
            margin: 10px 0;
        }
    `}
    
`;
export default Style;
