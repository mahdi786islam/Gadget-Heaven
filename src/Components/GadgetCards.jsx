import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const GadgetCards = ({ gadget }) => {
  const { image, name, price, id } = gadget;
  return (
    <div className="mb-4">
      <div className="card card-compact bg-white shadow-xl h-full">
        <figure className="w-1/2 h-1/2 mx-auto p-5">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions">
           <Link to={`/details/${id}`}> 
           <button className="btn bg-white text-black rounded-full hover:text-white hover:bg-purple-600">
              View Details
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetCards;
