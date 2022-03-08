import React from 'react';
import { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Editor from './Editor';

function App() {
  const [htmlValue, setHtmlValue] = useLocalStorage('html', '');
  const [cssValue, setCssValue] = useLocalStorage('css', '');
  const [javascriptValue, setJsValue] = useLocalStorage('js', '');
  const [srcDocument, setSrcDocument] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDocument(`
        <html>
          <body>${htmlValue}</body>
          <style>${cssValue}</style>
          <script>${javascriptValue}</script>
        </html>
      `);
    }, 500);

    return () => clearTimeout(timeout);
  }, [htmlValue, cssValue, javascriptValue]);

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
          srcDoc={srcDocument}
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
