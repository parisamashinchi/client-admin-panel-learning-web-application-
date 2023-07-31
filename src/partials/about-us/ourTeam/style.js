import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    background: ${palette.whiteGrey};
    .our-team {
        padding: 90px 0 50px;
        .our-team-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            .our-team-title {
                color: ${palette.darkGreyTertiary};
                font-size: 3rem;
            }
            .our-team-description {
                width: 750px;
                text-align: center;
                color: ${palette.lightGreySeventeenth};
                font-size: 1.5rem;
                ${media.tablet`
                    width: auto;
                `}
            }
        }
        .our-team-list {
            margin-top: 35px;
        }
    }
`;
export default Style;
