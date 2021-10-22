import { useState } from "react";

export function NewPlane({ addPlane }) {
  const [from_town, setFrom_town] = useState("");
  const [airline, setAirline] = useState("");
  const [arrival_time, setArrival_time] = useState("");
  const [is_late, setIs_late] = useState("");

  const control = (e, what) => {
    switch (what) {
      case "from_town":
        setFrom_town(e.target.value);
        break;
      case "airline":
        setAirline(e.target.value);
        break;
      case "arrival_time":
        setArrival_time(e.target.value);
        break;
      case "is_late":
        setIs_late(e.target.value);
        break;
    }
  };

  const add = () => {
    addPlane({
      from_town: from_town,
      airline: airline,
      arrival_time: arrival_time,
      is_late: is_late,
    });
    setFrom_town("");
    setAirline("");
    setArrival_time("");
    setIs_late("");
  };

  return (
    <div className="form-container">
      <form className="forma">
        <label>From what city:</label>
        <input
          type="text"
          placeholder="enter city"
          value={from_town}
          onChange={(e) => control(e, "from_town")}
        />
        <label>Which airline: </label>
        <input
          type="text"
          placeholder="enter airline"
          value={airline}
          onChange={(e) => control(e, "airline")}
        />
        <label>Arrival date:</label>
        <input
          type="date"
          value={arrival_time}
          onChange={(e) => control(e, "arrival_time")}
        />
        <label> ar veluoja? </label>
        <input
          type="number"
          value={is_late}
          onChange={(e) => control(e, "is_late")}
        />
        <button className="btn btn-success" onClick={add}>
          Add new plane
        </button>
      </form>
    </div>
  );
}
