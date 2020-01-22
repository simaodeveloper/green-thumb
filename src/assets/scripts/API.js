import HTTP from './libraries/HTTP';

class API {
  constructor(HTTP, baseUrl) {
    this.HTTP = HTTP;
    this.baseUrl = baseUrl;
  }

  getProductListByParams({
    sunValue = 'high',
    waterValue = 'rarely',
    petsValue = 'false'
  }) {
    return this.HTTP.get({
      url: `${this.baseUrl}/?sun=${sunValue}&water=${waterValue}&pets=${petsValue}`
    })
    .catch(err => console.error(err));
  }

  getProductById(id) {
    return this.HTTP.get({
      url: `${this.baseUrl}/?plant=${id}`
    })
    .catch(err => console.error(err));
  }

  postProduct(data) {
    return this.HTTP.post({
      url: 'https://app.greenhouse.io/tests/b65fa5ab26e0ef0932e0c74986bcdb12',
      body: JSON.stringify(data)
    })
    .catch(err => console.error(err));
  }
}

export default new API(
  HTTP,
  `https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service`
);
