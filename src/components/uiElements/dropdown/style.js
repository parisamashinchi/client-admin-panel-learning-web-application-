import styled from 'styled-components';

const Style = styled.div`
    position: relative;
    .drop-overlay {
        display: none;
        position: absolute;
        ${({ left, center }) => (center ? 'right: -250%;' : left ? 'left: 0;' : 'right: 0;')}
        z-index: 1000;
        &.show {
            display: block;
            animation-name: drop-anim;
            animation-duration: 0.5s;
            animation-direction: normal;
            animation-timing-function: ease;
        }
    }
    .drop-hover {
        cursor: pointer;
    }
    @keyframes drop-anim {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export default Style;
