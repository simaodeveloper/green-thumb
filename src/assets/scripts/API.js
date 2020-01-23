import HTTP from './libraries/HTTP';
import * as config from './config';

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

  getProductById(id = 1) {
    return this.HTTP.get({
      url: `${this.baseUrl}/plant?id=${id}`
    })
    .catch(err => console.error(err));
  }

  postProduct(data) {
    return this.HTTP.post({
      url: this.baseUrl,
      body: JSON.stringify(data)
    })
    .catch(err => console.error(err));
  }
}

export default new API(HTTP, config.API_URL);
