import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MAP_IMAGE, buildings, classrooms, events, faculty, defaultLostFound } from "../data/campusData";
import { FeatureCard, PageTitle, Empty } from "../components/UI";

function Dashboard() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return [
      ...buildings.map(b => ({ ...b, resultType: "Building" })),
      ...classrooms.map(c => ({ ...c, name: c.id, resultType: "Classroom" })),
      ...faculty.map(f => ({ ...f, resultType: "Faculty" }))
    ].filter(item =>
      Object.values(item).some(value => String(value).toLowerCase().includes(q))
    ).slice(0, 7);
  }, [query]);

  function goToResult(item) {
    if (item.resultType === "Classroom") navigate("/classrooms");
    else if (item.resultType === "Faculty") navigate("/faculty");
    else navigate("/map");
  }

  return (
    <section className="page">
      <div className="hero">
        <div className="hero-copy">
          <span className="eyebrow">DIGITAL CAMPUS PROJECT</span>
          <h1>Explore Your Potential with CHITKARA UNIVERSITY</h1>
          <p>
            Chitkara University, ranked No. 1* in India, is recognised as one of the Best** colleges in the country across Engineering, Management and key disciplines. Situated just 30 km from Chandigarh and consistently securing top positions in national and global rankings, we offer industry-led programs, expert faculty, modern facilities and access to 2,000+ recruiters, preparing you for successful careers in India and abroad.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" to="/map">Open Interactive Map</Link>
            <Link className="btn secondary" to="/classrooms">Find a Classroom</Link>
          </div>
        </div>
        <div className="hero-stat-card">
          <div className="mini-map">
            <img src={MAP_IMAGE} alt="Chitkara University campus guide map" />
            <span className="pulse-dot dot-one"></span>
            <span className="pulse-dot dot-two"></span>
            <span className="pulse-dot dot-three"></span>
          </div>
        </div>
      </div>

      <div className="search-wrap">
        <span>⌕</span>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search building, classroom, faculty or department..."
          aria-label="Campus search"
        />
        {results.length > 0 && (
          <div className="search-results">
            {results.map((item, index) => (
              <button key={index} onClick={() => goToResult(item)}>
                <span className="result-icon">{item.resultType === "Building" ? "⌂" : item.resultType === "Faculty" ? "◉" : "▦"}</span>
                <span>
                  <strong>{item.name || item.id}</strong>
                  <small>{item.resultType} • {item.building || item.department || item.type}</small>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="section-heading">
        <div>
          <span className="eyebrow">CAMPUS SERVICES</span>
          <h2>Everything in one place</h2>
        </div>
      </div>

      <div className="feature-grid">
        <FeatureCard icon="⌖" title="Interactive Buildings" text="Click campus markers and view building information." link="/map" />
        <FeatureCard icon="▦" title="Classroom Finder" text="Search rooms by department, floor and capacity." link="/classrooms" />
        <FeatureCard icon="◷" title="Event Locations" text="See upcoming events and where they happen." link="/events" />
        <FeatureCard icon="☕" title="Canteen Menu" text="Check today's food, price and availability." link="/canteen" />
        <FeatureCard icon="◉" title="Faculty Search" text="Find faculty offices and availability." link="/faculty" />
        <FeatureCard icon="♢" title="Lost & Found" text="Post or browse lost and found campus items." link="/lost-found" />
      </div>

      <div className="dashboard-bottom">
        <div className="panel">
          <div className="panel-title">
            <div><span className="eyebrow">UPCOMING</span><h3>Campus Events</h3></div>
            <Link to="/events">View all →</Link>
          </div>
          {events.slice(0, 3).map(event => (
            <div className="event-row" key={event.id}>
              <div className="event-date"><strong>{event.date.split(" ")[0]}</strong><span>{event.date.split(" ")[1]}</span></div>
              <div><strong>{event.title}</strong><span>{event.time} • {event.location}</span></div>
            </div>
          ))}
        </div>

        <div className="panel quick-panel">
          <span className="eyebrow">PROJECT STACK</span>
          <h3>Syllabus coverage</h3>
          <ul className="stack-list">
            <li>HTML5 semantic structure + accessibility</li>
            <li>CSS3, Flexbox, Grid + responsive media queries</li>
            <li>JavaScript ES6+, DOM, JSON + localStorage</li>
            <li>React components, props, state + hooks</li>
            <li>React Router, nested/dynamic navigation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
