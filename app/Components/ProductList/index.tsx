"use client";

import React, { useContext, useState } from "react";
import { Slider } from "../Slider";
import ProductCard from "../ProductCard";
import { ProductsContext } from "../../contexts/ProductContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "../Select";
import { Input } from "../Input";

export function ProductList() {
  const [productTitleWeight, setProductTitleWeight] = useState(500);
  const [selectProductSelected, setSelectedProductSelected] = useState("");

  const handleSliderValueChange = (e: number[]) => {
    setProductTitleWeight(e[0]);
  };

  const { products, updateProductName } = useContext(ProductsContext);

  return (
    <>
      <div className="container py-6 px-10 lg:py-10 mx-auto flex flex-col md:flex-row">
        <div className="flex flex-1 lg:mr-16 flex-col">
          <h3 className="font-serif font-bold text-slate-600 uppercase mb-4 md:mb-8 items-center text-center text-sm">
            Set Title Font Weight
          </h3>
          <div className="flex h-10">
            <Slider
              defaultValue={[productTitleWeight]}
              max={900}
              min={300}
              step={0.5}
              onValueChange={(e) => handleSliderValueChange(e)}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <h3 className="font-serif font-bold text-slate-600 uppercase mb-2 md:mb-8 items-center text-center text-sm">
            Edit product titles
          </h3>
          <div className="flex">
            <Select onValueChange={setSelectedProductSelected}>
              <SelectTrigger className="min-w-[100px] flex-shrink">
                <SelectValue placeholder="Product" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className="SelectLabel">Product ID</SelectLabel>
                  {products.map((product) => (
                    <SelectItem value={product.id} key={product.id}>
                      {product.id}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              type="text"
              placeholder="Select a product to edit"
              className="flex flex-1"
              disabled={!selectProductSelected ? true : false}
              value={
                selectProductSelected
                  ? products.find(
                      (product) => product.id === selectProductSelected
                    )?.name
                  : ""
              }
              onChange={(e) => {
                updateProductName(selectProductSelected, e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-100">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
            {products.map((product) => (
              <ProductCard
                product={product}
                productTitleWeight={productTitleWeight}
                key={product.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
