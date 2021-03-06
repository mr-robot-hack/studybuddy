import React from 'react';
import HighlightedMarkdown from "./HighlightedMarkdown"


const Preview = ({ markdown }) => {
    return (
        <div className="col">
          <h2>Preview</h2>
          <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
        </div>
    )
}

export default Preview;
