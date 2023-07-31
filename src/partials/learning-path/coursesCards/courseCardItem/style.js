import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    .course-card-item {
        cursor: pointer;
        padding: 5px 0;
         ${media.phone`
             margin: 0 50px;
        `};
       
        .course-card-title {
            height: 260px;
            .ant-row-flex {
                height: 100%;
                .item {
                    margin-bottom: 10px;
                }
            }
        }
        .course-card-description {
            background: ${palette.white};
            border-radius: 30px;
            box-shadow: 0 3px 6px ${palette.boxShadowColor};
            height: 150px;
            position: relative;
            .course-card-description-wrapper {
                padding: 10px;
                .level-title {
                    font-weight: bold;
                    font-size: 1.8rem;
                    ${media.xDesktop`
                        font-size: 2.1rem;
                    `}
                }
                .level-description {
                    margin-top: 7px;
                    color: ${palette.lightGreyFourtyFirst};
                    font-size: 1.2rem;
                    line-height: 1.8;
                    ${media.xDesktop`
                        font-size: 1.45rem;
                        line-height: 1.7;
                    `}
                }
            }
            &:after {
                content: '';
                position: absolute;
                width: 50px;
                height: 1px;
                background: ${palette.lightGreyEleventh};
                top: 58px;
                left: -57px;
                 ${media.phone`
                     display:none
                 `}
            }
        }
        &.animate {
           animation-name: enter-anim;
            animation-duration: 0.5s;
        }
    }
    @keyframes enter-anim {
        from  {
            opacity: 0;
            transform: translateX(-50%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
export default Style;

const CourseItemTitle = styled.div`
    height: 100%;
    border-radius: 30px;
    overflow: hidden;
    color: ${palette.white};
    position: relative;
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        transition: all 0.5s ease-in-out;
    }
    span {
        position: absolute;
        top: 50%;
        left: 50%;
        white-space: nowrap;
        transform: translate(-50%, -50%);
        font-size: 1.6rem;
        color: transparent;
        ${media.xDesktop`
            font-size: 2rem;
        `}
    }
    &:hover {
    
       
        img {
            transform: scale(1.2);
            ${media.phone`
                transform: none;
            `};
        }
    }
`;
export { CourseItemTitle };
