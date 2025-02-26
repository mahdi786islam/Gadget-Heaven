import { useEffect, useState } from "react";
import GadgetCards from "./GadgetCards";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [filteredGadgets, setFilteredGadgets] = useState([]);

  useEffect(() => {
    fetch("../../public/data.json")
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data);
        setFilteredGadgets(data);
      });
  }, []);
  const handleCategory = (category) => {
    if (category === '') {
      setFilteredGadgets(gadgets);
    } else {
      const g = gadgets.filter(gadget => gadget.category === category);
      setFilteredGadgets(g);
    }
  };

  return (
    <div>
      <div className="mb-14">
        <h1 className="text-center font-bold text-4xl">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 flex flex-col items-center justify-start gap-6">
            <button onClick={()=> handleCategory('')} className="btn w-full rounded-full bg-purple-600 hover:bg-white text-white hover:text-black">All Category</button>
            <button onClick={()=> handleCategory('laptop')} className="btn w-full rounded-full bg-purple-600 hover:bg-white text-white hover:text-black">Laptop</button>
            <button onClick={()=> handleCategory('mobile')} className="btn w-full rounded-full bg-purple-600 hover:bg-white text-white hover:text-black">Mobile</button>
            <button onClick={()=> handleCategory('tablet')} className="btn w-full rounded-full bg-purple-600 hover:bg-white text-white hover:text-black">Tablet</button>
            <button onClick={()=> handleCategory('smartwatch')} className="btn w-full rounded-full bg-purple-600 hover:bg-white text-white hover:text-black">Smart Watch</button>
        </div>
        <div className="col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGadgets.map(gadget => 
              <GadgetCards key={gadget.id} gadget={gadget}></GadgetCards>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
