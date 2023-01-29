"use client";

import { useContext } from "react";
import { formatPrice } from "../../../utils/formatPrice";
import { ProductsContext } from "../../contexts/ProductContext";

export function Totalizer() {
  const { productsTotal } = useContext(ProductsContext);
  const formattedProductsTotal = formatPrice(productsTotal);

  return (
    <>
      <span className="flex text-slate-300 font-sans tracking-wider font-medium text-xs">
        TOTAL
      </span>
      <span className="flex text-slate-50 font-serif font-extrabold text-xl">
        {formattedProductsTotal}
      </span>
    </>
  );
}
