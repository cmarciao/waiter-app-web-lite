import { styled } from 'styled-components';

export const Container = styled.header`
    height: 198px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #D73035;
`;

export const Content = styled.div`
    max-width: 1216px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #fafafa;

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1rem;
        font-weight: 400;

        margin-top: 6px;
    }
`;
