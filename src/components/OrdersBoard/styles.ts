import { styled } from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid rgba(204, 204, 204, 0.8);

    & > header {
        display: flex;
        align-content: center;

        font-size: 0.875rem;
        gap: .5rem;

        padding: .5rem;
    }
    `;

export const OrdersContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-top: 1.5rem;

    button {
        height: 8rem;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: .25rem;
        background: #fff;

        border-radius: .5rem;
        border: 1px solid rgba(204, 204, 204, 0.8);

        strong {
            font-weight: 500;
        }

        span {
            color: #666;
            font-size: .875rem;
        }

        & + button {
            margin-top: 1.5rem;
        }
    }
`;
