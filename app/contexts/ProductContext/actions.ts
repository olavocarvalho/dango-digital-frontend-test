import { Product } from "../../../typing"

export enum ProductActionTypes {
  UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY',
  UPDATE_PRODUCT_NAME = 'UPDATE_PRODUCT_NAME',
}

export function updateProductQuantityAction(productId: string, quantity: number) {
  return {
    type: ProductActionTypes.UPDATE_PRODUCT_QUANTITY,
    payload: {
      productId,
      quantity
    }
  }
}

export function updateProductNameAction(productId: string, name: string) {
  return {
    type: ProductActionTypes.UPDATE_PRODUCT_NAME,
    payload: {
      productId,
      name
    }
  }
}