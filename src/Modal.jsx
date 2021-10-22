import { useState, useEffect } from "react";

export function Modal({ plane, id, hideModal, editplane }) {

  const [from_town, setFrom_town] = useState("");
  const [airline, setAirline] = useState("");
  const [arrival_time, setArrival_time] = useState("");
  const [is_late, setIs_late] = useState("");

  useEffect(() => {
    setFrom_town(plane.from_town);
    setAirline(plane.airline);
    setArrival_time(plane.arrival_time);
    
  }, [plane]);

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

  const edit = () => {
      
    editplane(id, {
      from_town: from_town,
      airline: airline,
      arrival_time: arrival_time,
      is_late: is_late,
    });
    hideModal();
    setFrom_town("");
    setAirline("");
    setArrival_time("");
    setIs_late("");
  };

  if (id === 0) {
      return null;
  }

  return (
    <div className="modalas">
      <form className="forma">
        <input
          type="text"
          placeholder="from_town"
          value={from_town}
          onChange={(e) => control(e, "from_town")}
        />
        <input
          type="text"
          placeholder="airline"
          value={airline}
          onChange={(e) => control(e, "airline")}
        />
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
        <button className="btn btn-success" onClick={edit}>
          Edit plane
        </button>
        <button className="btn btn-warning" onClick={hideModal}>
          Cancel
        </button>
      </form>
    </div>
  );
}
