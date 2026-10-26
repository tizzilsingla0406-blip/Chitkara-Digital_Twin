import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MAP_IMAGE, buildings, classrooms, events, faculty, defaultLostFound } from "../data/campusData";
import { FeatureCard, PageTitle, Empty } from "../components/UI";

function Faculty() {
  const [search, setSearch] = useState("");
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const filtered = faculty.filter(f => {
    const match = `${f.name} ${f.department} ${f.room} ${f.building}`.toLowerCase().includes(search.toLowerCase());
    return match && (!onlyAvailable || f.available);
  });

  return (
    <section className="page">
      <PageTitle eyebrow="DIRECTORY" title="Faculty Room Search" subtitle="Search by faculty name, department, office or building." />
      <div className="controls panel">
        <input className="control-input" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search faculty..." />
        <label className="check-label">
          <input type="checkbox" checked={onlyAvailable} onChange={e => setOnlyAvailable(e.target.checked)} />
          Show available only
        </label>
      </div>
      <div className="faculty-grid">
        {filtered.map(f => (
          <article className="faculty-card" key={f.id}>
            <div className="avatar">{f.name.split(" ").slice(-1)[0][0]}</div>
            <div className="faculty-main">
              <div className="faculty-line"><h3>{f.name}</h3><span className={f.available ? "status good" : "status busy"}>{f.available ? "Available" : "Busy"}</span></div>
              <p>{f.department}</p>
              <div className="faculty-meta"><span>⌂ {f.building}</span><strong>Room {f.room}</strong></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Faculty;
