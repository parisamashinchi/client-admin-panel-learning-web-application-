import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    .ant-col-4 , .ant-col-20 {
        float: right;
    }
    .card-content-wrapper {
        height: 60%!important;
    }
    text-align: center;
    background: ${palette.white};
    height: 550px;
    position: relative;
    border-radius: 10px;
    box-shadow: inset 0 0 0 4px ${({ golden }) => (golden ? `${palette.darkYellow}` : `${palette.white}`)};
    overflow: hidden;
    transition: all 0.2s ease;
    ${media.phone`
        height: 450px;
    `}
    .price-card {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        height: 100%;
         border: 6px solid #FFD701;
        ${media.bigPhone`
            padding: 50px 30px;
        `}
        ${media.phone`
            padding: 10px 10px;
        `}
         
        .card-title {
            font-size: 1.7rem;
            color: black;
        }
        .card-title_sec {
            font-size: 1.2rem; 
        }
        .separator {
            border-color: ${palette.lightGreyEleventh};
            opacity: 0.2;
            width: 65%;
            margin: 0 auto 10px;
        }
        .card-price {
            display: flex;
            justify-content: center;
            margin-top: 25px;
             ${media.phone`
                    padding-bottom: 5px;
                `}
            .price {
                color: #F5D009;
                font-size: 4.1rem;
            }
            .unit {
                color: ${palette.lightGreyTwentyFirst};
                font-size: 2rem;
                margin-right: 11px;
            }
            .discounted {
                display: flex;
                ${media.phone`
                    flex-direction: column;
                `}
                .discounted-price {
                    position: relative;
                    display: flex;
                    align-items: center;
                    padding-right: 16px;
                    padding-left: 6px;
                    ${media.phone`
                        justify-content: center;
                        margin-bottom: 15px;
                        margin-top: 10px;
                    `}
                    .price,
                    .unit {
                        color: ${palette.lightGreyQuinary};
                        font-size: 2.4rem;
                    }
                    .unit {
                        color: ${palette.lightGreyQuinary};
                        font-size: 1.2rem;
                        font-weight: bold;
                    }
                    &:after {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 0;
                        height: 1px;
                        width: 100%;
                        background: ${palette.lightGreyEleventh};
                        transform: translateY(-50%);
                        ${media.phone`
                            width: 84%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                        `}
                    }
                }
                .actual-price {
                    display: flex;
                    align-items: center;
                    margin-right: 15px;
                    .price {
                    }
                    .unit {
                        font-weight: bold;
                        margin-right: 18px;
                    }
                }
            }
        }
        .card-content-wrapper {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-between;
            .card-content {
                margin-top: 30px;
                padding: 0 30px;
                text-align: right;
                 ${media.phone`
                    margin-top: 0;
                    font-size: 12px;
                    line-height: 22px;
                 `}
                 b {
                    display:block
                 }
                 .card-btn {
                     border: 1px solid gray;
                    border-radius: 10px;
                    margin-bottom: 5px;
                    float:left;
                    font-size:12px
                 }
                p {
                    color: ${palette.lightGreyThirtyFifth};
                    font-size: 1.4rem;
                    line-height: 1.7;
                    margin-bottom: 0;
                }
            }
            .card-footer {
                display: flex;
                justify-content: center;
                ${media.phone`
                    margin-top: 0px;
                 `}
                .certificate-text-wrapper {
                    background: #FAFAFA;
                    padding: 20px 30px;
                     ${media.phone`
                        padding: 20px 0px;
                     `}
                    .certificate-text {
                        text-align: center;
                        color: black;
                        font-size: 1.3rem;
                        line-height: 1.7;
                        font-weight: normal;
                        line-height: 32px;
                        white-space: pre-wrap;
                        width:50%;
                        display:inline-block;
                        img {
                            width:20px;
                            margin-left:10px
                        }
                        ${media.phone`
                           line-height: 18px;
                         `}
                    }
                    &:after {
                        content: '';
                        position: absolute;
                        width: 1px;
                        background: ${palette.lightGreyEleventhLowOpacity};
                        height: 100%;
                        top: 0;
                        left: 0;
                    }
                }
                .certificate-image {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    height: 100%;
                    ${media.xxDesktop`
                        ${({ golden }) => (golden ? `justify-content: center;` : ``)};
                    `}
                    .golden-reward {
                        display: none;
                        line-height: 1.5;
                        font-weight: bold;
                        margin-top: 10px;
                        text-align: right;
                        color: ${palette.lightGreyThirtyFifth};
                         ${media.phone`
                            font-size: 11px;
                        `} 
                    }
                    ${({ golden }) =>
                        golden
                            ? `
                flex-direction: column;
                align-items: flex-start
                .golden-reward{
                    display: block
                };
                `
                            : ``};
                    img {
                        width: 70px;
                        height: 70px;
                        margin-right: 15px;
                        ${({ golden }) => (golden ? `width:45px; height: auto;` : ``)};
                        ${media.desktop`
                     
                        ${({ golden }) => (golden ? `width:40px; height: auto;` : ``)};
                        `}
                        ${media.phone`
                           margin: 0;
                         `}
                    }
                }
            }
            
        }
    }
    .card-button {
                ${media.phone`
                    margin-top: 0px;
                    button{
                    padding: 3px 60px!important;
                    border-radius: 7px!important;
                    }
                `}
                button ,a{
                    background: #ffd700;
                    border: none;
                    border-radius: 13px;
                    padding: 10px;
                    line-height: 30px;
                    width: 180px;
                    margin-top:15px;
                     ${media.phone`
                        width: 100px;
                         pointer-events:none;
                    `}
                    .title {
                        color: ${({ golden }) => (golden ? `${palette.darkGreySecondary}` : ` ${palette.darkGreySecondary}`)};
                        font-size: 1.5rem !important;
                        right: -12px;
                        position : relative;
                         ${media.phone`
                            left: 65px;
                            right: auto;
                        `}
                    }
                    .special-title{
                       left: 18px;
                        position: relative;
                         ${media.phone`
                            left: 50px;
                            right: auto;
                            position: relative;
                        `} 
                    }
                    i {
                        opacity: 0;
                        right: -20px;
                        position: relative;
                    }
                    &:hover {
                     i {
                         opacity: 1;
                         transition: .3s ease;
                         right: 0px;
                     }
                     .title, .special-title {
                         transition: .3s ease;
                         right: 80px;
                         opacity: 0;
                         display: none;
                      }
                    }
                }
             
            }
    .ant-col-10 {
      ${media.phone`
        padding-right: 5px!important;
        padding-left: 0!important;
      `} 
    }
    .yellow-section {
        background : #FFFCEB;
        padding: 50px 30px;
         ${media.phone`
            padding: 20px 30px;
      `} 
    }
    .ant-divider {
        height: 7em;
    }
`;
export default Style;
