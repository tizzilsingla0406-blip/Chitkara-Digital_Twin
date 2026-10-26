import React, { useMemo, useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { MAP_IMAGE, buildings, classrooms, events, faculty, defaultLostFound } from "../data/campusData";
import { FeatureCard, PageTitle, Empty } from "../components/UI";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError("");

        const url =
          "https://api.open-meteo.com/v1/forecast?latitude=30.516&longitude=76.659&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=Asia%2FKolkata";

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch weather");
        }

        const data = await response.json();
        setWeather(data.current);
      } catch (err) {
        setError("Unable to load weather. Please check your internet connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherInfo = (code) => {
    if (code === 0) return { icon: "☀️", text: "Clear Sky" };
    if ([1, 2].includes(code)) return { icon: "🌤️", text: "Partly Cloudy" };
    if (code === 3) return { icon: "☁️", text: "Overcast" };
    if ([45, 48].includes(code)) return { icon: "🌫️", text: "Foggy" };
    if ([51, 53, 55, 56, 57].includes(code))
      return { icon: "🌦️", text: "Drizzle" };
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code))
      return { icon: "🌧️", text: "Rainy" };
    if ([71, 73, 75, 77, 85, 86].includes(code))
      return { icon: "❄️", text: "Snowy" };
    if ([95, 96, 99].includes(code))
      return { icon: "⛈️", text: "Thunderstorm" };

    return { icon: "🌍", text: "Weather Update" };
  };

  const styles = {
    page: {
      minHeight: "80vh",
      padding: "35px 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #e8f3ff, #f7f9fc)",
      fontFamily: "Arial, sans-serif",
      boxSizing: "border-box",
    },
    card: {
      width: "100%",
      maxWidth: "650px",
      padding: "30px",
      textAlign: "center",
      background: "#ffffff",
      borderRadius: "22px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
      boxSizing: "border-box",
    },
    label: {
      color: "#c62828",
      fontSize: "12px",
      fontWeight: "bold",
      letterSpacing: "2px",
    },
    heading: {
      color: "#17345c",
      margin: "12px 0",
    },
    location: {
      color: "#64748b",
    },
    main: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      margin: "25px 0",
      flexWrap: "wrap",
    },
    icon: {
      fontSize: "70px",
    },
    temperature: {
      fontSize: "50px",
      margin: "0",
      color: "#17345c",
    },
    details: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
      gap: "12px",
      marginTop: "25px",
    },
    detail: {
      padding: "18px 10px",
      background: "#f1f6fc",
      borderRadius: "15px",
      color: "#17345c",
    },
    footer: {
      marginTop: "25px",
      color: "#94a3b8",
      fontSize: "12px",
    },
    message: {
      color: "#475569",
      padding: "25px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <p style={styles.label}>CHITKARA UNIVERSITY</p>
        <h1 style={styles.heading}>Campus Weather</h1>
        <p style={styles.location}>📍 Punjab Campus, Rajpura</p>

        {loading && (
          <p style={styles.message}>Loading current weather...</p>
        )}

        {!loading && error && (
          <div style={styles.message}>
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && weather && (
          <>
            <div style={styles.main}>
              <span style={styles.icon}>
                {getWeatherInfo(weather.weather_code).icon}
              </span>

              <div>
                <h2 style={styles.temperature}>
                  {Math.round(weather.temperature_2m)}°C
                </h2>
                <p>{getWeatherInfo(weather.weather_code).text}</p>
              </div>
            </div>

            <p style={styles.location}>
              Feels like {Math.round(weather.apparent_temperature)}°C
            </p>

            <div style={styles.details}>
              <div style={styles.detail}>
                <div>💧</div>
                <p>Humidity</p>
                <h3>{weather.relative_humidity_2m}%</h3>
              </div>

              <div style={styles.detail}>
                <div>💨</div>
                <p>Wind Speed</p>
                <h3>{weather.wind_speed_10m} km/h</h3>
              </div>

              <div style={styles.detail}>
                <div>🌧️</div>
                <p>Precipitation</p>
                <h3>{weather.precipitation} mm</h3>
              </div>
            </div>
          </>
        )}

        <p style={styles.footer}>
          Weather data powered by Open-Meteo
        </p>
      </div>
    </div>
  );
};

export default Weather;
