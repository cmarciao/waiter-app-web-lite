import { ReactPortal } from '../ReactPortal';

import { Order } from '../../types/Order';
import closeImg from '../../assets/images/close-icon.svg';

import { formatCurrency } from '../../utils/formatCurrency';

import { ModalBody, OrderDetails, Overlay, Actions } from "./styles";
import { useEffect } from 'react';

interface OrderModalProps {
    isVisible: boolean;
    order: Order | null;
    onClose: () => void;
}

export function OrderModal({ isVisible, order, onClose }: OrderModalProps) {
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if(event.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [onClose]);

    if(!isVisible || !order) {
        return null;
    }

    const total = order.products.reduce((acc, { product, quantity }) => {
        return acc + (product.price * quantity);
    }, 0);

    return (
        <ReactPortal containerId='order-modal'>
            <Overlay>
                <ModalBody>
                    <header>
                        <strong>Mesa 2</strong>
                        <button type='button' onClick={onClose}>
                            <img src={closeImg} alt="Close modal" />
                        </button>
                    </header>

                    <div className="status-container">
                        <small>Status do pedido</small>
                        <div>
                            <span>
                                {order.status === 'WAITING' && '🕕'}
                                {order.status === 'IN_PRODUCTION' && '👨‍🍳'}
                                {order.status === 'DONE' && '✅'}
                            </span>

                            <span>
                                {order.status === 'WAITING' && 'Fila de espera'}
                                {order.status === 'IN_PRODUCTION' && 'Em preparação'}
                                {order.status === 'DONE' && 'Pronto'}
                            </span>
                        </div>
                    </div>

                    <OrderDetails>
                        <strong>Itens</strong>

                        <div className="order-items">
                            {order.products.map(({ _id, product, quantity }) => (
                                <div className="item" key={_id}>
                                    <img
                                        src={`http://localhost:3001/uploads/${product.imagePath}`}
                                        alt={product.name}
                                        width='56'
                                        height='28.51'
                                    />

                                    <span className="quantity">{quantity}x</span>

                                    <div className="product-details">
                                        <strong>{product.name}</strong>
                                        <span>{formatCurrency(product.price)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="total">
                            <span>Total</span>
                            <strong>{formatCurrency(total)}</strong>
                        </div>
                    </OrderDetails>

                    <Actions>
                        <button type='button' className='primary'>
                            <span>
                                {order.status === 'WAITING' && '👨‍🍳'}
                                {order.status === 'IN_PRODUCTION' && '✅'}
                            </span>

                            <strong>
                                {order.status === 'WAITING' && 'Iniciar Produção'}
                                {order.status === 'IN_PRODUCTION' && 'Finalizar pedido'}
                            </strong>
                        </button>

                        <button type='button' className='secondary'>
                            Cancelar pedido
                        </button>
                    </Actions>
                </ModalBody>
            </Overlay>
        </ReactPortal>
    );
}
