import { styled } from 'styled-components';

export const Overlay = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    left: 0px;
    top: 0px;

    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4.5px);
`;

export const ModalBody = styled.div`
    width: 30rem;

    border-radius: 8px;
    background: white;

    padding: 2rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong {
            font-size: 1.5rem;
        }

        button {
            line-height: 0;

            border: 0;
            background: transparent;
        }
    }

    .status-container {
        margin-top: 2rem;

        small {
            font-size: 0.875rem;
            opacity: 0.8;
        }

        div {
            display: flex;
            align-items: center;

            gap: 0.5rem;

            margin-top: 0.5rem;
        }
    }
`;

export const OrderDetails = styled.div`
    margin-top: 2rem;

    & > strong {
        font-size: 0.875rem;
        font-weight: 500;
        opacity: 0.8;
    }

    .order-items {
        margin-top: 1rem;


        .item {
            display: flex;

            & + .item {
                margin-top: 1rem;
            }

            img {
                border-radius: 6px;
            }

            .quantity {
                min-width: 1.25rem;
                display: block;

                color: #666;
                font-size: 0.875rem;

                margin-left: 0.75rem;
            }

            .product-details {
                margin-left: 0.25rem;

                strong {
                    display: block;
                    margin-bottom: 0.25rem;
                }

                span {
                    font-size: 0.875rem;
                    color: #666;
                }
            }
        }
    }

    .total {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 1.5rem;

        span {
            font-size: 0.875rem;
            font-weight: 500;
            opacity: 0.8;
        }
    }
`;

export const Actions = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-top: 2rem;

    .primary {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 0.5rem;

        color: white;
        background: #333;

        border: 0;
        border-radius: 3rem;

        padding: .75rem 1.5rem;
    }

    .secondary {
        font-weight: bold;
        color: #d73035;

        border: 0;
        background: transparent;

        margin-top: 0.5rem;
        padding: 0.875rem 1.5rem;
    }
`;
