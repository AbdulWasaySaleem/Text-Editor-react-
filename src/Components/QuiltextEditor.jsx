import React from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"

const QuiltextEditor = () => {

  const [value,setValue] = React.useState("")

  const modules = {
    toolbar:[
      [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }, { size: [] }],["bold", "italic", "underline", "strike", "blockquote", "code-block"],[
        {list: "ordered"}, {list: "bullet"}, {indent: "-1"}, {indent: "+1"}
      ],["link", "image", "video"],[{ color: [] }, { background: [] }],["clean"]
    ]
  }

  return (
<>
<div>
      <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />
    </div>
    <div>{value}</div>
    </>
  )
}

export default QuiltextEditor