import React from 'react';
import {Editor, ConvertFromRaw, convertFromHTML} from 'draft-js';

const ReadonlyEditor = (props) => {
  const storedState =  convertFromHTML(props.storedState);
  return (
     <div className="readonly-editor">
       <Editor editorState={storedState} readOnly={true} /> 
     </div>
  );
}

export default ReadonlyEditor;