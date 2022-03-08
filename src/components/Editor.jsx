import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled } from 'react-codemirror2';

export default function Editor ({ name, language, value, handleChangeValue }) {
  const [open, setOpen] = useState(true);

  const handleChange = (_, __, value) => {
    handleChangeValue(value);
  };

  return (
    <div className={`container ${open ? '' : 'collapsed'}`}>
      <div className="title">
        {name}
        <button className="open-close" onClick={() => setOpen(!open)}>
          <img src={open ? 'src/close_fullscreen.svg' : 'src/open_full.svg'} height={24} width={24} alt="o/c" />
        </button>
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
