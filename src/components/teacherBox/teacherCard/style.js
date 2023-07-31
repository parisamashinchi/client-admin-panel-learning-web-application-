import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    .teacher-box-item {
        padding: 5px 0;
        h3 {
            font-size: 1.3rem;
            color: ${palette.skyBlue};
            font-weight: normal;
            text-align: right;
            margin: 8px 30px 0;
        }
        p {
            color: ${palette.lightGreyTwentySecond};
            margin-top: 20px;
            margin-bottom: 0;
            min-height: 140px;
            text-align:justify;
            word-spacing: -0.11em;
            line-height: 25px;
            margin: 20px 30px;
            white-space: initial;
            ${media.phone`
                word-spacing: inherit;
            `}
        }
        .ant-card {
            border-radius: 14px;
            overflow: hidden;
            border: none;
            box-shadow: -3px 4px 12px #0000000d;
            .ant-card-cover {
                border-bottom: 1px solid ${palette.lightGreyTwentieth};
                height: 200px;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
            }
            .ant-card-body {
                min-height: 200px;
                padding: 0;
                .ant-card-meta-title {
                    text-align: right;
                    font-size: 1.7rem;
                     margin: 40px 30px 0;
                    color: ${palette.lightGreyTwentyFirst};
               
                }
                p {
                    font:normal normal normal 14px/26px Samim;
                 }
                img {
                    border-left: 1px solid #7070701c;
                    height: 237px;
                }
            }
        }
    }
    .ant-col-6, .ant-col-18, .ant-col-lg-6{
        float: right;
    }
`;
export default Style;
