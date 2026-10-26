import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MAP_IMAGE, buildings, classrooms, events, faculty, defaultLostFound } from "../data/campusData";
import { FeatureCard, PageTitle, Empty } from "../components/UI";

function CampusMap() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const visibleBuildings = buildings.filter(b => filter === "All" || b.type === filter);

  return (
    <section className="page">
      <PageTitle eyebrow="DIGITAL TWIN" title="Interactive Campus Map" subtitle="The uploaded Chitkara University guide map is used as the visual base. Click markers to explore campus locations." />
      <div className="map-toolbar">
        <div className="filter-pills">
          {["All", "Academic", "Library", "Food", "Sports", "Events", "Student Life", "Innovation"].map(item => (
            <button key={item} className={filter === item ? "pill active" : "pill"} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
        <span className="map-count">{visibleBuildings.length} locations</span>
      </div>

      <div className="map-layout">
        <div className="campus-map" role="application" aria-label="Interactive Chitkara campus map">
          <img src={MAP_IMAGE} alt="Chitkara University Punjab guide map" />
          <div className="map-overlay">
            {visibleBuildings.map(b => (
              <button
                key={b.id}
                className="map-marker"
                style={{ left: `${b.x}%`, top: `${b.y}%`, "--marker": b.color }}
                onClick={() => setSelected(b)}
                title={`Open ${b.name}`}
                aria-label={`Open ${b.name}`}
              >
                <span>⌂</span>
                <small>{b.name}</small>
              </button>
            ))}
          </div>
        </div>

        <aside className="map-info">
          {!selected ? (
            <div className="empty-state">
              <span className="big-icon">⌖</span>
              <h3>Select a map marker</h3>
              <p>Choose a building to see its category, purpose and nearby service.</p>
            </div>
          ) : (
            <div className="selected-card">
              <div className="selected-top">
                <span className="selected-symbol" style={{ background: selected.color }}>⌂</span>
                <button className="close-btn" onClick={() => setSelected(null)}>×</button>
              </div>
              <span className="tag">{selected.type}</span>
              <h2>{selected.name}</h2>
              <p>{selected.info}</p>
              <div className="info-list">
                <div><span>Location code</span><strong>{selected.room}</strong></div>
                <div><span>Map status</span><strong className="available">Open</strong></div>
              </div>
              <Link className="btn primary full" to={selected.type === "Food" ? "/canteen" : selected.type === "Events" ? "/events" : "/classrooms"}>
                Explore service
              </Link>
            </div>
          )}
        </aside>
      </div>

      <div className="legend">
        <strong>Map legend</strong>
        <span><i className="legend-dot academic"></i>Academic</span>
        <span><i className="legend-dot service"></i>Services</span>
        <span><i className="legend-dot activity"></i>Activities</span>
      </div>
    </section>
  );
}

export default CampusMap;
