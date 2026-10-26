import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MAP_IMAGE, buildings, classrooms, events, faculty, defaultLostFound } from "../data/campusData";
import { FeatureCard, PageTitle, Empty } from "../components/UI";

function Canteen() {
  const menu = [
    ["Masala Dosa", "₹70", "Breakfast", "Available"],
    ["Rajma Rice", "₹90", "Lunch", "Available"],
    ["Paneer Wrap", "₹80", "Snacks", "Available"],
    ["Veg Thali", "₹110", "Lunch", "Available"],
    ["Cold Coffee", "₹60", "Beverage", "Available"],
    ["Fresh Fruit Bowl", "₹65", "Healthy", "Limited"]
  ];
  const [search, setSearch] = useState("");

  return (
    <section className="page">
      <PageTitle eyebrow="FOOD COURT" title="Square One Menu" subtitle="Discover the delicious side of campus life! 🍕 Explore your favourite meals, grab a quick snack between classes, and enjoy fresh flavours with friends. Your next campus craving is just a click away!" />
      <div className="canteen-hero">
        <div><span className="eyebrow">TODAY AT THE CANTEEN</span><h2>Good food. Short queues.</h2><p></p></div>
        <span className="canteen-icon">☕</span>
      </div>
      <div className="controls panel">
        <input className="control-input" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search food..." />
      </div>
      <div className="menu-grid">
        {menu.filter(item => item.join(" ").toLowerCase().includes(search.toLowerCase())).map(([name, price, type, status]) => (
          <div className="menu-card" key={name}>
            <div className="food-icon">{type === "Beverage" ? "☕" : type === "Healthy" ? "🥗" : "🍽️"}</div>
            <div className="menu-info"><span>{type}</span><h3>{name}</h3><strong>{price}</strong></div>
            <span className={status === "Available" ? "status good" : "status limited"}>{status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Canteen;
