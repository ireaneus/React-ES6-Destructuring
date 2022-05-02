import React from "react";
import Entry from "./Entry";
import cars from "../practice";

function createEntry(carsEntry) {
  return (
    <Entry
      key={carsEntry.model}
      model={carsEntry.model}
      topColor={carsEntry.coloursByPopularity[0]}
      topSpeed={carsEntry.speedStats.topSpeed}
    />
  );
}

function App() {
  return (
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
      </tr>
      {cars.map(createEntry)}
    </table>
  );
}

export default App;
