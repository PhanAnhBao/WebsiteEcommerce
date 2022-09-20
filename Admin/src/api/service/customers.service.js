import http from '../baseURL';

export function getAll() {
    return http.get('/customers');
}

export function create(body) {
    return http.post('/customers/store', body);
}

export function edit(id, body) {
    return http.put(`/customers/${id}`, body);
}

export function getCustomerById(id) {
    return http.get(`/customers/${id}/edit`);
}

export function deleteCustomer(id) {
    return http.delete(`/customers/${id}`);
}

export function findByName(name) {
    return http.get(`/customers/${name}`);
}