import React, { useRef, useState } from 'react';
import { JoditEditor } from 'jodit-react';

const JoditTextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = {
    readonly: false, 
    uploader: {
      insertImageAsBase64URI: false, 
      url: '/your_image_upload_url',
    },
  };

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={newContent => setContent(newContent)}
      />
    </div>
  );
};

export default JoditTextEditor;
