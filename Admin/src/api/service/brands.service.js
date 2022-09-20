import http from '../baseURL';

export function getAll() {
    return http.get('/brands-admin');
}

export function create(body) {
    return http.post('/brands-admin/store', body);
}

export function edit(id, body) {
    return http.put(`/brands-admin/${id}`, body);
}

export function getBrandsById(id) {
    return http.get(`/brands-admin/${id}/edit`);
}

export function deleteBrand(id) {
    return http.delete(`/brands-admin/${id}`);
}

export function findByName(name) {
    return http.get(`/brands-admin/${name}`);
}