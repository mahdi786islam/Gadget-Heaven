import { useEffect, useState } from "react";
import { getWishlist } from "../../Utility/addtoDB";


const Wishlist = () => {
    const [wishList, setWishList] = useState([]);
    const [gadgets, setGadgets] = useState([]);
    useEffect(() => {
      fetch("data.json")
        .then((res) => res.json())
        .then((data) => setGadgets(data));
    }, []);
    
    useEffect(() => {
      const storedWishList = getWishlist();
      const storedWishListInt = storedWishList.map((id) => parseInt(id));
      const wishList = gadgets.filter((gadget) =>
        storedWishListInt.includes(gadget.id)
      );
      setWishList(wishList);
    }, [gadgets]);
    return (
       
          <div>
              <div className="text-center text-xl">
                  <p>Cart Items: {wishList.length}</p>
              </div>
      
            {wishList.map((c, index) => (
               
                <section key={index} className="max-w-4xl mx-auto">
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
                      <div className="stat-desc">{c.rating}</div>
                    </div>
                  </div>
                  <div className="stats shadow">
                    <div className="stat">
                      <div className="stat-title">{c.name}</div>
                      <div className="stat-value">{c.price}</div>
                      <div className="stat-desc">{c.rating}</div>
                    </div>
                  </div>
                </div>
      
                </section>        
            ))}
          </div>
        );
    }
export default Wishlist;