export function Top({sort, sortDate, totalPlane}) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>AIRPORT of Vilnius</h1>
          </div>
        </div>
        <div className="row">
          <div className="col sortas">
            <h3>SORT by:</h3>
          <button className="btn btn-outline-info" onClick={() => sort("from_town")}>Sort by town</button>
          <button className="btn btn-outline-info" onClick={() => sortDate("arrival_time")}>Sort by date</button>
        
            </div>
         
          <div className="col sortas">
          <h3>Total incoming plane count:</h3>
           <h4>There is {totalPlane} plane planned for arrival</h4>
            </div>
        </div>
      </div>
    );
  }
  