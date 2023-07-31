import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    overflow-x: hidden;
    .btn-more-wrapper {
        margin-top:20px;
    }    
     .btn-more {
            font-size: 1.5rem;
            line-height: 17px;
            font-weight: bold;
            padding: 10px 20px;
            border-radius: 10px;
            outline: none;
            box-shadow: none;
            color: ${palette.black};
            text-transform: uppercase;
            background-color: ${palette.lightGreen};
            margin: 0;
            cursor: pointer;
            transition: color 0.3s, background-color 0.3s;
            &:hover {
                background-color: ${palette.grassGreen};
            }
            ${media.bigPhone`
                padding: 16px 38px;
                border-radius: 5px;
                font-size: 2.1rem;
            `}
             ${media.phone`
                margin-top: 0;
                border-radius: 5px;
                padding: 10px 20px;
                font-size: 1.5rem;
               
             `}
        
`;
export default Style;
