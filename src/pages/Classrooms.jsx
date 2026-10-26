import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MAP_IMAGE, buildings, classrooms, events, faculty, defaultLostFound } from "../data/campusData";
import { FeatureCard, PageTitle, Empty } from "../components/UI";

function Classrooms() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [capacity, setCapacity] = useState("Any");

  const departments = ["All", ...new Set(classrooms.map(c => c.department))];

  const filtered = classrooms.filter(c => {
    const textMatch = `${c.id} ${c.building} ${c.floor} ${c.department}`.toLowerCase().includes(search.toLowerCase());
    const deptMatch = department === "All" || c.department === department;
    const capMatch = capacity === "Any" || c.capacity >= Number(capacity);
    return textMatch && deptMatch && capMatch;
  });

  return (
    <section className="page">
      <PageTitle eyebrow="FINDER" title="Classroom Finder" subtitle="Use controlled filters to quickly locate classrooms, labs and lecture halls." />
      <div className="controls panel">
        <input className="control-input" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search room or building..." />
        <select value={department} onChange={e => setDepartment(e.target.value)}>
          {departments.map(d => <option key={d}>{d}</option>)}
        </select>
        <select value={capacity} onChange={e => setCapacity(e.target.value)}>
          <option value="Any">Any capacity</option>
          <option value="40">40+</option>
          <option value="60">60+</option>
          <option value="80">80+</option>
        </select>
      </div>

      <div className="result-grid">
        {filtered.map(room => (
          <div className="room-card" key={room.id}>
            <div className="room-head">
              <span className="room-code">{room.id}</span>
              <span className="tag">{room.department}</span>
            </div>
            <h3>{room.building}</h3>
            <p>Floor: {room.floor}</p>
            <div className="room-meta">
              <span>👥 {room.capacity} seats</span>
              <Link to="/map">View on map →</Link>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && <Empty text="No classroom matches your search." />}
    </section>
  );
}

export default Classrooms;
