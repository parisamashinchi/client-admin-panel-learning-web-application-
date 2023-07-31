import styled from 'styled-components';

const Style = styled.div`
    .ant-col-6, .ant-col-18 {
        float:right;
    }
    .ant-card-body {
        height: 220px;
        padding-top: 50px;
    }
    img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }
     h4 {
        text-align: center;
        margin-top: 10px;
     }
    .description {
        padding: 0 35px 0 0px;
    }
    .description::before {
        content: '“';
        position: absolute;
        right: 0px;
        font-size: 15rem;
        color: #68d9a0;
        font: normal normal bold 40px/0px IRANYekan;
        -webkit-transform: matrix(-1,0,0,-1,0,0);
        -ms-transform: matrix(-1,0,0,-1,0,0);
        transform: matrix(-1,0,0,-1,0,0);
    }
`;
export default Style;
