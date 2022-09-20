import http from '../baseURL';

export function getAll() {
    return http.get('/products-client/');
}

export function getProductSlug(slug) {
    return http.get(`/products-client/${slug}`);
}

export function getLimited() {
    return http.get('/products-client/limit');
}

export function findByName(name) {
    return http.get(`/products-search/${name}`);
}

export function search(name) {
    return http.get(`/products-search?name=${name}`);
}
