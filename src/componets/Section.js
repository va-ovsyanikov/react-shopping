import React from "react";
import { Products } from "./section/Products";
import { Details } from "./section/Details";
import { Cart } from "./section/Cart";
import { Payment } from "./section/Payment";
import {About} from "./About"
import {Contact} from "./Contact"
import {Login} from "./Login"

import { Route } from "react-router-dom";

export const Section = () => {
  return (
    <section>
      <Route path="/" component={Products} exact />
      <Route path="/product" component={Products} exact />
      <Route path="/product/:id" component={Details} />
      <Route path="/cart" component={Cart} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/payment" component={Payment} />
    </section>
  );
};
