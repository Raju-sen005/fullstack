import React from "react";

function Dashboard() {
  return (
    <>
      <div className="flex item-center justify-content-center">
        <aside className="flex item-center justify-content-center">
          <h2>Welcome Seller</h2>
          <div className="flex item-center justify-content-center">
            <div className="p">All Product</div>
            <div className="o">Orders</div>
            <div className="c">Customers</div>
            <div className="e">Earnings</div>
            <div className="r">Reviews</div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Dashboard;
