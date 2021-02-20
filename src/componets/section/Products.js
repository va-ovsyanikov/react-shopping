import React from "react";
import { DataContext } from "../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../../css/Product.css";

export const Products = (props) => {
  const { products, addCart } = useContext(DataContext);

  return (
    <div className="product">
      {
      products.map((product) => (
          <div className="card" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.src} alt="alt" />
            </Link>
            <div className="content">
              <h3>
                <Link to={`/product/${product.id}`}>{product.title}</Link>
              </h3>
              <span>${product.price}</span>
              <p>{product.description}</p>
              <button onClick={() => addCart(product.id)}>Add to cart</button>
            </div>
          </div>
        ))}
    </div>
  );
};
