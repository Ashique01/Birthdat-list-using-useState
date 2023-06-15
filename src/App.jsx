import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import img from "../src/cse_image.jpg";
import data from "./data";
import Person from "./person";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <section
      className="d-flex  justify-content-center"
      style={{ marginTop: "15rem" }}
    >
      <div className="card" style={{ width: "25rem", minHeight: "30rem" }}>
        <div className="card-body">
          <h4 className="card-title">
            {people.length} persons have birthday today
          </h4>
          <Person people={people} />
          <div class="d-grid gap-2 col-6 mx-auto">
            <button
              class="btn btn-primary"
              type="button"
              onClick={() => setPeople([])}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
