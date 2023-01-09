import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("All text cleared", "success");
  };
  const handleOnChange = (event) => {
    // console.log("Onchange");
    setText(event.target.value);
  };
  const [text, setText] = useState(""); // see react hooks docs
  //   text = "new Text"; // error bcoz we cannot directly change state, we can only change state using setText func
  //   setText("new Text"); // this is correct way
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2 className="my-2">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            style={{
              color: props.mode === "dark" ? "white" : "#042743",
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-1 my-1" onClick={handleClearText}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters{" "}
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
