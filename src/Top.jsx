export function Top({ sort, sortDate, totalPlane, airlinesCount }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col sortas">
          <h3>SORT by:</h3>
          <button
            className="btn btn-outline-info"
            onClick={() => sort("from_town")}
          >
            Sort by town name
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => sortDate("arrival_time")}
          >
            Sort by arrival date
          </button>
        </div>

        <div className="col sortas">
          <h3>Total incoming plane count:</h3>
          <h4>There is {totalPlane} plane planned for arrival</h4>
        </div>
      </div>
    </div>
  );
}
