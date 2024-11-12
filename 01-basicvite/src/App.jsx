import React from "react";
import Youtube from "./Youtube";

// this is HTML
const AnotherELement = (
  <a href="https://google.com" target="_blank">
    Google.COM
  </a>
);

// this is React
const AReactElement = React.createElement(
  "a", {
  href: "https://facebook.com",
  target: "_blank",
},
'FackBook '
);

function App() {
  return (
    <>
      <h1>Vite App</h1>
      <Youtube />

      <AnotherELement/>
      <AReactElement/>
    </>
  );
}

export default App;
