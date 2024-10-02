import { Base } from './base.ts'

export class Product extends Base {
  async getProducts() {
    console.log('getProducts');
    return this.request('/products', { method: 'GET' })
  }

  async getProduct(id: string) {
    return this.request(`/products/${id}`, { method: 'GET' })
  }
}
