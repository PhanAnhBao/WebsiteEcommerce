import http from '../baseURL';

export function getAll() {
    return http.get('/employees');
}

export function create(body) {
    return http.post('/employees/store', body);
}

export function login(body) {
    return http.post('/employees/login', body);
}

export function edit(id, body) {
    return http.put(`/employees/${id}`, body);
}

export function getEmployeeById(id) {
    return http.get(`/employees/${id}/edit`);
}

export function deleteEmployee(id) {
    return http.delete(`/employees/${id}`);
}

export function findByName(name) {
    return http.get(`/employees/${name}`);
}