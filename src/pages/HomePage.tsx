import React from "react";
import ReactDOM from "react-dom";
import { Button, DatePicker, version } from "antd";

const App = () => (
  <div className="HomePage">
    <h1>antd version: {version}</h1>
    <DatePicker />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
