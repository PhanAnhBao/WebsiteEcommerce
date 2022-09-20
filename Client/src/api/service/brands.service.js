import http from '../baseURL';

export function getAllBrand() {
    return http.get('/brands-client');
}

export function getBrandById(id) {
    return http.get(`/brands-client/${id}/show`);
}

export function getProductAllowBrand(id) {
    return http.get(`/brands-client/${id}`);
}
