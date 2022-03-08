import React from 'react';
import { useState } from 'react';
import Editor from './Editor';

function App() {
  const [htmlValue, setHtmlValue] = useState('');
  const [cssValue, setCssValue] = useState('');
  const [javascriptValue, setJsValue] = useState('');

  return (
    <div>
      <div className="pane top-pane">
        <Editor
          value={htmlValue}
          handleChangeValue={setHtmlValue}
          name={'HTML'}
          language={'xml'}
        />
        <Editor
          value={cssValue}
          handleChangeValue={setCssValue}
          name={'CSS'}
          language={'css'}
        />
        <Editor
          value={javascriptValue}
          handleChangeValue={setJsValue}
          name={'JS'}
          language={'javascript'}
        />
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
