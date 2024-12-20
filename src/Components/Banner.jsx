const Banner = () => {
  return (
    <div className="container mx-auto text-center bg-purple-600 min-h-96 rounded-b-md">
      <div className="text-white py-24">
        <h1 className="text-5xl font-bold">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="text-xl mt-10 ">
          Explore the latest gadgets that will take your experience to <br />{" "}
          the next level. From smart devices to the coolest accessories, we have
          it all!
        </p>
        <button className="text-purple-600 bg-white px-5 py-2 rounded-full my-6 btn">
          Shop Now
        </button>
      </div>
      <img 
      className="w-1/2 h-1/2 absolute left-1/4 top-1/2 border-2 border-white p-4 rounded-md "
      src="https://i.ibb.co.com/1r7q1CP/banner.jpg" alt="" />
    </div>
  );
};

export default Banner;
