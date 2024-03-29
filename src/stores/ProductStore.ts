import { makeAutoObservable } from 'mobx'
import Product from '../models/Product'
class ProductStore {
    products: Product[] = []
    constructor () {
        makeAutoObservable(this)
        setTimeout(() => {
            this.products.push(new Product('p1', 70.50, "37-42"))
        }, 3000)
        setTimeout(() => {
            this.products.push(new Product('p2',50, "37-41"))
        }, 6000)
    }
}
export { ProductStore }
export default new ProductStore()
