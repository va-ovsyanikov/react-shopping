import React, { useState, useEffect } from "react";
import { DataContext } from "../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Colors } from "./Colors";

export const Details = (props) => {
  const { products, addCart } = useContext(DataContext);

  const [state, setState] = useState({
    product: [],
  });

  useEffect(() => {
    if (props.match.params.id) {
      const res = products;
      const data = res.filter((item) => {
        return item.id === props.match.params.id;
      });
      setState({ product: data });
    }
  }, [products, props.match.params.id]);

  const { product } = state;

  return (
    <>
      {product.map((item) => (
        <div className="details cart" key={item.id}>
          <img src={item.src} alt="alt" />
          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>${item.price}</span>
            </div>
            <Colors colors={item.colors} />
            <p>{item.description}</p>
            <p>{item.content}</p>
            <Link to="/cart" className="cart" onClick={() =>addCart(item.id)}>
              Add to cart
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
