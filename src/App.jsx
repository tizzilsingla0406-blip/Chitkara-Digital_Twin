
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import CampusMap from "./pages/CampusMap";
import Classrooms from "./pages/Classrooms";
import Events from "./pages/Events";
import Canteen from "./pages/Canteen";
import Faculty from "./pages/Faculty";
import LostFound from "./pages/LostFound";
import Weather from "./pages/Weather";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

import ProtectedRoutes from "./components/ProtectedRoutes";

import "./styles.css";

function App() {
  return (
    <div className="app-shell">
      <Routes>
        {/* Public login page */}
        <Route path="/login" element={<Login />} />

        {/* Protect all campus pages */}
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="main-content">
                  <Dashboard />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/map"
            element={
              <>
                <Header />
                <main className="main-content">
                  <CampusMap />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/classrooms"
            element={
              <>
                <Header />
                <main className="main-content">
                  <Classrooms />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/events"
            element={
              <>
                <Header />
                <main className="main-content">
                  <Events />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/canteen"
            element={
              <>
                <Header />
                <main className="main-content">
                  <Canteen />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/faculty"
            element={
              <>
                <Header />
                <main className="main-content">
                  <Faculty />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/lost-found"
            element={
              <>
                <Header />
                <main className="main-content">
                  <LostFound />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/weather"
            element={
              <>
                <Header />
                <main className="main-content">
                  <Weather />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/Weather"
            element={<Navigate to="/weather" replace />}
          />

          <Route
            path="*"
            element={
              <>
                <Header />
                <main className="main-content">
                  <NotFound />
                </main>
                <Footer />
              </>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
