import { useState } from "react";
import Cart from "./Cart/Cart";
import Wishlist from "./WIshlist/Wishlist";

const Dashboard = () => {
  const [cart, setCart] = useState("cart");
  const handleCart = (e) => {
    setCart(e);
  };
  return (
    <div>
      <div className="text-center bg-purple-600 py-6">
        <h1 className="text-4xl font-bold text-white my-4">Dashboard</h1>
        <p className="text-md text-white my-2">
          Explore the latest gadgets that will take your experience to <br />{" "}
          the next level. From smart devices to the coolest accessories, we have
          it all!
        </p>
        <div className="flex gap-4 justify-center my-6">
          <button
            onClick={() => handleCart("cart")}
            className={
              cart === "cart"
                ? "btn w-1/5 bg-purple-400 text-white rounded-full"
                : "btn w-1/5 bg-white text-purple-600 rounded-full"
            }
          >
            Cart
          </button>
          <button
            onClick={() => handleCart("wishlist")}
            className={
              cart === "cart"
                ? "btn w-1/5 bg-white text-purple-600 rounded-full"
                : "btn w-1/5 bg-purple-400 text-white rounded-full"
            }
          >
            Wishlist
          </button>
        </div>
      </div>
        {cart === "cart" ? <Cart></Cart> : <Wishlist></Wishlist>}
    </div>
  );
};

export default Dashboard;
