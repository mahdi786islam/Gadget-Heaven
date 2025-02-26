const Offers = () => {
  return (
    <div className="container mx-auto my-6">
        <div className="grid grid-cols-3 gap-6">
      <div className="stats bg-purple-600 text-primary-content">
        <div className="stat">
          <div className="stat-title">CashBack</div>
          <div className="stat-value">Bkash <br /> Payment</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">10%</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Deadline</div>
          <div className="stat-value">March 2025</div>
          <div className="stat-actions">
            <button className="btn btn-sm">Withdrawal</button>
            <button className="btn btn-sm">Deposit</button>
          </div>
        </div>
      </div>
      <div className="stats  bg-purple-600  text-primary-content">
        <div className="stat">
          <div className="stat-title">Selective Products</div>
          <div className="stat-value">Gadgets</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">Free</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Gadget Gifts</div>
          <div className="stat-value">Earphone</div>
          <div className="stat-actions">
            <button className="btn btn-sm">Mobile</button>
            <button className="btn btn-sm">Laptop</button>
          </div>
        </div>
      </div>
      <div className="stats  bg-purple-600  text-primary-content">
        <div className="stat">
          <div className="stat-title">Cash Prize</div>
          <div className="stat-value">Over 5000</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">Buying two products</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Giveaway</div>
          <div className="stat-value">Gadgets</div>
          <div className="stat-actions">
            <button className="btn btn-sm">Monday</button>
            <button className="btn btn-sm">Friday</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Offers;
