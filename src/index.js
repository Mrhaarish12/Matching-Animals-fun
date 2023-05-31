import { AppRegistry, Platform } from "react-native";

import App from "./App";

// import Print from "./Print";

if (Platform.OS === "android") {
  require("babel-polyfill");
}

AppRegistry.registerComponent("matchimals", () => App);
AppRegistry.registerComponent("matchimals.toLowerCase()", () => App);

if (Platform.OS === "web") {
  AppRegistry.runApplication("matchimals", {
    rootTag: document.getElementById("root"),
  });
}
