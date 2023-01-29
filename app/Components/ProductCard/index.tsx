import React, { ReactElement, useContext, useEffect, useState } from "react";
import { formatPrice } from "../../../utils/formatPrice";
import { Product } from "../../../typing";
import { QuantityInput } from "../QuantityInput";
import { ProductsContext } from "../../../app/contexts/ProductContext";

interface ProductCardType {
  product: Product;
  productTitleWeight: number;
}

export default function ProductCard({
  product,
  productTitleWeight,
}: ProductCardType): ReactElement {
  const currentProductId = product.id;

  const [quantity, setQuantity] = useState(product.quantity);

  const { updateProductQuantity, updateProductName } =
    useContext(ProductsContext);

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1);
  }

  function handleDecreaseQuantity() {
    setQuantity((state) => state - 1);
  }

  useEffect(() => {
    updateProductQuantity(product.id, quantity);
  }, [quantity]);

  const productFormattedPrice = formatPrice(product.price);

  return (
    <div
      key={product.id}
      className="relative md:bg-slate-100 drop-shadow-2xl md:drop-shadow-none bg-white overflow-hidden rounded-lg hover:drop-shadow-2xl hover:bg-white transition-all	duration-300"
    >
      <div className="w-full overflow-hidden mix-blend-multiply px-4 md:px-0">
        <video
          width=""
          height=""
          autoPlay
          loop
          muted
          webkit-playsinline="true"
          playsInline
          preload="none"
          className="-mt-6 h-full w-full object-cover object-center lg:h-full lg:w-full rounded-lg"
        >
          <source src={product.featured_media} type="video/webm" />
        </video>
      </div>
      <div className="-mt-4 block">
        <h3
          className="text-3xl font-serif text-center text-slate-900 border-0"
          style={{ fontWeight: `${productTitleWeight}` }}
        >
          {product.name}
        </h3>
        <p className="text-center px-2 font-sans text-sm my-2">
          {product.short_description}
        </p>
        <div className="w-full block px-4 mt-2 text-xl font-semibold text-slate-900 text-center">
          {productFormattedPrice}
        </div>
      </div>
      <div className="flex justify-center p-4">
        <QuantityInput
          onIncrease={handleIncreaseQuantity}
          onDecrease={handleDecreaseQuantity}
          quantity={quantity}
        />
        <button
          disabled
          className="px-5 font-serif uppercase text-slate-400 border border-slate-600 hover:bg-slate-200 hover:text-slate-600 hover:cursor-not-allowed"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
