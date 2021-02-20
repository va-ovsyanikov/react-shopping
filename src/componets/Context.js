import React from "react";

export const DataContext = React.createContext();

export const Context = (props) => {
  const [state, setState] = React.useState({
    products: [
      {
        id: "1",
        title: "Nike Shoes 01",
        src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
        description:
          "UI/UX Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, adipisci modi? Earum ab itaque est similique ipsam eveniet, praesentium quis odio officia, eligendi accusantium, enim at atque obcaecati impedit. Sed.",
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
      {
        id: "2",
        title: "Nike Shoes 02",
        src: "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
        description:
          "UI/UX Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, adipisci modi? Earum ab itaque est similique ipsam eveniet, praesentium quis odio officia, eligendi accusantium, enim at atque obcaecati impedit. Sed.",
        price: 19,
        colors: ["red", "crimson", "teal"],
        count: 1,
      },
      {
        id: "3",
        title: "Nike Shoes 03",
        src: "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
        description:
          "UI/UX Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, adipisci modi? Earum ab itaque est similique ipsam eveniet, praesentium quis odio officia, eligendi accusantium, enim at atque obcaecati impedit. Sed.",
        price: 50,
        colors: ["lightblue", "white", "crimson", "teal"],
        count: 1,
      },
      {
        id: "4",
        title: "Nike Shoes 04",
        src: "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
        description:
          "UI/UX Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, adipisci modi? Earum ab itaque est similique ipsam eveniet, praesentium quis odio officia, eligendi accusantium, enim at atque obcaecati impedit. Sed.",
        price: 15,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        id: "5",
        title: "Nike Shoes 05",
        src: "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
        description:
          "UI/UX Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, adipisci modi? Earum ab itaque est similique ipsam eveniet, praesentium quis odio officia, eligendi accusantium, enim at atque obcaecati impedit. Sed.",
        price: 33,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        id: "6",
        title: "Nike Shoes 06",
        src: "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
        description:
          "UI/UX Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, adipisci modi? Earum ab itaque est similique ipsam eveniet, praesentium quis odio officia, eligendi accusantium, enim at atque obcaecati impedit. Sed.",
        price: 17,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    cart: [],
    total: 0,
  });

  const addCart = (id) => {
    const { products, cart } = state;
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      setState({ ...state, cart: [...cart, ...data] });
    } else {
      alert("The product has added tocart");
    }
  };

  const increase = (index) => {
    const { cart } = state;
    cart[index].count++;
    setState({ ...state, ...cart });
    getTotal();
  };

  const reduction = (index) => {
    const { cart } = state;
    if (cart[index].count > 1) {
      cart[index].count--;
      setState({ ...state, ...cart });
    }
    getTotal();
  };

  const remove = (id) => {
    const { cart } = state;
    if (window.confirm("Do you want ta delete this product")) {
      const data = cart.filter((item) => {
        return item.id !== id;
      });
      getTotal();
      setState({ ...state, cart: [...data] });
    }
  };
 

  
    const getTotal = () => {
    const { cart } = state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    setState({ ...state, total: res });
  };


  React.useEffect(()=>{
    const dataState = JSON.parse(localStorage.getItem('pruductsState'))
    if(dataState !== null){
      setState(dataState)
    }
}, [])

 React.useEffect(()=>{
      localStorage.setItem("pruductsState", JSON.stringify(state))
 })


 

  const { products, total, cart } = state;
 
  return (
    <DataContext.Provider
      value={{
        products,
        cart,
        addCart,
        reduction,
        increase,
        remove,
        total,
        getTotal,
        state
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
