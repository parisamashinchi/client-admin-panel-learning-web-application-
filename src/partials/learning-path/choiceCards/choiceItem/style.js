import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    padding: 5px;
    transition: transform 0.2s ease;
    .choice-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        // border: 2px solid ${palette.lightGreyThirtyNinth};
        border-radius: 17px;
        height: 260px;
        cursor: pointer;
        // box-shadow: -2px 3px 8px ${palette.boxShadowColor};
        transition: all 0.2s ease;
         ${media.phone`
            width: 200px;
            margin: 0 auto;
            height: 200px;
           `}
          
        .choice-image {
            text-align: center;
            height:100px;
            img {
                max-width: 100%;
                width: 80px;
                height: auto;
                filter: invert(52%) sepia(2%) saturate(0%) hue-rotate(67deg) brightness(101%) contrast(93%);
                transition: all 0.2s ease;
            }
        }
        .choice-title {
            text-align: center;
            h2 {
                font-size: 1.7rem;
                margin-top: 18px;
                color: ${({ active }) => (active ? `${palette.lightGreen}` : `${palette.lightGreyThirtyNinth}`)};
                transition: all 0.2s ease;
            }
        }
        &.active {
            border-color: ${palette.lightGreen};
            .choice-image {
                img {
                    filter: invert(99%) sepia(14%) saturate(4634%) hue-rotate(68deg) brightness(92%) contrast(86%);
                }
            }
            .choice-title {
                h2 {
                    color: ${palette.lightGreen};
                }
            }
            
        }
    }
    &:hover {
        transform: scale(1.02);
    }
   
`;
export default Style;
