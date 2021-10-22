import Plane from "./Plane";

export function Planes({ planes, deletePlane, showModal }) {
  return (
    <div className="lentele">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" className="table-info">
              plane ID:
            </th>
            <th scope="col" className="table-info">
              from where:
            </th>
            <th scope="col" className="table-info">
              airline:
            </th>
            <th scope="col" className="table-info">
              arrival date:
            </th>
            <th scope="col" className="table-info">
              is late (nepadaryta)
            </th>
            <th scope="col" className="table-info">
              Edit plane info:
            </th>
            <th scope="col" className="table-info">
              Delete plane:
            </th>
          </tr>
        </thead>
        {planes.map((plane) => (
          <Plane
            key={plane.id}
            plane={plane}
            deletePlane={deletePlane}
            showModal={showModal}
          />
        ))}
      </table>
    </div>
  );
}
