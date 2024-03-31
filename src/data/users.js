import { clearUserData, setUserData, updateNav } from '../util.js';
import { get, post } from './request.js';
import { page } from '../lib.js';

// TODO Adapt user profile to exam requirement (identity, extra properties, etc.)

    const endpoints = {
        login: '/users/login',
        register: '/users/register',
        logout: '/users/logout'
    };

export async function login(email, password) {
    const result = await post(endpoints.login, { email, password });
    setUserData(result);
    updateNav();
    page('/');
}

export async function register(email, password) {
    const result = await post(endpoints.register, { email, password });
    setUserData(result);
    updateNav();
    page('/');
}

export async function logout() {
    const promise =  get(endpoints.logout);
    clearUserData();
    updateNav();

    await promise;
}