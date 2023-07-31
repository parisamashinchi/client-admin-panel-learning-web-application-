import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    margin: 70px 100px 25px;
    border-radius: 8px;
    background-color: transparent;
    padding: 0px;
    direction: ltr;
    ${media.phone`
        margin: 70px 15px ;
    `}
    .wrapper {
        margin: 0;
        padding: 0;
        background-color: transparent;
        overflow: hidden;
        height: calc((100vw - 328px)/3)!important;
        width: 100%;
        direction: ltr;
        float: right;
        border-radius: 10px;
        box-shadow: rgb(0 0 0 / 15%) 0px 1px 4px;
        ${media.phone`
            width: 100%;
             height: 200px!important; 
        `}
        
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
                font-size: 1.08rem;
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
            .swiper-item-wrapper {
                height: 100%;
                width:700px;
                overflow: hidden;
                border-radius:10px;
            }
            &:hover {
                .btn {
                    opacity: 1;
                    pointer-events: auto;
                }
            }
          
        }
    }
    .swiper-pagination {
        display: flex;
        position: absolute;
        left: 91px;
        bottom: 45px;
        .swiper-pagination-bullet {
            display: block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-right: 10px;
            background-color: ${palette.lightGreyEighteenth} !important;
            cursor: pointer;
            outline: none;
        }
        .swiper-pagination-bullet-active {
             background-color: ${palette.bluishGreen} !important;
        }
    }

    ${media.tablet`
        height: 200px;
        margin: 125px 15px 12px;
        .swiper-pagination{
            left: 11%;
            bottom:15px;
            transform: translateX(-50%);
            .swiper-pagination-bullet{
                &:first-child{
                    margin-right: 0;
                }
            }
        }
    `}
  .ant-col {
    float: right;
  }
  .ant-col-xl-12{
    padding-right: 24px;
     ${media.tablet` 
        padding-right: 10px
     `}
  }
  
`;
export default Style;
