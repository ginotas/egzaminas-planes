function Plane({ plane, deletePlane, showModal }) {
    
  const dateFormat = (date) => {
    date = date.split("-");
    let day = [];
    day.push(date[2][0]);
    day.push(date[2][1]);
    day = day.join("");
    let newDate = [];
    newDate.push(date[0]);
    newDate.push(date[1]);
    newDate.push(day);
    date.push(day);
    return newDate.join(":");
  };

  return (
    <tbody>
      <tr>
        <td>{plane.id}</td>
        <td>{plane.from_town}</td>
        <td>{plane.airline}</td>
        <td>{dateFormat(plane.arrival_time)}</td>
        <td>{plane.is_late}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => showModal(plane.id)}
          >
            Edit plane
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => deletePlane(plane.id)}
          >
            Delete plane
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default Plane;
