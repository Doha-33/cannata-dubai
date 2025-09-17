"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ApiClient from "@/Services/APIs";
import "./order.css";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function OrdersPage() {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState("Pending");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [orderLocation, setOrderLocation] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await ApiClient.get("data");
      setData(res || []);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!trackingId.trim().startsWith("CANN-")) {
      setError(t("tracking.invalidPrefix"));
      setOrderLocation(null);
      return;
    }

    try {
      const res = await ApiClient.get(`orders/by-serial/${trackingId}`);
      const foundOrder = res;

      if (!foundOrder) {
        setError(t("tracking.notFound"));
        setOrderLocation(null);
        return;
      }

      setOrderLocation({
        ...foundOrder,
        status: foundOrder.status.toLowerCase(),
      });

      setError("");
    } catch (err) {
      console.error(err);
      setError(t("tracking.notFound"));
      setOrderLocation(null);
    }
  };
const statusMap = {
  pending: "Pending",
  received: "Received",
  confirmed: "Confirmed",
  processing: "Processing",
  ready_for_pickup: "Ready for Pickup",
  out_for_delivery: "Out for Delivery",
  delivered: "Delivered",
 
};


  const statusTabs = [
    "Pending",
    "Received",
    "Confirmed",
    "Processing",
    "Ready for Pickup",
    "Out for Delivery",
    "Delivered",
    
  ];


  const filteredData = data.filter((o) => o.status === activeTab);

  const getBorderColor = () => {
    if (!trackingId) return "1px solid #ced4da";
    if (!trackingId.startsWith("CANN-")) return "1px solid #dc3545";
    return "1px solid #28a745";
  };



  return (
    <div className="orders-container">
    

      <section className="tracking-section">
        <p className="tracking-title">{t("Serial Number")}</p>
        <Form className="tracking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <Form.Group className="form-group">
              <Form.Control
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                style={{ border: getBorderColor() }}
                placeholder="CANN-XXXXX"
              />
            </Form.Group>
            <Button type="submit" className="track-button" disabled={loading}>
              {loading ? "Searching..." : t("tracking.trackOrderBtn")}
            </Button>
          </div>
        </Form>
        {error && <p className="error-message">{error}</p>}
      </section>

      {orderLocation && (
        <div className="timeline-box">
          <p>
            <strong>Serial Number :</strong> {trackingId} &nbsp;
            <strong>Status :</strong> {statusMap[orderLocation.status]}
          </p>
          <div className="order-status-timeline">
            {(() => {
              const allStatuses = [
                "pending",
                "received",
                "confirmed",
                "processing",
                "ready_for_pickup",
                "out_for_delivery",
                "delivered",
               
              ];
              return allStatuses.map((status, index) => {
                const isActive = status === orderLocation.status;
                const isCompleted =
                  allStatuses.indexOf(orderLocation.status) > index;
                return (
                  <div className="status-step" key={status}>
                    <div
                      className={`circle ${
                        isActive ? "active" : isCompleted ? "completed" : ""
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span className="status-label">{statusMap[status]}</span>
                    {index !== allStatuses.length - 1 && (
                      <div className="line"></div>
                    )}
                  </div>
                );
              });
            })()}
          </div>
        </div>
      )}

 
      <section className="orders-section">
        <h2 className="orders-title">MY Orders</h2>
        <div className="status-tabs">
          {statusTabs.map((tab) => (
            <button
              key={tab}
              className={`status-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <p className="orders-count">
          {filteredData.length} of the orders have {activeTab}.
        </p>

        {loading ? (
          <div className="loading">Loading data...</div>
        ) : (
          <div className="orders-grid">
            {filteredData.map((order) => (
              <div className="order-card" key={order.serial_number}>
                <p>
                  <strong>Track:</strong>{" "}
                  {order.track || `${order.origin} → ${order.destination}`}
                </p>
                <p>
                  <strong>Total Amount:</strong> {order.total_amount}
                </p>
                <p>
                  <strong>Serial number:</strong> {order.serial_number}
                </p>

                <div className="parties">
                  <div className="party sender">
                    <h4>sender</h4>
                    <p>Name sender: {order.sender_name}</p>
                    <p>Phone sender: {order.sender_phone}</p>
                    <p>Address sender: {order.sender_address}</p>
                    <p>Email sender: {order.sender_email}</p>
                  </div>
                  <div className="party receiver">
                    <h4>receiver</h4>
                    <p>Name receiver: {order.receiver_name}</p>
                    <p>Phone receiver: {order.receiver_phone}</p>
                    <p>Delivered at: {order.delivered_at}</p>
                    <p>Email receiver: {order.receiver_email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredData.length === 0 && (
          <p className="no-orders">No data found for this status.</p>
        )}
      </section>
    </div>
  );
}
