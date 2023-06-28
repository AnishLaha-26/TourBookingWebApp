"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const antd_1 = require("antd");
require("antd/dist/antd.css");
require("./index.css");
react_dom_1.default.render(react_1.default.createElement("div", { className: "Home Page" },
    react_1.default.createElement("h1", null,
        "antd version: ",
        antd_1.version),
    react_1.default.createElement(antd_1.DatePicker, null),
    react_1.default.createElement(antd_1.Button, { type: "primary", style: { marginLeft: 8 } }, "Primary Button")), document.getElementById("root"));
//# sourceMappingURL=HomePage.js.map