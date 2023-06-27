import { styled, css, keyframes } from 'styled-components';

const progress = keyframes`
    from {
        width: 100%;
    }

    to {
        width: 0%;
    }
`;

const containerVariant = {
    success: css`
        background-color: white;
    `,
    error: css`
        color: white;
        background-color: #D73035;
    `
};

interface ContainerProps {
    type: 'success' | 'error';
    time: number;
}

export const Container = styled.div<ContainerProps>`
    width: 300px;

    display: flex;
    align-content: center;

    position: relative;

    gap: 1rem;
    ${({ type }) => containerVariant[type]};

    overflow: hidden;

    border-radius: 6px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    cursor: pointer;

    padding: 1rem;

    &::after {
        content: '';

        display: block;
        width: 100%;
        height: 4px;

        background-color: ${({ type }) => type === 'success' ? '#41B724' : '#fff'};

        position: absolute;
        bottom: 0;
        left: 0;

        animation: ${progress} ${({ time }) => `${time}s`} linear;
    }
`;
