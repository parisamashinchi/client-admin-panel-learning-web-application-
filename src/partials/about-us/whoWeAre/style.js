import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    position: relative;
    overflow: hidden;
    .fixed-background-1{
        background: url('/static/images/path.png') no-repeat;
        position: absolute;
        background-size: 100%;
        height: 1000px;
        width:1000px;
        left: -450px;
        top: -300px;
        z-index: -1;
        ${media.xDesktop`
            left: -500px;
        `}
        ${media.desktop`
            width: 700px;
            height: 700px;
            top: -150px;
            left: -300px;
        `}
        ${media.tablet`
            left: -380px;
        `}
        ${media.smallTablet`
            width: 550px;
            height: 550px;
            left: -280px;
        `}
    }
    .fixed-background-2{
        background: url('/static/images/path.png') no-repeat;
        position: absolute;
        background-size: 100%;
        height: 1000px;
        width: 1000px;
        right: -240px;
        top: -150px;
        z-index: -1;
        ${media.xDesktop`
            width: 800px;
            height: 800px;
            left: -350px;
            top: -150px;
        `}
        ${media.desktop`
            width: 700px;
            height: 700px;
            top: 400px;
            right: -200px;
        `}
        ${media.tablet`
            width: 650px;
            height: 650px;
        `}
        ${media.phone`
            width: 550px;
            height: 550px;   
        `}
    }
    .fixed-background-3{
        background: url('/static/images/path.png') no-repeat;
        position: absolute;
        background-size: 100%;
        height: 1000px;
        width: 1000px;
        left: -410px;
        top: 900px;
        z-index: -1;
        ${media.xDesktop`
            width: 800px;
            height: 800px;
            left: -350px;
            top: 900px;
        `}
        ${media.desktop`
            width: 700px;
            height: 700px;
            top: 1000px;
            left: -200px;
        `}
        ${media.antDesktop`
            top: 1500px;
        `}
        ${media.tablet`
            width: 650px;
            height: 650px;
        `}
        ${media.phone`
            width: 550px;
            height: 550px;   
        `}
    }
    .fixed-background-4{
        background: url('/static/images/path-2.svg') no-repeat;
        position: absolute;
        background-size: 100%;
        height: 1200px;
        width: 1200px;
        right: -600px;
        bottom: 50px;
        z-index: -1;
        ${media.xDesktop`
            width: 800px;
            height: 800px;
            right: -350px;
            bottom: 200px;
        `}
        ${media.desktop`
            bottom: 300px;
            left: -200px;
        `}
        ${media.antDesktop`
            bottom: 100px;
        `}
        ${media.tablet`
            width: 650px;
            height: 650px;
        `}
    }
    .who-we-are {
        padding: 140px 0 200px;
        ${media.antDesktop`
            padding: 100px 0 130px;
        `}
        .who-we-are-item {
            &:not(:first-child) {
                margin-top: 250px;
                ${media.antDesktop`
                    margin-top: 150px;
                `}
            }
            .description {
                margin-top: 30px;
                .wea-item-title {
                    font-size: 3.5rem;
                    color: ${palette.darkGreyTertiary};
                    margin-bottom: 0;
                 
                }
                .wea-item-description {
                    font-size: 1.6rem;
                    color: ${palette.lightGreySeventeenth};
                    line-height: 1.9;
                    margin-top: 30px;
                }
                ${media.antDesktop`
                    text-align: center;
                    margin-top: 0;
                    margin-bottom: 50px;
                    .wea-item-description{
                        margin-top: 25px;
                        margin-bottom: 0;
                    }
                `}
            }
            .image {
                display: flex;
                align-items: flex-start;
                justify-content: flex-end;
                .image-wrapper {
                    display: flex;
                    align-items: center;
                    height: 100%;
                    justify-content: center;
                    img {
                        max-width: 100%;
                        height: auto;
                    }
                }
                ${media.antDesktop`
                    justify-content: center;
                `}
            }
            &:nth-child(2) {
                .description {
                    margin-top: 100px;
                    ${media.xDesktop`
                        margin-top: 80px;
                    `}
                    ${media.antDesktop`
                        margin-top: 0;
                    `}
                    .wea-item-description {
                        margin-bottom: 25px; 
                        ${media.antDesktop`
                            margin-top: 25px;
                        `}
                    }
                    .wea-description-footer {
                        display: flex;
                        align-items: center;
                        button {
                            cursor: pointer;
                            background: ${palette.bluishGreen};
                            border: none;
                            outline: none;
                            border-radius: 100%;
                            padding: 15px 23px;
                            transition: all 0.2s ease;
                            img {
                                width: 13px;
                                height: 13px;
                            }
                            &:hover {
                                background: ${palette.blueGreen};
                            }
                        }
                        .play-video {
                            margin-right: 17px;
                            font-weight: bold;
                            font-size: 1.7rem;
                            color: ${palette.lightGreyFourtyFifth};
                        }
                        ${media.desktop`
                            .play-video{
                                font-size: 2rem;
                            }
                            button{
                                padding: 12px 21px;
                                img{
                                    width:12px;
                                    height: 12px;
                                }
                            }
                        `}
                        ${media.antDesktop`
                            justify-content: center;
                        `}
                    }
                }
                .image {
                    align-items: flex-start;
                    img {
                        width: auto;
                        margin-left: 0;
                    }
                }
            }
            &:nth-child(3) {
                .description {
                    margin-top:0;
                }
                .image {
                    align-items: center;
                    img {
                        width: auto;
                    }
                }
            }
            &:nth-child(even) {
                .description {
                    order: 1;
                    ${media.antDesktop`
                        order: 0;
                    `}
                }
            }
        }
    }
`;
export default Style;
