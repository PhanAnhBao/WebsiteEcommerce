import http from '../baseURL';

export function getAll() {
    return http.get('/categories-client');
}

export function getProductAllowCategory(id) {
    return http.get(`/categories-client/${id}`);
}

export function getCategoryById(id) {
    return http.get(`/categories-client/${id}/show`);
}





