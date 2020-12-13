import Product from '@customtypes/product'
import products from '../data/products.json'

const categories = products.items
  .reduce((final: string[], obj: Product) => {
    if (!final.includes(obj.category)) {
      return [...final, obj.category]
    } else {
      return [...final]
    }
  }, [])
  .sort()

export default categories
