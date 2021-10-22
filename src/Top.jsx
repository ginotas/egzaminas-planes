export function Top({sort, sortDate, totalPlane}) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>AIRPORT</h1>
          </div>
        </div>
        <div className="row">
          <div className="col sortas">
            <h3>SORT by:</h3>
          <button className="btn btn-outline-info" onClick={() => sort("from_town")}>Sort by town</button>
          <button className="btn btn-outline-info" onClick={() => sortDate("arrival_time")}>Sort by date</button>
        
            </div>
         
          <div className="col sortas">
          <h3>Total plane count:</h3>
           <h4>How many planes we have: {totalPlane}</h4>
            </div>
        </div>
      </div>
    );
  }
  