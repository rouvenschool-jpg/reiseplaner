import "../index.css";
import { useState } from "react";

export function Form() {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(1);
  const [climate, setClimate] = useState("");
  const [activity, setActivity] = useState("");
  const [transport, setTransport] = useState("");

function consoleShow() {
  console.log("Name: " + name);
  console.log("Destination: " + destination);
  console.log("Dauer in Tagen: " + days);
  console.log("Klima: " + climate);
  console.log("Aktivität: " + activity);
  console.log("Transport: " + transport);
}
  return (
    <div className="form-card">
      <h2>Reise planen</h2>

      <input
        type="text"
        placeholder="Dein Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <input
        type="number"
        placeholder="Dauer in Tagen"
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
      />

      <select value={climate} onChange={(e) => setClimate(e.target.value)}>
        <option>Klima wählen</option>
        <option>Heiss / Tropisch</option>
        <option>Mild</option>
        <option>Kalt / Arktisch</option>
      </select>

      <select value={activity} onChange={(e) => setActivity(e.target.value)}>
        <option>Aktivität wählen</option>
        <option>Strand / Baden</option>
        <option>Wandern</option>
        <option>Ausgang / Party</option>
        <option>Business</option>
      </select>

      <select value={transport} onChange={(e) => setTransport(e.target.value)}>
        <option>Transport wählen</option>
        <option>Flugzeug</option>
        <option>Zug</option>
        <option>Auto</option>
      </select>

      <button onClick={consoleShow}>Liste generieren</button>
    </div>
  );
}
