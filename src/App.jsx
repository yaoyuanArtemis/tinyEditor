// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import Editor from "@tinymce/tinymce-react";
import { useEffect } from "react";
import tinymce from "tinymce";

function App() {
  let initObj = {
    selector: "#mytiny",
    statusbar: true,
    menubar: true,
    skin: "oxide-dark",
    toolbar:
      "a11ycheck addcomment showcomments casechange checklist code export formatpainter image editimage pageembed permanentpen table tablechecklist tinycomments toc",
  };
  useEffect(() => {
    tinymce.init(initObj);
  });

  function send() {
    console.log(tinymce.get("mytiny").getContent({ format: "text" }));
  }

  function setContent() {
    tinymce.get("mytiny").setContent("<p>Hello World</p>");
  }

  return (
    <>
      <div id="mytiny"></div>
      <button onClick={send}>发送</button>
      <button onClick={setContent}>设置</button>
    </>
  );
}

export default App;
