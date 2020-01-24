export default class HTTP {
  static request(options) {
    const {
      url = '',
      method = 'GET',
      headers = {
        "Content-Type": "application/json",
      },
      mode = 'cors',
      cache = 'default',
      body = JSON.stringify({})
    } = options;

    return fetch(url, {
      method,
      headers,
      mode,
      cache,
    })
    .then(response => response.json());
  }

  static get(options) {
    return this.request(options);
  }

  static post(options) {
    const settings = { ...options, method: 'POST' };

    return this.request(settings);
  }
}
