import React, { useState } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate'

function TextEditor(props) {
  const [value, setValue] = useState(""); 

  const onChange = (value) => {
    setValue(value);
  }

  return (
    <div onChange= { onChange(value) }>
      
    </div>
  );

}

export default TextEditor;