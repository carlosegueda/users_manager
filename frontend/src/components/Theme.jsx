import { useState, useEffect } from "react";
import "../css/theme.css";

export default function Theme() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.body.className = lightMode ? "light-theme" : "dark-theme";
    console.log("Modo oscuro?", lightMode);
  }, [lightMode]);

  return (
    <div className="theme">
      <label className="switch-label">
        <input
          type="checkbox"
          className="checkbox"
          checked={lightMode}
          onChange={() => setLightMode(!lightMode)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}
