// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import Editor from "@tinymce/tinymce-react";
import { useEffect, useState } from "react";
import tinymce from "tinymce";

function App() {
  const [popContent, setPopContent] = useState("");
  let initObj = {
    selector: "#mytiny",
    statusbar: true,
    menubar: true,
    license_key: "gpl",
    skin: "oxide-dark",
    puglin: ["table", "image", "code", "red", "emoji"],
    setup(editor) {
      editor.ui.registry.addButton("red", {
        icon: "help",
        toolbar: "red",
        onAction: () => {
          editor.selection.setContent(
            `<span style="color:red">${editor.selection.getContent()}</span>`
          );
        },
      });

      editor.ui.registry.addButton("emoji", {
        icon: "emoji",
        toolbar: "emoji",
        onAction: () => {
          let _text = editor.selection.getContent();
          setPopContent(_text);
        },
      });
    },
    toolbar:
      "a11ycheck addcomment showcomments emoji red casechange checklist code export formatpainter image editimage pageembed permanentpen table tablechecklist tinycomments toc",
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
      <div id="mytiny" style={{ height: "100vh", width: "100vw" }}></div>
      <button onClick={send}>发送</button>
      <button onClick={setContent}>设置</button>
      <div>{popContent}</div>
    </>
  );
}

export default App;
