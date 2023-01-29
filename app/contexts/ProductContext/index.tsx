"use client";

import { ReactNode, createContext, useReducer } from "react";
import { Product } from "../../../typing";
import { productsReducer } from "./reducer";
import {
  updateProductNameAction,
  updateProductQuantityAction,
} from "./actions";
import { sample_products } from "../../../data/sample_products";

interface ProductsContextTypes {
  products: Product[];
  productsTotal: number;
  updateProductQuantity: (productId: string, quantity: number) => void;
  updateProductName: (productId: string, name: string) => void;
}

interface ProductsContextProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextTypes);

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [productsState, dispatch] = useReducer(productsReducer, {
    products: sample_products,
  });

  const { products } = productsState;

  /*  @ts-ignore */
  const productsTotal = products.reduce((sum, product) => {
    return sum + product.quantity * product.price;
  }, 0);

  function updateProductQuantity(productId: string, quantity: number) {
    dispatch(updateProductQuantityAction(productId, quantity));
  }

  function updateProductName(productId: string, name: string) {
    dispatch(updateProductNameAction(productId, name));
  }

  return (
    <ProductsContext.Provider
      value={{
        productsTotal,
        updateProductQuantity,
        updateProductName,
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
