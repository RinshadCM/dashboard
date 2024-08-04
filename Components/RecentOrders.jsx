import React from "react";
import { Constants } from "../Common/constants";
import { Col, Row } from "reactstrap";

const RecentOrders = () => {
  return (
    <div
      className="rounded px-3 py-3 ms-md-3 mt-4 mt-md-0"
      style={{ backgroundColor: "#292A31" }}
    >
      <h4 className="text-light mb-3">Recent Orders</h4>
     <div className="table-responsive"> <table className="w-100 table table-dark table-borderless">
        <thead>
          <tr style={{ color: "#6B7280", fontSize: "14px" }}>
            <th className="fw-normal">Customer</th>
            <th className="fw-normal">Order No.</th>
            <th className="fw-normal">Amount</th>
            <th className="fw-normal">Status</th>
          </tr>
        </thead>
            <tbody>
              {Constants.orders.map((item, index) => (
                <tr key={index} style={{ fontSize: "14px" }}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        className="profile-img rounded-circle me-2"
                        style={{
                          width: "30px",
                          height: "30px",
                          objectFit: "cover",
                        }}
                      />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td>{item.number}</td>
                  <td>${item.amount.toFixed(2)}</td>
                  <td>
                    <span
                      className="px-2 py-1 rounded-pill"
                      style={{
                        backgroundColor:
                          item.status === "Delivered"
                            ? "#22C55E"
                            : item.status === "Pending"
                            ? "#EAB308"
                            : "#EF4444",
                        color: "white",
                        fontSize: "12px",
                      }}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
      </table></div>
    </div>
  );
};

export default RecentOrders;
