import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MAP_IMAGE, buildings, classrooms, events, faculty, defaultLostFound } from "../data/campusData";
import { FeatureCard, PageTitle, Empty } from "../components/UI";

function Events() {
  const [category, setCategory] = useState("All");
  const filtered = events.filter(e => category === "All" || e.category === category);
  const categories = ["All", ...new Set(events.map(e => e.category))];

  return (
    <section className="page">
      <PageTitle eyebrow="CAMPUS CALENDAR" title="Event Locations" subtitle="Upcoming campus events with their date, time and physical location." />
      <div className="filter-pills spaced">
        {categories.map(c => <button key={c} className={category === c ? "pill active" : "pill"} onClick={() => setCategory(c)}>{c}</button>)}
      </div>
      <div className="events-grid">
        {filtered.map(event => (
          <article className="event-card" key={event.id}>
            <div className="event-banner"><span>{event.category}</span><strong>{event.date.split(" ")[0]}</strong></div>
            <div className="event-body">
              <h3>{event.title}</h3>
              <p>◷ {event.time}</p>
              <p>⌖ {event.location}</p>
              <Link className="text-link" to="/map">Show location on map →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Events;
