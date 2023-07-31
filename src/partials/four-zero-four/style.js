import styled from 'styled-components';

const Style = styled.div`
    .error-404-page {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        position: relative;
    }
    .error-404-content {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
    }
    .error-404-content h1 {
        font-size: 8.4rem;
        font-weight: 700;
        color: rgb(120, 129, 149);
        line-height: 1;
        margin: 0px 0px 25px;
    }
    .error-404-content h3 {
        font-size: 2.4rem;
        font-weight: 400;
        color: rgb(89, 89, 89);
        line-height: 1.2;
        margin: 0px 0px 10px;
    }
    .error-404-content p {
        font-size: 1.4rem;
        font-weight: 400;
        color: rgb(121, 121, 121);
        margin: 0px 0px 10px;
    }
    .error-404-artwork {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        margin-right: 100px;
        height: 500px;
    }
    .error-404-artwork img {
        max-height: 100%;
    }
    @media only screen and (max-width: 767px) {
        .error-404-page {
            width: 100%;
            flex-direction: column;
            flex-wrap: nowrap;
        }
        .error-404-content {
            order: 2;
            margin-top: 20px;
            -webkit-box-align: center;
            align-items: center;
            text-align: center;
            flex-direction: column;
        }
        .error-404-artwork {
            margin-left: 0px;
            margin-right: inherit;
        }
    }
`;
export default Style;
