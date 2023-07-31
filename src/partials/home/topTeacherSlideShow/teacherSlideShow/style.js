import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery.js';

const Style = styled.div`
    margin: 0;
    padding: 0;
    background-color: transparent;
    overflow: hidden;
    height: 100%;
    width: 100%;
    .btn {
        position: absolute;
        width: 50px;
        height: 50px;
        padding: 10px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        border: 0;
        background: ${palette.white};
        outline: 0;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.5s;
        cursor: pointer;
        svg {
            display: none;
        }
        &::after {
            position: absolute;
            top: 50%;
            left: 50%;
            font-size: 0.9rem;
            transform: translate(-50%, -50%);
            font-family: FontAwesomeSolid;
            color: ${palette.greyPrimary};
            transition: color 0.3s;
        }
        &:hover {
            &::after {
                color: ${palette.black};
            }
        }
        &.next {
            top: 50%;
            transform: translateY(-50%);
            left: 20px;
            &::after {
                content: '\f053';
            }
        }
        &.prev {
            top: 50%;
            transform: translateY(-50%);
            right: 20px;
            &::after {
                content: '\f054';
            }
        }
    }
    .swiper-container,
    .swiper-wrapper {
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: row;
         ${media.tablet`
            margin-top:20px;
        `}
        .swiper-item-wrapper {
            height: 100%;
            width: 0px;
            overflow: hidden;
        }
        &:hover {
            .btn {
                opacity: 1;
                pointer-events: auto;
            }
        }
    }
     .swiper-pagination {
        display: flex;
        position: absolute;
        left: 192px;
        bottom: 40px;
        ${media.bigPhone`
            bottom: 15px;
        `}
        .swiper-pagination-bullet {
            display: block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-right: 16px;
            background-color: ${palette.lightGreyQuinary} !important;
            cursor: pointer;
             ${media.bigPhone`
               width: 10px;
               height: 10px;
               margin-right: 10px;
            `}
        }
        .swiper-pagination-bullet-active {
            background-color: ${palette.bluishGreen} !important;
        }
    }


    ${media.tablet`
        .swiper-pagination{
            left: 50%;
            transform: translateX(-50%);        
        }
    `}
`;
export default Style;
