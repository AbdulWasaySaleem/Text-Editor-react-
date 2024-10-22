import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const Tiny = () => {
  const [content, setContent] = useState('');

  const handleEditorChange = (content, editor) => {
    setContent(content);
  };

  return (
    <div>
      <Editor
        initialValue="<p>Write here...</p>"
        value={content}
        init={{
          height: 500,
          menubar: false,
          plugins: 'image code',
          toolbar: 'undo redo | image | bold italic underline | alignleft aligncenter alignright | code',
          automatic_uploads: true,
          images_upload_handler: function (blobInfo, success, failure) {
            const reader = new FileReader();
            reader.onload = () => {
              success(reader.result);
            };
            reader.readAsDataURL(blobInfo.blob());
          },
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
};

export default Tiny;
