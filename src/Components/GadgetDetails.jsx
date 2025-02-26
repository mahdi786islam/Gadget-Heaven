import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart, addToWishList } from "../Utility/addtoDB";
import Swal from "sweetalert2";

const GadgetDetails = () => {
  const { id } = useParams();
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);
  const Id = parseInt(id);
  const gadget = gadgets.find((g) => g?.id === Id);
//   console.log(gadget);

const handleAddToCart = () => {
    addToCart(id)
    Swal.fire("Gadget Added to Cart");
}
const handleAddToWishlist = (id) => {
    addToWishList(id)
    Swal.fire("Gadget Added to Wishlist");
}
  return (
    <div>
        <div className="bg-purple-600 h-64 container mx-auto"></div>
      <div className="hero">
        <div className="hero-content bg-white relative rounded-xl bottom-32 p-10 flex-col lg:flex-row">
          <img
            src={gadget?.image}
            className="max-w-xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{gadget?.name}</h1>
            <p className="py-2">
              Description:{gadget?.description}
            </p>
            <p className="py-2">
              Price:${gadget?.price}
            </p>
            <h4>Color Options</h4>
              {gadget?.color_options.map((color, index)=> <p key={index} className="py-2">{index+1}.{color}</p>)}
              <p className="py-2">
              Rating:{gadget?.rating}
            </p>
            <button onClick={()=> handleAddToCart(gadget?.id)} className="btn bg-purple-600 rounded-full text-white">Add To Cart</button>
            <button onClick={()=> handleAddToWishlist(gadget?.id)} className="btn bg-purple-600 rounded-full text-white">Add To Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
