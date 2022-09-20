import http from '../baseURL';

export function getAll() {
    return http.get('/orders');
}

export function deleteOrder(id) {
    return http.delete(`/orders/${id}`);
}