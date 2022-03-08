import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled } from 'react-codemirror2';

export default function Editor ({ name, language, value, handleChangeValue }) {
  const handleChange = (editor, data, value) => {
    handleChangeValue(value);
  };

  return (
    <div className="container">
      <div className="title">
        {name}
        <button>o/c</button>
      </div>

      <Controlled
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </div>
  );
}
