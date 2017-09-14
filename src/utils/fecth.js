import axios from 'axios';

const fetch = axios.create();

export default function request(url, options) {
    const opts = {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      ...options,
    };
    return fetch(url, opts)
      .then((res) => {
        const { data } = res;
        if (data) {
          if (data.code === 401) { // 例如
              throw new Error('登录过期，请重新登录');
          }
        }
        return ({ data });
    })
    .catch(err => ({ err }));
}

export function post(url, options) {
  return request(url, { ...options, method: 'post' });
}

export function get(url, options) {
  return request(url, { ...options, method: 'get' });
}
