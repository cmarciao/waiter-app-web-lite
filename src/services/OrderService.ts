import { HttpClient } from './api/HttpClient';

class OrderService {
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient('http://192.168.1.3:3001');
    }

    listOrders() {
        return this.httpClient.get('/orders');
    }

    changeOrderStatus(orderId: string, { status: body }: { status: string }) {
        return this.httpClient.patch(`/orders/${orderId}`, {
            body
        });
    }

    deleteOrder(orderId: string) {
        return this.httpClient.delete(`/orders/${orderId}`);
    }
}

export default new OrderService();
