import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    .responsive-box-wrapper{
        padding: 0;
        width: 100%;
        margin: 0;
    }
    overflow: hidden;
    margin: 0 100px;
     ${media.desktop` 
         margin: 0 10px;
     `}
    .desktop-achievement-container {
        display: flex;
        align-items: center;
        ${media.desktop` 
            display: none;
        `}
        .achievement-item {
            display: flex;
            flex-direction: column;
            text-align: center;
            border: 1px solid #e2e2e2;
            border-radius: 5px 0 0 5px;
            padding: 50px 10px;
            height:200px;
            border-right: none;
            .title {
                margin-top: 20px;
                text-align: center;
                font-size: 1.5rem;
                font-weight: normal;
                color: #909090;
                margin-bottom: 0;
            }
            img {
                 width:55px;
            }
        }
        .selected {
            border: 2px solid #1cdcb5;
            flex-direction: row;
            padding: 20px 10px;
            border-radius: 10px;
            .title {
                 margin-top: 20px;
                text-align: right;
                color: #4e4a48;
                padding: 0 30px;
            }
            .description{
               padding: 10px 30px;
                text-align: justify;
                line-height: 21px
            }
            i {
                color: #1cdcb5;
            }
            img {
                width: 80px
            }
        }
    }
    .responsive-achievement-container {
        display: none;
        position: relative;
        ${media.desktop`
            display: block; 
        `};
        .achievement-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 10px;
            .title {
                margin-top: 20px;
                text-align: center;
                font-size: 1.5rem;
                font-weight: normal;
                color: ${palette.grey};
                margin-bottom: 0;
            }
        }
        .swiper-container {
            padding: 60px 0;
        }
        .swiper-container,
        .swiper-wrapper {
            display: flex;
            flex-direction: row;
            position: relative;
            .achievement-item-wrapper {
                width: 0;
                overflow: hidden;
                height: auto;
                display: flex;
                justify-content: center;
                align-items: center;
                user-select: none;
                outline: none;
            }
        }
    }
    .swiper-button {
        display: none;
        align-items: center;
        color: ${palette.black};
        font-size: 30px;
        cursor: pointer;
        transition: color 0.5s ease-in-out;
        outline: none;
        i {
            color: ${palette.lightGreyTwelveth};
            font-size: 2rem;
            margin-left: 0;
        }
        ${media.desktop`
            display: flex;
        `}
    }
    .next {
        position: absolute;
        top: 50%;
        bottom: 50%;
        left: 20px;
        justify-content: flex-end;
    }
    .prev {
        position: absolute;
        top: 50%;
        bottom: 50%;
        right: 20px;
        justify-content: flex-start;
    }

    ${media.tablet`
        .responsive-achievement-container{
            .swiper-container{
                padding: 50px 0;
            }
            .achievement-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0 10px;
                .title {
                    margin-top: 20px;
                    text-align: center;
                    font-weight: normal;
                    color: ${palette.grey};
                }
            }
        }      
    `}
    .ant-collapse-content p {
        margin-right: 20px
     }
    .ant-collapse-item {
        border: 1px solid #d9d9d9;
        border-radius: 5px;
        }
     .ant-collapse-item-active {
        border: 2px solid #04ddb0;
        border-radius: 10px;
     }
     .ant-collapse-borderless {
        background-color: white
     }
`;
export default Style;
