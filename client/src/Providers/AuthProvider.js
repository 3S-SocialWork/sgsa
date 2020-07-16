const AuthProvider = {

    login: ({ username, password }) => {
        const request = new Request('http://localhost:8000/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
            });
    },
    logout: () => {
        const headers = new Headers({ Accept: 'application/json' });
        const token = localStorage.getItem('token');
        headers.set('Authorization', `Token ${token}`);
        const request = new Request('http://localhost:8000/api/logout', {
            method: 'GET',
            headers: headers
        });
        return fetch(request)
            .then(response => {
                localStorage.removeItem('token');
            });
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => localStorage.getItem('token')
        ? Promise.resolve()
        : Promise.reject({ redirectTo: '/login  ' }),
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    }
};

export default AuthProvider;