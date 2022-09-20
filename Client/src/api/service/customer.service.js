import http from '../baseURL';

export function login(body) {
    return http.post('/customers/login', body);
}

export function create(body) {
    return http.post('/customers/store', body);
}
