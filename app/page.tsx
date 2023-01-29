import React from "react";
import { HeroBanner } from "./Components/HeroBanner";
import { ProductList } from "./Components/ProductList";
import { Header } from "./Components/Header";
import { ProductsContextProvider } from "./contexts/ProductContext";

export default async function Home() {
  return (
    <ProductsContextProvider>
      <Header />
      <HeroBanner />
      <ProductList />
    </ProductsContextProvider>
  );
}
