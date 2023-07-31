import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import { Collapse } from 'antd';
import media from 'theme/MediaQuery';

const { Panel: AntPanel } = Collapse;

const Style = styled.div`
    position: relative;
    overflow: hidden;
    .fixed-background {
        position: absolute;
        background: url('/static/images/path-2.svg') no-repeat;
        background-size: cover;
        width: 1200px;
        height: 1200px;
        left: -500px;
        z-index: -1;
        opacity: 0.8;
        ${media.xxDesktop`
            left: -600px;
            top:50px;
        `}
        ${media.xDesktop`
            left: -500px;
            top:50px;
        `}
    }
    .faq {
        padding: 80px 0 150px;
        .ant-collapse {
            border: none;
            background: none;
            .ant-collapse-item {
                .ant-collapse-header {
                    background: transparent;
                    font-size: 1.8rem;
                    padding: 23px 0;
                }
                .ant-collapse-content {
                    background: transparent;
                    .ant-collapse-content-box {
                        padding: 18px 0 15px;
                        .faq-answer {
                            color: ${palette.lightGreyFiftySecond};
                            font-size: 1.5rem;
                            line-height: 1.95;
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }
    }
`;

const Panel = styled(AntPanel)`
    border-bottom: ${({ active }) => (active ? `none` : `1px solid ${palette.lightGreyEleventhLowOpacitySecond}`)} !important;
    .ant-collapse-header {
        font-weight: ${({ active }) => (active ? `bold` : `normal`)};
        color: ${({ active }) => (active ? `${palette.lightGreyFiftieth}` : `${palette.lightGreyFiftyFirst}`)} !important;
    }
    .ant-collapse-content {
        border-top: 1px solid ${palette.lightGreyEleventhLowOpacitySecond};
    }
`;

export { Panel };

export default Style;
