// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import Editor from "@tinymce/tinymce-react";
import { useEffect } from "react";
import tinymce from "tinymce";

function App() {
  // let initObj = {};
  useEffect(() => {
    tinymce.init({
      selector: "#mytiny",
      toolbar:
        "a11ycheck addcomment showcomments casechange checklist code export formatpainter image editimage pageembed permanentpen table tablechecklist tinycomments toc",
    });
  }, []);
  return (
    <>
      <div id="mytiny"></div>
    </>
  );
}

export default App;
