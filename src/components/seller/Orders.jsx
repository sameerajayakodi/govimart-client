/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { assets, dummyOrders } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";

const Orders = () => {
  const { order, currency } = useAppContext();
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    setOrders(dummyOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll ">
      <div className="md:p-10 p-4 space-y-4">
        <h2 className="text-xl font-semibold">Orders List</h2>
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid md:grid-cols-4 gap-4 p-3 w-full max-w-6xl bg-white rounded-lg border border-gray-200 "
          >
            <div className="flex gap-4">
              <img
                className="w-12 h-12 object-cover"
                src={assets.box_icon}
                alt="boxIcon"
              />
              <div className="flex flex-col">
                {order.items.map((item, itemIndex) => (
                  <p key={itemIndex} className="text-sm font-medium">
                    {item.product.name}
                    <span className="text-primary"> x{item.quantity}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="text-sm text-black/70 leading-5">
              <p className="font-semibold">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>
                {order.address.street}, {order.address.city}
              </p>
              <p>
                {order.address.state}, {order.address.zipcode},{" "}
                {order.address.country}
              </p>
              <p>{order.address.phone}</p>
            </div>

            <div className="flex items-center font-semibold text-lg text-gray-800">
              {currency}
              {order.amount}
            </div>

            <div className="text-sm flex flex-col justify-center gap-1 text-black/70">
              <span>Method: {order.paymentType}</span>
              <span>
                Date: {new Date(order.createdAt).toLocaleDateString()}
              </span>
              <span>Payment: {order.isPaid ? "Paid" : "Pending"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
