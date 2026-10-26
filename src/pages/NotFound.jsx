import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MAP_IMAGE, buildings, classrooms, events, faculty, defaultLostFound } from "../data/campusData";
import { FeatureCard, PageTitle, Empty } from "../components/UI";

function NotFound() {
  return (
    <section className="page center-page">
      <div className="empty-state">
        <span className="error-code">404</span>
        <h1>Page not found</h1>
        <p>The campus route you requested does not exist.</p>
        <Link className="btn primary" to="/">Back to dashboard</Link>
      </div>
    </section>
  );
}

export default NotFound;
