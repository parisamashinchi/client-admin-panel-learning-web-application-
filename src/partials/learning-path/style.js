import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    .social-detail {
       background: ${palette.whiteGrey};
        position: relative;
        height: 80px;
        top: -80px;
        line-height: 70px;
        padding: 0 90px;
         ${media.phone`
             top: 0px;
             padding: 0;
             margin-bottom:50px;
             height:50px;
             line-height: 45px;
         `}
          ${media.tablet`
             top: -15px;
         `}
    }
`;
export default Style;
