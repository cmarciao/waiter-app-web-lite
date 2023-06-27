import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Container, OrdersContainer } from './styles';
import OrderService from '../../services/OrderService';
import { toast } from '../../utils/toast';

interface OrdersBoardProps {
    icon: string;
    title: string;
    orders: Order[];
    onCancelOrder: (orderId: string) => void;
    onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({ icon, title, orders, onCancelOrder, onChangeOrderStatus }: OrdersBoardProps) {
    const [isVisibleOrderModal, setIsVisibleOrderModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
    const [isLoading, setIsLoading] = useState(false);

    function handleOpenOrderModal(order: Order) {
        setIsVisibleOrderModal(true);
        setSelectedOrder(order);
    }

    function handleCloseOrderModal() {
        setIsVisibleOrderModal(false);
        setSelectedOrder(null);
    }

    async function handleChangeOrderStatus() {
        if(selectedOrder == null) return;
        setIsLoading(true);

        const newStatus = selectedOrder.status === 'WAITING'
            ? 'IN_PRODUCTION'
            : 'DONE';

        await OrderService.changeOrderStatus(selectedOrder._id, { status: newStatus });

        toast({
            type: 'success',
            message: `O pedido da mesa ${selectedOrder.table} teve o status alterado!`
        });
        onChangeOrderStatus(selectedOrder._id, newStatus);
        setIsLoading(false);
        setIsVisibleOrderModal(false);
    }

    async function handleCancelOrder() {
        if(selectedOrder == null) return;

        setIsLoading(true);

        await OrderService.deleteOrder(selectedOrder._id);

        toast({
            type: 'success',
            message: `O pedido da mesa ${selectedOrder.table} foi cancelado!`
        });
        onCancelOrder(selectedOrder._id);
        setIsLoading(false);
        setIsVisibleOrderModal(false);
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
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleChangeOrderStatus}
                isLoading={isLoading}
            />

        </Container>
    );
}
