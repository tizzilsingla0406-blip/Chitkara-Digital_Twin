import React from "react";
import { Link } from "react-router-dom";

export function FeatureCard({ icon, title, text, link = "/" }) {
  return (
    <Link to={link} className="feature-card">
      <span className="feature-icon" aria-hidden="true">{icon}</span>
      <div className="feature-card-copy">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <span className="feature-arrow" aria-hidden="true">↗</span>
    </Link>
  );
}

export function PageTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="page-title">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
}

export function Empty({ text = "No results found." }) {
  return (
    <div className="empty-state" role="status">
      <span aria-hidden="true">⌕</span>
      <p>{text}</p>
    </div>
  );
}
