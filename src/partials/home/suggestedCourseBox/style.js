import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    width: 100%;
    height: 786px;
    background: linear-gradient(rgba(64, 64, 64, 0.73), rgba(64, 64, 64, 0.73)), url(${({ image }) => image});
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
        color: ${palette.skyBlue};
        font-weight: bold;
        font-size: 7.9rem;
        margin: 0px;
        margin-bottom: 30px;
    }
    .description {
        color: ${palette.white};
        font-weight: bold;
        font-size: 3.09rem;
        margin-bottom: 60px;
    }
    .btn-more {
        padding: 10px;
        text-align: center;
        background-color: ${palette.grassGreen};
        border-radius: 500px;
        color: ${palette.white};
        font-size: 2.5rem;
        font-weight: bold;
        transition: background-color 0.3s;
        &:hover {
            background-color: ${palette.blueGreen};
        }
    }
    ${media.xxDesktop`height: 654.7px; .btn-more {padding: 15px 45px;}`};
    ${media.xDesktop`height: 491px; .btn-more {padding: 12px 40px;}`};
    ${media.desktop`height: 405px; .btn-more {padding: 10px 35px;}`};
    
`;
export default Style;
