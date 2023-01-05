//  Js is always written in { }
// import "./App.css";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is unable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been unabled", "success");
      document.title = "TextUtils Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been unabled", "success");
      document.title = "TextUtils Light Mode";
    }
  };
  return (
    // Below <> is react fragment used to return a bunch of tags in one tag
    <>
      {/* <BrowserRouter> */}
      <NavBar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <NavBar title="TextUtils" mode={mode} /> */}
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          showAlert={showAlert}
          mode={mode}
          heading="Enter the text to analyse below"
        />
        {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  mode={mode}
                  heading="Enter the text to analyse below"
                />
              }
            />
          </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
