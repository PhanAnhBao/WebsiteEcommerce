import http from '../baseURL';

export function getAll() {
    return http.get('/categories-admin');
}

export function create(body) {
    return http.post('/categories-admin/store', body);
}

export function edit(id, body) {
    return http.put(`/categories-admin/${id}`, body);
}

export function getCatgoriesById(id) {
    return http.get(`/categories-admin/${id}/edit`);
}

export function deleteCategories(id) {
    return http.delete(`/categories-admin/${id}`);
}

export function findByName(name) {
    return http.get(`/categories-admin/${name}`);
}