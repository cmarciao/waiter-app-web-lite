import { styled } from 'styled-components';

export const Container = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 50%;

    transform: translateX(-50%);

    div + div {
        margin-top: 1rem;
    }
`;
