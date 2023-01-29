import { Product } from "../../../typing";
import { ProductActionTypes } from "./actions";

interface ProductState {
  products: Product[],
}

export function productsReducer(state: ProductState, action: any) {

  switch (action.type) {

    case ProductActionTypes.UPDATE_PRODUCT_QUANTITY: {

      return {
        products: state.products.map(product => {
          if (product.id === action.payload.productId) {
            return {
              ...product,
              quantity: action.payload.quantity
            }
          } else {
            return product
          }
        })
      }

  }

    case ProductActionTypes.UPDATE_PRODUCT_NAME: {

      return {
        products: state.products.map(product => {
          if (product.id === action.payload.productId) {
            return {
              ...product,
              name: action.payload.name
            }
          } else {
            return product
          }
        })
      }

  }

  default:
    return state

}
}
