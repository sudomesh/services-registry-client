import React from "react";
import ReactDOM from "react-dom";

import { ZoneFile } from './components/ZoneFile';

const Root = () => {
  return (
      <div>
          <h1>Example Zone File</h1>
          <ZoneFile />
      </div>
  );
};

ReactDOM.render(<Root />, document.querySelector("#react-root"));