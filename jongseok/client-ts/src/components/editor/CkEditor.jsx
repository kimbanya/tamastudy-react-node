import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CkEditor = (props) => {
  const initialState = {
    id: props.id,
    content: props.content,
    handleWYSIWYGInput: props.handleWYSIWYGInput,
    editor: ClassicEditor,
  };
  const [state, setState] = useState(initialState);
  return (
    <div className="Editor-content">
      <CKEditor
        editor={state.editor}
        data={state.content}
        config={{
          ckfinder: {
            // Upload the images to the server using the CKFinder QuickUpload command.
            uploadUrl:
              'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json',
          },
        }}
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          //state.handleWYSIWYGInput(props.id, data);
          console.log({ event, editor, data });
          console.log(state.content);
        }}
        onBlur={(editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(editor) => {
          console.log('Focus.', editor);
        }}
      />
    </div>
  );
};

export default CkEditor;
