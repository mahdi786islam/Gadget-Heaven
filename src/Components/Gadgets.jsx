import { useEffect, useState } from "react";
import GadgetCards from "./GadgetCards";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("../../public/data.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  return (
    <div>
      <div className="mb-14">
        <h1 className="text-center font-bold text-4xl">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-6">
        <div className="col-span-1 flex flex-col items-center justify-start gap-6">
            <button className="btn w-full rounded-full bg-purple-600 hover:bg-white text-white hover:text-black">All Category</button>
            <button className="btn w-full rounded-full bg-purple-600 hover:bg-white text-white hover:text-black">Laptop</button>
            <button className="btn w-full rounded-full bg-purple-600 hover:bg-white text-white hover:text-black">Mobile</button>
            <button className="btn w-full rounded-full bg-purple-600 hover:bg-white text-white hover:text-black">Tablet</button>
            <button className="btn w-full rounded-full bg-purple-600 hover:bg-white text-white hover:text-black">Smart Watch</button>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-6">
            {gadgets.map(gadget => 
              <GadgetCards key={gadget.id} gadget={gadget}></GadgetCards>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
