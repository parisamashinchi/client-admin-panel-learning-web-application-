import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    ${media.phone`
        background: #F8F8F8;
    `}
    .course-detail {
        padding: 50px 0;
        .course-detail-header {
            justify-content: space-between;
            display: flex;
            .course-detail-title {
                color: ${palette.darkGreyTertiary};
                margin-bottom :0;
                 ${media.phone`
                    font-size: 14px;
                `}
            }
            .course-download-btn {
                border: 1px solid #5BC5C9;
                transition: all 0.3s ease;
                padding: 10px 35px;
                span {
                    color: #5BC5C9;
                    font-size: 1.5rem !important;
                }
                img {
                    margin-left: 10px;
                    right: 0;
                }
                &:hover {
                    background-color: transparent;
                    img {
                       transition : .3s ease;
                       right: 50px;
                       position: relative;
                     }
                    .title{
                       transition : .3s ease;
                       right: 30px;
                        position: relative;
                        opacity: 0
                   }
                }
                ${media.bigPhone`
                    padding: 10px 40px;
                `}
                ${media.phone`
                    padding: 10px 25px;
                `}
                ${media.smallPhone`
                    padding: 10px 15px;
                `}
            }
        }
        .course-detail-content {
            margin-top: 60px;
            padding: 50px 60px 50px 30px;
            box-shadow: 3px 10px 30px #0000001f;
       
            ${media.xDesktop`
                padding: 50px 35px 30px 30px;
            `}
            ${media.antDesktop`
                box-shadow: none;
                border-top: 1px solid ${palette.lightGreyTwentyThirdLowOpacity};
                padding: 35px 0;
                margin-top: 35px;
            `}
            .intro {
                .intro-content {
                    .intro-content-wrapper {
                        .title {
                            color: ${palette.darkGreyTertiary};
                            font-size: 3rem;
                             ${media.phone`
                                text-align: center;
                            `}
                        }
                        .description {
                            color: ${palette.lightGreySeventeenth};
                            margin-bottom: 0;
                            padding-bottom: 55px;
                            border-bottom: 1px solid ${palette.lightGreyTwentyThirdLowOpacity};
                            font-family: 'Samim';
                             ${media.phone`
                                text-align: center;
                                line-height: 20px;
                            `}
                        }
                        .footer {
                            margin-top: 5px;
                            color: ${palette.lightGreyTwentyThird};
                             ${media.phone`
                                text-align: center;
                            `}
                        }
                        ${media.xxDesktop`
                            padding: 0 0 0 40px;
                        `}
                        ${media.xDesktop`
                            padding-left: 35px;
                        `}
                        ${media.antDesktop`
                            padding: 0;
                            .footer{
                                margin-top: 15px;
                            }
                            .description{
                                padding-bottom: 25px;
                            }
                        `}
                    }
                }
                .intro-image {
                    .intro-image-wrapper {
                        border-radius: 12px 0 0 0;
                        position: relative;
                        z-index: 1;
                        overflow: hidden;
                        display: flex;
                        justify-content: flex-end;
                        margin-left: -30px;
                        margin-top: -50px;
                        img {
                            max-width: 600px;
                            height: auto;
                            width: 100%;
                        }
                        &:after {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            // background: ${palette.white};
                            opacity: 0.29;
                        }
                        ${media.xxDesktop`
                            left: -15px;
                             height: 420px;
                              width: 600px;
                            img{
                                width: 100%;
                            }
                        `}
                        ${media.xDesktop`
                            margin-top: -60px;
                            img{
                                max-width: 520px;
                            }
                        `}
                        ${media.antDesktop`
                            display: none;
                        `}
                    }
                }
            }
            .details{
                margin-top: 10px;
                .details-title{
                    color: ${palette.darkGreyTertiary};
                    font-size: 2.2rem;
                    margin-bottom: 15px;
                }
                .details-features{
                    color: ${palette.lightGreyTertiary};
                    font-size: 1.8rem;
                }
                .phases{
                    margin-top: 0px;   
                    padding-right: 30px;   
                     ${media.phone`
                        text-align: center;
                        padding-right: 0;
                    `} 
                    .phase-item{
                        &:not(:last-child){
                            padding-bottom: 0px; 
                            ${media.antDesktop`
                                padding-bottom: 40px;
                            `} 
                            ${media.phone`
                                padding-bottom: 0px; 
                            `}  
                        }
                    }
                }
            }
            .prerequisite-box{
                ${media.antDesktop`
                    display: none;
                `}
                .prerequisite-box-wrapper{
                    padding: 30px;
                    background: ${palette.lightGreyThirtyFirst};
                    margin-right: 45px;
                    margin-top: 30px;
                    .prerequisite-header{
                        display: flex;
                        img{
                            max-width: 40px;
                            height: auto;
                        }
                        .prerequisite-title{
                            font-size: 2.1rem;
                            color: ${palette.lightBlack};
                            margin-right: 25px;
                            letter-spacing: -1px;
                            margin-top: 12px;
                        }
                    }
                    .prerequisite-footer{
                        margin-top: 20px;
                        button{
                            background: ${palette.lightGreyThirtySecond};
                            border: none;
                            outline: none;
                            cursor: pointer;
                            border-radius: 3px;
                            border: 1px solid ${palette.lightGreyThirtyThird};
                            font-size: 1.2rem;
                            padding: 0px 30px;
                            margin-left: 10px;
                            line-height: 2;
                            color: ${palette.darkGreySecondary};
                            transition: all 0.2s ease;
                            margin-bottom: 10px;
                            ${media.xDesktop`
                                &:nth-child(1){
                                    margin-left: 5px;
                                }
                                &:nth-child(2){
                                    margin-left: 0;
                                }
                            `}
                            &:hover{
                                color: ${palette.lightGreyTwentyEighth};
                            }
                        }
                    }
                    ${media.xDesktop`
                        padding: 40px;
                        .prerequisite-header{
                            .prerequisite-title{
                                margin-right: 18px;
                            }
                        }
                        .prerequisite-footer{
                            button{
                                padding: 2px 30px;
                            }
                        }
                    `}
                }
            }
    }
    ${media.desktop`
        .course-detail{
            .course-detail-header{
                padding-bottom: 30px;
                border-bottom: 1px solid ${palette.lightGrey};
            }
            .course-detail-content{
                box-shadow: none;
                padding: 0;
                margin-top: 30px;
                .intro{
                    .intro-content{
                        .intro-content-wrapper{
                            padding: 0;
                            .description{
                                padding-bottom: 25px;
                            }
                            .footer{
                                margin-top: 15px;
                            }
                        }
                    }
                }
            }
        }
    `};
}`;

export default Style;
