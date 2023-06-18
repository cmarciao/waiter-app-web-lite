import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Container, OrdersContainer } from './styles';

interface OrdersBoardProps {
    icon: string;
    title: string;
    orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
    const [isVisibleOrderModal, setIsVisibleOrderModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

    function handleOpenOrderModal(order: Order) {
        setIsVisibleOrderModal(true);
        setSelectedOrder(order);
    }

    function handleCloseOrderModal() {
        setIsVisibleOrderModal(false);
        setSelectedOrder(null);
    }

    return (
        <Container>
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({orders.length})</span>
            </header>

            {orders.length > 0 && (
                <OrdersContainer>
                    {orders.map((order) => (
                        <button
                            key={order._id}
                            type="button"
                            onClick={() => handleOpenOrderModal(order)}
                        >
                            <strong>{order.table}</strong>
                            <span>{order.products.length} itens</span>
                        </button>
                    ))}
                </OrdersContainer>
            )}

            <OrderModal
                isVisible={isVisibleOrderModal}
                order={selectedOrder}
                onClose={handleCloseOrderModal}
            />

        </Container>
    );
}
