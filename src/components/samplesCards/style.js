import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    
    .ant-col {
        float: right;
    }
    .card-wrapper {
        width: 400px;
        margin: 0 auto;
    }
    .ant-card-bordered {
        border: none;
        border-radius: 10px;
        height: 120px;
    }
    .banner-img{
        border-radius: 10px;
        width: 1000px;
        max-width: 1000px;
        height: 250px;
        margin: 0 auto;
        position: relative;
        ${media.phone`
            width: 100%;
        `}
    }
    // .ant-avatar img {
    //     width: 50px!important;
    //     height: 50px!important;
    //     border-radius: 50%!important;
    //      ${media.phone`
    //         width: 100%!important;
    //         height: 100%!important;
    //     `}
    // }
`;
export default Style;
