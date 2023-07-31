import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    width: 100%;
    .search-form {
        position: relative;
    }
    .search-input {
        padding: 15px 53px 15px 15px;
        background-color: #ffff;
        border:2px solid #B2B2B2;
        box-shadow: 0px 1px 2px 0px #dedddd;
        border-radius: 10px;
        outline: 0;
        font-size: 1.6rem;
        height: 45px;
        direction: ltr;
        text-align: right;
        color: #333333;
        margin-top: 92px;
        ${media.tablet`
           margin-top: 0;
        `}
        ${media.phone`
           margin-top: 0;
        `}
        &:focus {
            box-shadow: 0px 1px 2px 0px #dedddd;
        }
    }
    .search-button {
        position: absolute;
        top: 85%;
        right: 22px;
        transform: translateY(-50%);
        outline: 0;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        ${media.phone`
          top: 50%;
        `}
    }
    .ant-form-item {
        padding: 0;
        margin: 0;
    }   
`;
export default Style;
