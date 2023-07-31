import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    display: flex;
    border: 1px solid ${palette.lightGreyEleventh};
    align-items: center;
    border-radius: 7px;
    height: 30px;
    min-width: 120px;
    cursor: pointer;
    transition: box-shadow 0.2s ease;
    background-color: #69d9a1;
    border-color: #69d9a1;
    .course-video-button-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 10px;
            height: 10px;
            right: 0;
            transform: scaleX(-1);
        }
        ${({ locked }) =>
            !locked
                ? `
                &:hover {
                    .title{
                        transition: .3s ease;
                        right: 20px;
                        opacity: 0;
                    }
                    img {
                        transition: .3s ease;
                        right: 40px;
                        position: relative;
                    }
                }
        `: ``};
        .title {
            font-size: 1rem;
            margin-right: 3px;
            color: ${palette.white};
            margin-top: 2px;
            font-weight: bold;
            right: 0
        }
    }
   
    ${({ locked }) =>
        locked
            ? `
    background: ${palette.lightGreyTwentySeventh};
    border-color: ${palette.lightGreyTwentySeventh};
    min-width: 30px;
     cursor: not-allowed;
    .course-video-button-wrapper{
        cursor: not-allowed;
        .title{
            color: ${palette.lightGreyTwentyEighth};
        }  
    }
    `: ``};
         img{
            width: 12px;
            height: 16px;
            margin-right: 7px;
        } 
`;
export default Style;
