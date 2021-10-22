import Plane from "./Plane";

export function Planes({ planes, deletePlane, showModal }) {
  return (
    <div className="lentele">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" className="table-info">
              ID
            </th>
            <th scope="col" className="table-info">
              plane from which town
            </th>
            <th scope="col" className="table-info">
              what airline?
            </th>
            <th scope="col" className="table-info">
             arrival date?
            </th>
            <th scope="col" className="table-info">
              is late? 
            </th>
            <th scope="col" className="table-info">
              Edit
            </th>
            <th scope="col" className="table-info">
              Delete
            </th>
          </tr>
        </thead>
        {planes.map((plane) => (
          <Plane key={plane.id} plane={plane} deletePlane={deletePlane} showModal= {showModal} />
        ))}
      </table>
    </div>
  );
}


