import { useEffect, useState } from "react";
import { getCartGadgets } from "../../Utility/addtoDB";


const Cart = () => {
  const [cart, setCart] = useState([]);
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  useEffect(() => {
    const storedCartList = getCartGadgets();
    const storedCartListInt = storedCartList.map((id) => parseInt(id));
    const cartList = gadgets.filter((gadget) =>
      storedCartListInt.includes(gadget.id)
    );
    setCart(cartList);
  }, [gadgets]);
   const prices = cart.map(c=> c.price)
   const totalPrice = prices.reduce((sum,price)=> sum+price, 0)
   const sumPrice = parseInt(totalPrice)


  return (
    <div>
        <div className="text-center text-xl">
            <p>Cart Items: {cart.length}</p>
            <p>Total Price: {sumPrice}</p>
        </div>

      {cart.map((c, index) => (
         
          <section key={index} className="max-w-4xl mx-auto bg-purple-50">
            <div className="flex items-center justify-center gap-10 my-4">
            <div className="avatar">
              <div className="w-24 rounded">
                <img src={c.image} />
              </div>
            </div>
            <div className="w-1/2">
              <div className="stat">
                <div className="stat-title">{c.description}</div>
                <div className="">Comes with {c.attachments}</div>
              </div>
            </div>
            <div className="">
              <div className="stat">
                <div className="stat-title">{c.name}</div>
                <div className="stat-value">${c.price}</div>
                <div className="stat-desc">Rating:{c.rating}</div>
              </div>
            </div>
          </div>

          </section>        
      ))}
    </div>
  );
};

export default Cart;
