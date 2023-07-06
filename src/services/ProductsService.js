import HttpClient from './utils/HttpClient';
import ProductMapper from './mappers/ProductMapper';

class ProductServer {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listProducts() {
    const products = await this.httpClient.get('/products');

    return products.map(ProductMapper.toDomain);
  }
}

export default new ProductServer();
