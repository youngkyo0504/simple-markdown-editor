import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import CodeMirror, {
  Decoration,
  DecorationSet,
  EditorView,
  ReactCodeMirrorRef,
  StateEffect,
  StateField,
} from "@uiw/react-codemirror";
import MyList from "./List";
import { markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import "./markdown.css";

const initialValue = ``;
const MARKDOWN_KEY = "markdown_";
function App() {
  const [markdownValue, setMarkdown] = useState("");
  const _codeMirror = useRef<ReactCodeMirrorRef>(null);
  const [localStorageList, setLocalStorageList] = useState<string[]>([]);
  const [localStorageKeyName, setLocaStorageKeyName] = useState<string>("");

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const markdownKey = keys.filter((key) => key.startsWith(MARKDOWN_KEY));
    if (markdownKey.length === 0) {
      localStorage.setItem(MARKDOWN_KEY + "new_storage", "");
      markdownKey.push(MARKDOWN_KEY + "new_storage");
    }

    setLocalStorageList(markdownKey);
  }, []);
  const keyPressHandller = (e: React.KeyboardEvent) => {
    if (e.key === "i" && e.ctrlKey.valueOf()) {
      e.preventDefault();
      setMarkdown((markdownValue) => {
        const temp = markdownValue + "![name](url)";
        return temp;
      });
    }
    if (e.key === "b" && e.ctrlKey.valueOf()) {
      e.preventDefault();
      setMarkdown((markdownValue) => {
        const temp = markdownValue + "** **";
        if (_codeMirror.current?.state) {
          console.log(_codeMirror.current.state);
        }
        return temp;
      });
    }
  };

  const changeMarkDownView = (key: string) => {
    setLocaStorageKeyName(key);
    const text = localStorage.getItem(key);
    setMarkdown(text ? text : "");
  };

  return (
    <>
      <MyList
        localStorageList={localStorageList}
        changeMarkDownView={changeMarkDownView}
      />

      <div
        className="pt-10"
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        <CodeMirror
          theme={"dark"}
          style={{
            width: "50%",
            fontFamily: "Pretendard",
          }}
          value={markdownValue}
          basicSetup={false}
          onKeyDown={keyPressHandller}
          placeholder="Write your article"
          height="100vh"
          width="100%"
          extensions={[markdown({ codeLanguages: languages })]}
          onChange={(value, viewUpdate) => {
            setMarkdown(value);
            setLocaStorageKeyName((localStorageKeyName) => {
              localStorage.setItem(localStorageKeyName, value);
              return localStorageKeyName;
            });
          }}
          ref={_codeMirror}
        />
        <ReactMarkdown className="markdown" children={markdownValue} />
      </div>
    </>
  );
}

export default App;
