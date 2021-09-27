import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import SplitPane from "react-split-pane";

import SearchBar from "./searchbar";

import { Button } from "@material-ui/core";

function App() {
  const [url, setUrl] = useState(
    "https://test-ptab-docs-fe-assignment.s3.amazonaws.com/169020134"
  );

  const pdfs = [
    {
      id: 1,
      label: "Document 1",
      url: "https://test-ptab-docs-fe-assignment.s3.amazonaws.com/169020134"
    },
    {
      id: 2,
      label: "Document 2",
      url: "https://test-ptab-docs-fe-assignment.s3.amazonaws.com/169020136"
    },
    {
      id: 3,
      label: "Document 3",
      url: "https://test-ptab-docs-fe-assignment.s3.amazonaws.com/169020138"
    }
  ];
  return (
    <SplitPane split="vertical" minSize={250} defaultSize={200} maxSize={400}>
      <view>
        <SearchBar />
        <ul>
          {pdfs.map((data) => (
            <li key={data.id}>
              <Button id="docButton" onClick={() => setUrl(data.url)}>
                {" "}
                {data.label}
              </Button>
            </li>
          ))}
        </ul>
      </view>
      <div className="webviewer">
        <object width="100%" height="800" data={url} type="application/pdf">
          {" "}
        </object>
      </div>
    </SplitPane>
  );
}

export default App;
