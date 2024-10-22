import React, { useRef, useState } from 'react'
import JoditEditor from 'jodit-react'

const MyEdit = () => {
  const editor = useRef(null)
  const [content,setContent]=useState("")
  return (
    <div>
      <label>Post Content </label>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={newContent => setContent(newContent)}
      />
    </div>
  )
}

export default MyEdit