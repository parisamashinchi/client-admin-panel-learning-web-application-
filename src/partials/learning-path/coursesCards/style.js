import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    background: ${palette.lightGreyFourtieth};
    position: relative;
    top: -40px;
    &.none-background{
        &:before{
            opacity: 0;
            visibility: hidden;
        }
    }
    // &:after {
    //     content: '';
    //     position: absolute;
    //     border-left: 25px solid transparent;
    //     border-right: 25px solid transparent;
    //     border-top: 40px solid ${palette.white};
    //     top: 0;
    //     right: 400px;
    //     ${media.xDesktop`
    //         right: 300px;`};
    //     ${media.desktop`
    //         right: 200px;`};
    //     ${media.tablet`
    //         right: 150px;
    //     `};
    //     ${media.bigPhone`
    //         right: 100px;
    //     `};
    // };
    
    &:before{
       ${({ length }) => (!length ? `display: none;` : ``)};
        content: '';
        position: absolute;
        height: 100%;
        width: 500px;
        background: linear-gradient(90deg , ${({ length }) => ( !length ? `transparent` : `${palette.lightGreyFourtieth} 0%`)},
         ${({ length }) => ( !length  ? `transparent` : `${palette.lightGreyThirtySecondLowOpacity} 60%`)},
         ${({ length }) => ( !length ? `transparent` : `${palette.lightGreyFourtySecond} 100%`)});
        top:0;
        left:0;
        z-index: 1;
        visibility: visible;
        ${media.xDesktop`
            width: 300px;
        `}
        ${media.desktop`
            width: 200px;
        `}
        ${media.tablet`
            width: 0px;
        `}
    };
    .courses-cards {
        padding: 113px 0 93px;
        overflow: hidden;
        .swiper-container {
            position: relative;
            .swiper-wrapper {
                display: inline-flex;
                .swiper-slide{
                    .course-card-item-wrapper{
                        width: 0;
                        //overflow: hidden;
                        padding: 5px;
                            &.no-margin{
                                margin-right: 0 !important;
                            }
                    }
                    &:last-child{
                        .course-card-item{
                            .course-card-description{
                                &:after{
                                    display: none;
                                }
                            }
                        }
                    }
                }
            }
            .swiper-button{
                position: absolute;
                z-index: 1;
                top: 50%;
                transform: translateY(-50%);
                background: ${palette.white};
                padding: 4px 11px;
                cursor: pointer;
                &.next-course{
                    left:0 ;
                    ${media.desktop`
                        left: 27px;
                    `}
                      ${media.tablet`
                            left: 12px;
                            ;
                        `}
                     ${media.phone`
                       left:10px 
                    `};
                }
                &.prev-course{
                    right: 0;
                     ${media.phone`
                       right:10px 
                    `};
                     ${media.tablet`
                            right: 12px;
                         
                        `}
                    img{
                        transform: rotate(180deg);
                    }
                }
            }
        }
    }
      .swiper-button{
        img {
            top: 0;
            transition: all 0.3s;
            position:relative  
        }
        &:hover{
          background: #24b662;
          }
       }
      .next-course img {
            right: 0;
       }
       
      .next-course  {
         &:hover{
            img {
                right: 50%;
             }
         }
       }
      .prev-course img {
            left: 0%;
       }
        .prev-course:hover img {
            left: 50%;
       }
      
       

`;
export default Style;
