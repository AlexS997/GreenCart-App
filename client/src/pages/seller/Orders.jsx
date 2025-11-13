import { useEffect, useState } from "react";
import { assets, dummyOrders } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";

const Order = () => {

  const {currency} = useAppContext()
  const [orders, setOrders] = useState([])

  const fetchOrders = async () => {
    setOrders(dummyOrders)
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll">
      <div className="md:p-10 p-4 space-y-4">
        <h2 className="text-lg font-medium">Orders List</h2>
        {orders.map((val, index) => (
          <div
            key={index}
            className="flex flex-col md:items-center md:flex-row gap-5 justify-between p-5 max-w-4xl rounded-md border border-gray-300"
          >
            <div className="flex gap-5 max-w-80">
              <img
                className="w-12 h-12 object-cover"
                src={assets.box_icon}
                alt="boxIcon"
              />

              <div className="">
                {val.items.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <p className="font-medium">
                      {item.product.name}{" "}
                      <span className='text-primary'>
                        x {item.quantity}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-sm md:text-base text-black/60">
              <p className="text-black/80">
                {val.address.firstName} {val.address.lastName}
              </p>
              
              <p>
                {val.address.street}, {val.address.city}
              </p>

              <p>
                {val.address.state}, {val.address.zipcode}, {val.address.country}
              </p>

              <p></p>

              <p>
                {val.address.phone}
              </p>
            </div>

            <p className="font-medium text-lg my-auto">
              {currency}{val.amount}
            </p>

            <div className="flex flex-col text-sm md:text-base text-black/60">
              <p>Method: {val.paymentType}</p>
              <p>Date: {new Date(val.createdAt).toLocaleDateString()}</p>
              <p>Payment: {val.isPaid ? "Paid" : "Pending"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
