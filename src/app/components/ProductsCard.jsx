import React from "react";

export default function ProductsCard({ product }) {
  const { title, description } = product;
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
