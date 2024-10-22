import React, { useMemo, useState } from 'react';
import { createEditor, Transforms, Element as SlateElement } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const SlateTextEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const initialValue = [{ type: 'paragraph', children: [{ text: '' }] }];
  const[value,setValue]=useState()

  const insertImage = (editor, url) => {
    const image = { type: 'image', url, children: [{ text: '' }] };
    Transforms.insertNodes(editor, image);
  };

  const handleImageUpload = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    fetch('/your_image_upload_url', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => insertImage(editor, data.imageUrl));
  };

  return (
    <Slate editor={editor} value={initialValue} onChange={value => setValue(value)}>
      <Editable renderElement={({ element }) => element.type === 'image' ? <img src={element.url} alt="" /> : <p {...attributes}>{children}</p>} />
      <button onClick={() => document.querySelector('#fileInput').click()}>Upload Image</button>
      <input id="fileInput" type="file" style={{ display: 'none' }} onChange={(e) => handleImageUpload(e.target.files[0])} />
    </Slate>
  );
};

export default SlateTextEditor;
