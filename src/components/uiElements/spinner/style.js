import styled from 'styled-components';

const Style = styled.div`
    .spinner-container {
        position: relative;
        .spinner {
            position: ${({ fixed }) => (fixed ? 'fixed' : 'absolute')};
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation-name: fadeIn;
            animation-duration: 0.3s;
            & > {
                pointer-events: none;
            }
        }
    }
`;
export default Style;
