import http from '../baseURL';

export function create(body) {
    return http.post('/orders/store', body);
}

export function getOrder(id) {
    return http.get(`/orders/${id}/show`);
}

