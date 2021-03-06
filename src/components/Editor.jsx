import React, { ChangeEvent } from 'react'

const Editor = ({ markdown, setMarkdown }) => {
    return (
        <div class="col">
        <h2>
        Editor
        </h2>
        <textarea
          onChange={(e: ChangeEvent) => setMarkdown(e.target.value)}
          rows={20}
          value={markdown}
          />
      </div>
    )
}

export default Editor;
