import HttpClient from './utils/HttpClient';
import ProductMapper from './mappers/ProductMapper';

class ProductServer {
  constructor() {
    this.httpClient = new HttpClient('https://2fc7-190-11-223-84.ngrok-free.app');
  }

  async listProducts() {
    const products = await this.httpClient.get('/products');

    return products.map(ProductMapper.toDomain);
  }
}

export default new ProductServer();
