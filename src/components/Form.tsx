import "../index.css";
import { useState } from "react";
import { generateList } from "../utils/generateList";
import { PackingList } from "./PackingList";

export function Form() {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(1);
  const [climate, setClimate] = useState("");
  const [activity, setActivity] = useState("");
  const [transport, setTransport] = useState("");
  const [packingList, setPackingList] = useState<string[]>([]);

  const isValid =
    name !== "" &&
    destination !== "" &&
    days > 0 &&
    climate !== "" &&
    activity !== "" &&
    transport !== "";

  function showList() {
    const list = generateList(days, climate, activity, transport);
    setPackingList(list);
  }

  return (
    <div className="form-card">
      <h2>Reise planen</h2>

      <label>Name</label>
      <input
        type="text"
        placeholder="Dein Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Destination</label>
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <label>Dauer in Tagen</label>
      <input
        type="number"
        min="1"
        placeholder="Dauer in Tagen"
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
      />

      <label>Klima</label>
      <select value={climate} onChange={(e) => setClimate(e.target.value)}>
        <option value="">Klima wählen</option>
        <option>Heiss / Tropisch</option>
        <option>Mild</option>
        <option>Kalt / Arktisch</option>
      </select>

      <label>Aktivität</label>
      <select value={activity} onChange={(e) => setActivity(e.target.value)}>
        <option value="">Aktivität wählen</option>
        <option>Strand / Baden</option>
        <option>Wandern</option>
        <option>Ausgang / Party</option>
        <option>Business</option>
      </select>

      <label>Transport</label>
      <select value={transport} onChange={(e) => setTransport(e.target.value)}>
        <option value="">Transport wählen</option>
        <option>Flugzeug</option>
        <option>Zug</option>
        <option>Auto</option>
      </select>

      <button onClick={showList} disabled={!isValid}>
        Liste generieren
      </button>

      <PackingList packingList={packingList} />
    </div>
  );
}