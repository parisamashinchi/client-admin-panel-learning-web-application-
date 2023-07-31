import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    height: 777px;    
    &:nth-child(odd){
        .image-container{
            .image-wrapper{
                &::before{
                    width: 98%;
                    ${media.antDesktop`
                        width: 100%;
                    `}
                }
            }
        }
    }
    .image-container {
        height: 100%;
        display: flex;
        align-items: center;
        .image-wrapper {
            position: relative;
            img {
                margin-left: ${({ imageRight }) => (imageRight ? '' : '15px')};
                margin-right: ${({ imageRight }) => (imageRight ? '15px' : '')};
                border-top-left-radius: ${({ imageRight }) => (imageRight ? '20px' : '0px')};
                border-top-right-radius: ${({ imageRight }) => (imageRight ? '0px' : '20px')};
                border-radius: ${({ path }) => (path && '20px'  )};  
                height: auto;
                position: relative;
                width:  ${({ path }) => (path && '450px'  )}; 
                ${media.phone`
                  border-radius: ${({ path }) => (path && '20px!important'  )}; 
                `}
            }
            &::before {
                ${({ hasShadow }) => (hasShadow ? "content: '';" : 'content: none;')};
                position: absolute;
                width: 100%;
                height: 100%;
                top: 15px;
                background-color: ${({ path }) => (path ? 'white' : `${palette.lightGreyQuaternary}` )};
                left: ${({ imageRight }) => (imageRight ? '15px' : 'auto')};
                right: ${({ imageRight }) => (imageRight ? 'auto' : '15px')};
                z-index: 0;
                ${media.antDesktop`
                    width:100%;
                `}
            }
        }
    }
    .detail-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 0 0 20px;
        ${({ imageRight }) => (!imageRight ? `order: -1;` : ``)};
        .title {
            display: inline-block;
            padding:${({ path }) => (path ?  0 : '27px' )};
            background-color: ${({ path }) => (path ? 'white' : `${palette.darkGrey}` )}; 
            color:  ${({ path }) => (path ?  `${palette.black}` : `${palette.white}` )};
            font-size: 2.4rem;
            font-weight: normal;
            margin-bottom: ${({ path }) => (path ?  '10px' : '30px' )};
            letter-spacing: -1px;
            text-align: center;
        }
        .description {
            font-size: 1.6rem;
            line-height: 2;
        }
        a {
            color: #5BC5C9;
            border-bottom: 1px solid;
                width: fit-content;
        }
    }
    &:nth-child(even) {
        background-color: ${palette.whiteGrey};
    }
    ${media.xxDesktop`
        height: ${({ path }) => (path ?  '500px' : '620px' )};
         .image-container{
           margin-top: 50px;
           .without {
                &::before {
                   content: none;
                }
           }
        }
        
    `}
    ${media.antDesktop`
        height: auto;
        .image-container{
            height: auto;
            margin-top: 30px;
            justify-content: center;
            .image-wrapper{
                // padding: 15px 15px;
                img{
                    height: 380px;
                    margin-right: 0;
                    margin-left:0;
                    border-top-left-radius:0;
                    border-top-right-radius:0;
                }
                &::before{
                    content:"";
                    top:0;
                    right: 0;
                }
            }
        }
        .detail-container{
            height: auto;
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-left: 0;
            padding-right: 0;
            justify-content: center;
            order:0;
            padding-bottom: 40px;
            .header{
                display: flex;
                flex-direction: column;
                align-items: center;
                .title{
                    background: transparent;
                    color: ${palette.black};
                    padding: 0;
                    margin-bottom: 10px;
                      ${media.phone`
                            width: ${({ path }) => (path ? '250px'  : 'inherit' )};
                       `}
                }
            }
            .description{
                margin-top: 15px;
                text-align: center;
            }
            .line{
                display: block;
                background: ${palette.lightGreyQuinary};
                height: 2px;
                width: 80%;
            }
        }
         .image-container{
           margin-top: 50px;
           .without {
                &::before {
                   content: none;
                }
           }
        }
    `}
    ${media.tablet`
        .detail-container{
            .title{
                font-weight: bold;
            }
        }
        .image-container{
           margin-top: 50px;
           .without {
                &::before {
                   content: none;
                }
           }
        }
    `}
    ${media.smallTablet`
        .image-container{
            .image-wrapper{
                img{
                    height: auto;
                }
            }
             .without {
                    &::before {
                       content: none;
                    }
                }
        }
    `}
    ${media.phone`
        .image-container{
           margin-top: 50px;
           .without {
                &::before {
                   content: none;
                }
           }
        }
        
    `}
`;
export default Style;
