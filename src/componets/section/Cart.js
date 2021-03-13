import React from "react";
import { DataContext } from "../Context";
import { useContext } from "react";
import { Colors } from "./Colors";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, reduction, increase, remove, total} = useContext(DataContext);

  // React.useEffect(()=>{
  //   getTotal() 
  // }, [])


  if (cart.length === 0) {
     return <h2>Nothings Product</h2>
  }else{
    return (
        <>
          {cart.map((item, index) => (
            <div className="details" key={item.id}>
              <img src={item.src} alt="alt" />
              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price * item.count}</span>
                </div>
                <Colors colors={item.colors} />
                <p>{item.description}</p>
                <p>{item.content}</p>
                <div className="amout">
                  <button className="count" onClick={() => reduction(index)}>
                    -
                  </button>
  
                  <span>{item.count}</span>
                  <button className="count" onClick={() => increase(index)}>
                    +
                  </button>
                </div>
              </div>
              <div className="delete" onClick={() => remove(item.id)}>
                x
              </div>
            
            </div>
          ))}
            <div className="total">
                <Link to="/payment">Payment</Link>
                <h3>Total: $ {total}</h3>
              </div>
        </>
      );
    }
  }
  

