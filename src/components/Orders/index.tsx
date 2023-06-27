import { useEffect, useState } from 'react';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';
import { Order } from '../../types/Order';
import OrderService from '../../services/OrderService';
import socketIo from 'socket.io-client';

export function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const socket = socketIo('http://localhost:3001', {
            transports: ['websocket']
        });

        socket.on('orders@new', (order) => {
            console.log(order);
            setOrders((prevState) => [
                ...prevState,
                order
            ]);
        });
    }, []);

    useEffect(() => {
        async function loadOrders() {
            const orders = await OrderService.listOrders();
            setOrders(orders);
        }

        loadOrders();
    }, []);

    const waitingOrders = orders.filter((order) => order.status === 'WAITING');
    const inProductionOrders = orders.filter((order) => order.status === 'IN_PRODUCTION');
    const doneOrders = orders.filter((order) => order.status === 'DONE');

    function handleOrderStatusChange(orderId: string, status: Order['status']) {
        setOrders((prevState) => prevState.map((order) => (
            order._id === orderId
                ? { ...order, status}
                : order
        )));
    }

    function handleCancelOrder(orderId: string) {
        setOrders((prevState) =>
            prevState.filter((order) => order._id !== orderId)
        );
    }

    return (
        <Container>
            <OrdersBoard
                icon="🕕"
                title="Fila de espera"
                orders={waitingOrders}
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleOrderStatusChange}
            />

            <OrdersBoard
                icon="👨‍🍳"
                title="Em preparação"
                orders={inProductionOrders}
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleOrderStatusChange}
            />

            <OrdersBoard
                icon="✅"
                title="Pronto"
                orders={doneOrders}
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleOrderStatusChange}
            />
        </Container>
    );
}
