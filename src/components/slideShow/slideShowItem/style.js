import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    position: relative;
    height: 100%;
    background: url(${({ thumbnail }) => thumbnail});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius:10px;
    ${media.bigPhone`
        background:  url(${({ mobileThumbnail }) => mobileThumbnail})no-repeat;
        background-position: center center;
        background-size: cover;
    `}
    img {
        max-width: 100px;
        margin: 40px;
    }
     .move{
         right: 50%!important;
      }
    .detail-container {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
         transition: .01s linear;
        ${media.xDesktop`
            right: 36%;
        `}
        ${media.desktop`
            right: 25%;
        `}
        img {
            max-width: 80px;
            margin: 0 20px 20px;
        }
        .title {
            display: inline;
            color: ${palette.white};
            font-size: 2.5rem;
            margin-bottom: 0.3em;
            z-index: 1;
            text-align: center;
           
            ${media.desktop`
                font-size: 4.5rem;
            `}
            ${media.tablet`
                font-size: 4rem;
            `}
            ${media.bigPhone`
                font-size: 2.5rem;
            `}
        }
       
        .description {
            display: inline;
            color: ${palette.white};
            font-size: 1.5rem;
            z-index: 1;
            text-align: right;
            line-height: 1.5;
            width:700px;
            margin-bottom: 15px;
            ${media.xDesktop`
                width: 620px;
            `}
            ${media.desktop`
                font-size: 3rem;
                width: 550px;
            `}
            ${media.tablet`
                font-size: 2.5rem;
            `}
            ${media.bigPhone`
                font-size: 1.5rem;
                width: 450px;
            `}
            ${media.phone`
                width: 350px;
                line-height: 1.7;
            `}
            ${media.smallPhone`
                width: 310px;
            `}
        }
        .btn-more-wrapper {
            z-index: 1;
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
        }
    }


    ${media.xxDesktop`
        .detail-container{
            .title{
                white-space: unset;
            }
        }
    `}

    ${media.desktop`
        .detail-container{
            .title{
                white-space: unset;
            }
        }
    `}

    ${media.tablet`
        display: flex;
        justify-content: center;
        align-items: center;
        .detail-container{
            position: relative;
            top: 20px;
            right: 0;
            margin : 0 auto;
            transform: translateY(0);
            align-items: center;
            .title{
                margin-bottom: 0em;
            }
            .description{
                text-align: center;
                margin-bottom: 1em;
            }
        }
    `}

    ${media.phone`
        .detail-container{
            .btn-more{
                margin-top: 0;
                border-radius: 5px;
                padding: 5px 10px;
                font-size: 1.2rem;
            }
            img {
                margin: 0 0 20px;
                max-width: 30px;
            }
        }
    `}
   
   
`;
export default Style;
