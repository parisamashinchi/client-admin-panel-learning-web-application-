import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    .card-box-item {
        position: relative;
        //padding: 0 16px;
        .ant-card {
            border-radius: 10px;
            overflow: hidden;
            border: none;
            box-shadow: 0 3px 6px ${palette.boxShadowColor};
            .ant-card-cover {
                img {
                    height: 200px;
                    object-fit: cover;
                    object-position: center;
                    ${media.phone`
                        height: 250px;
                    `}
                     ${media.tablet`
                        height: 250px;
                    `}
                }
            }
            .ant-card-body {
                padding: 18px;
                padding-bottom: 22px;
                 ${media.tablet`
                     padding: 10px;
                 `}
                .ant-card-meta-detail {
                    width: 200px;
                    padding-left: 5px;
                    ${media.xxDesktop`
                        width: 100%;
                    `}
                    .ant-card-meta-title {
                        font-weight: bold;
                        font-size: 1.6rem;
                        color: ${palette.grey};
                        margin-bottom: 0;
                        padding-bottom: 15px;
                        border-bottom: 1px solid ${palette.lightGreyEighteenth};
                    }
                    .ant-card-meta-description {
                        color: ${palette.lightGreen};
                        font-size: 2.2rem;
                        text-align: left;
                        margin-top: 10px;
                        padding: 5px;
                    }
                }
            }
        }
        .plus-button {
            width: 40px;
            height: 40px;
            background: #59B283;
            border-radius: 50%;
            text-align: center;
            top: -140px;
            left: 26px;
            z-index: 999;
            position: relative;
            img {
              width: 15px
            }
        }
    }
       .card-duration {
        position: relative;
                font-size: 1.2rem;
                font-weight: normal;
                color: ${palette.grey};
                margin: 0px;
                margin-top: 0px;
                padding-top:10px;
            // &::before {
            //         content: '';
            //         width: calc(100%);
            //         height: 2px;
            //         background-color: ${palette.lightGrey};
            //         position: absolute;
            //         top: -3px;
            //      
            //     }
        }
        .teacher-name {
            margin-bottom:0
        }
`;
export default Style;
