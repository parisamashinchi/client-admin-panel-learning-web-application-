import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`

    .ant-col-20 , .ant-col-4 , .ant-col-8{
        float: right;
    }
    .ant-divider-horizontal.ant-divider-with-text-left::before {
        width: 0%;
    }
     button {
        margin-top: 20px;
        margin-right: 20px;
     }
     .blog-card {
        height: 350px;
        background: url(${({media_url}) => media_url}) no-repeat;
        background-size: cover;
        border-radius: 13px;
        margin: 20px;
        h1 {
            padding: 230px 20px 0;
            color: white;
            font-size: 24px;
        }
        .tag {
            margin-right: 10px;
            padding: 0 10px;
            line-height: 20px;
            border-radius: 12px;
            font-size: 1rem;
            width: fit-content;
         }
     }
 .
`;

export default Style;
