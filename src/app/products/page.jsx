import React from "react";
import ProductsCard from "../components/ProductsCard";
const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  return res.json();
};
export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div className=" container mx-auto">
      ProductsPage : {products.length}
      <div className=" flex justify-center gap-3 flex-wrap">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
