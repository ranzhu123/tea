import { HOST } from '../config';

export function Fetch (url, options = {}) {
  const {
    method = 'GET',
    headers = {}
  } = options;

  options.query = options.query || {};

  let URL = HOST + url;
  const upperCaseMethod = method.toUpperCase();

  if (upperCaseMethod === 'POST' && (!headers['Content-Type'] || headers['Content-Type'] === 'application/json')) {
    options.headers = Object.assign({}, {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, headers);
    options.body = Object.assign({}, options.body);
  } else {
    Object.assign(options.query);
  }

  return fetch(URL, options).then(res => {
    return res.json();
  }).catch(err => {
    if (err && err.data) {
      alert(err);
    }
  });
}

export function postFetch (url, options = {}) {
  options.method = 'post';
  return Fetch(url, options);
}
