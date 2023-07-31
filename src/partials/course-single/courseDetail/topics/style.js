import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    ${({ active }) => (!active ? `display: none` : `display: block`)};
     // ${({ open }) => (open ? 'max-height: 1200px;' : 'max-height: 0;')};
    transition: max-height 0.5s ease-in-out; 
    ${({ open }) => (!open && 'overflow: hidden ')};
    .topics-list {
         ${({ open }) => (open ? 'height: fit-content;' : 'height: 0;')};
        .even-item {
            background: #f0f0f0;
         }
        .topics-item {
            padding-bottom: 10px;
            margin-top: 10px;
            direction:rtl;
            &:last-child {
                margin: 0 0 50px 0;
            }
            .topics-item-wrapper {
                display: flex;
                align-items: center;
                padding: 0 20px;
                ${media.phone`
                    flex-direction: inherit;
                    align-items: unset;
                    justify-content: center;
                    padding: 10px ;
                `} 
                .topics-title-wrapper{
                    display: flex;
                    align-items: center;
                    .topics-title,
                    .counter {
                        margin-bottom: 0;
                        font-size: 1.5rem;
                        color: ${palette.lightGreyTwentySixth};
                    }
                    .topics-title {
                        margin-right: 50px;
                        font-weight: normal;
                        line-height: 1.7;
                        padding-left: 7px;
                        font-family: 'samim';
                        ${media.xDesktop`
                            margin-right: 35px;
                        `}
                        ${media.desktop`
                            margin-right: 30px;
                        `}
                        ${media.antDesktop`
                            margin-right: 50px;
                        `}
                        ${media.tablet`
                            margin-right: 35px;
                        `}
                        ${media.phone`
                            margin-right: 15px;
                        `}
                    }
                }
                
                .course-video-button {
                    margin-right: auto;
                    margin-top: 10px;
                    width: 30px;
                    .play-sign {
                        transform: scale(-1,-1);
                    }
                     &:hover {
                        .play-sign  {
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
                }
            }
        }
    }
`;
export default Style;
