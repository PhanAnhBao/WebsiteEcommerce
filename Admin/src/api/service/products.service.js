import http from '../baseURL';

export function getAll() {
    return http.get(`/products-admin`);
}

export function getProductById(id) {
    return http.get(`/products-admin/${id}/edit`);
}

export function create(body) {
    return http.post('/products-admin/store', body);
}

export function edit(id, body) {
    return http.put(`/products-admin/${id}`, body);
}

export function deleteProduct(id) {
    return http.delete(`/products-admin/${id}`);
}

export function findByName(name) {
    return http.get(`/products-admin/${name}`);
}

