import axios from 'axios';

export const endpoint = 'http://localhost:3000/api/v1';

export async function loginUser(credentials) {
  const payload = JSON.stringify(credentials);
  return axios.post(`${endpoint}/login`, payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function signupUser(credentials) {
  const payload = JSON.stringify(credentials);
  return axios.post(`${endpoint}/register`, payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function getUser(userId) {
  return axios.get(`${endpoint}/users/${userId}`);
}

export function logoutUser() {
  return localStorage.removeItem('token');
}
