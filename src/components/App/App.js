import React, { useState } from "react";
import { handleChange, handleKeyEvents } from "./helper";

const config = {
  apikey: "7573e550-45df-11eb-9bb2-3fd81e31c3fd",
  // className, style,
};

const App = () => {
  const [address, setAddress] = useState("");
  const [predictions, setPredictions] = useState(false);

  // console.log(predictions);

  return (
    <div className="">
      <h1> Geocode Autocomplete implementation</h1>
      <input
        onChange={(e) => handleChange(e, setAddress)}
        onKeyDown={(e) => handleKeyEvents(e, address, config, setPredictions)}
        value={address}
        type="text"
      />
      {predictions && (
        <ul>
          {predictions.map((prediction) => (
            <li key="prediction"> {prediction}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
