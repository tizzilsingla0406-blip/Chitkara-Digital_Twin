import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MAP_IMAGE, buildings, classrooms, events, faculty, defaultLostFound } from "../data/campusData";
import { FeatureCard, PageTitle, Empty } from "../components/UI";

function LostFound() {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem("chitkara-lost-found");
      return saved ? JSON.parse(saved) : defaultLostFound;
    } catch {
      return defaultLostFound;
    }
  });
  const [form, setForm] = useState({ title: "", type: "Lost", place: "", contact: "" });

  function saveItems(next) {
    setItems(next);
    localStorage.setItem("chitkara-lost-found", JSON.stringify(next));
  }

  function submit(e) {
    e.preventDefault();
    if (!form.title || !form.place || !form.contact) return;
    saveItems([
      { id: Date.now(), ...form, date: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) },
      ...items
    ]);
    setForm({ title: "", type: "Lost", place: "", contact: "" });
  }

  return (
    <section className="page">
      <PageTitle eyebrow="COMMUNITY" title="Lost & Found" subtitle="Create a local browser-stored pin for an item and browse recent reports." />
      <div className="lost-layout">
        <form className="panel lost-form" onSubmit={submit}>
          <span className="eyebrow">ADD REPORT</span>
          <h2>Post an item</h2>
          <label>Item name<input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="e.g. Black backpack" /></label>
          <label>Report type<select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}><option>Lost</option><option>Found</option></select></label>
          <label>Campus place<input value={form.place} onChange={e => setForm({ ...form, place: e.target.value })} placeholder="e.g. Library" /></label>
          <label>Contact / desk<input value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} placeholder="e.g. Student Centre" /></label>
          <button className="btn primary" type="submit">Add Lost & Found Pin</button>
        </form>

        <div className="lost-list">
          {items.map(item => (
            <article className="lost-card" key={item.id}>
              <div className={item.type === "Lost" ? "lost-icon lost" : "lost-icon found"}>{item.type === "Lost" ? "!" : "✓"}</div>
              <div className="lost-content">
                <div className="faculty-line"><h3>{item.title}</h3><span className="tag">{item.type}</span></div>
                <p>⌖ {item.place} • {item.date}</p>
                <small>Contact: {item.contact}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LostFound;
