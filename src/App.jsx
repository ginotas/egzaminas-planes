import "./App.css";
import { Top } from "./Top";
import { NewPlane } from "./NewPlane";
import { Planes } from "./Planes";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { Header } from "./Header";

function App() {
  const [planes, setPlanes] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [modalId, setModalId] = useState(0);
  const [totalPlane, setTotalPlane] = useState(0);

  // nuskaitom postus:
  useEffect(() => {
    axios.get("http://localhost:3003/planes").then((response) => {
      setPlanes(response.data);
    });
  }, [lastUpdate]);

  // pridedam nauja posta:
  const addPlane = (plane) => {
    axios.post("http://localhost:3003/planes", plane).then(() => {
      setLastUpdate(Date.now());
    });
  };

  // istrinam posta:
  const deletePlane = (id) => {
    axios.delete("http://localhost:3003/planes/" + id).then(() => {
      setLastUpdate(Date.now());
    });
  };

  // redaguojame irasa:
  const editPlane = (id, plane) => {
    axios.put("http://localhost:3003/planes/" + id, plane).then(() => {
      setLastUpdate(Date.now());
    });
  };

  // skaiciuojam irasus:
  useEffect(() => {
    axios.get("http://localhost:3003/planes/count").then((response) => {
      setTotalPlane(response.data[0].totalPlane);
    });
  }, [lastUpdate]);

  const getplane = (id) => {
    if (id === 0) {
      return [];
    }
    for (let i = 0; i < planes.length; i++) {
      if (planes[i].id === id) {
        return { ...planes[id] };
      }
    }
  };

  const showModal = (id) => {
    setModalId(id);
  };

  const hideModal = () => {
    setModalId(0);
  };

  // rusiuojam pagal miesto pavadinima:
  const sort = (by) => {
    const planesCopy = planes.slice();
    if ("from_town" === by) {
      planesCopy.sort((a, b) => {
        if (a.from_town > b.from_town) {
          return 1;
        }
        if (a.from_town < b.from_town) {
          return -1;
        }
        return 0;
      });
    }
    setPlanes(planesCopy);
  };

  // rusiuojam pagal atvykimo data:
  const sortDate = (by) => {
    console.log("veikia sort");
    const planesCopy = planes.slice();
    if ("arrival_time" === by) {
      planesCopy.sort(
        (a, b) => new Date(a.arrival_time) - new Date(b.arrival_time)
      );
    }
    setPlanes(planesCopy);
  };

  return (
    <>
      <Header></Header>
      <NewPlane addPlane={addPlane}></NewPlane>
      <Top sort={sort} sortDate={sortDate} totalPlane={totalPlane}></Top>
      <Planes
        planes={planes}
        deletePlane={deletePlane}
        showModal={showModal}
      ></Planes>
      <Modal
        id={modalId}
        plane={getplane(modalId)}
        hideModal={hideModal}
        editPlane={editPlane}
      ></Modal>
    </>
  );
}

export default App;
