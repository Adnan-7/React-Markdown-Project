import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = useState('## markdown preview');
  return (
    <main className='markdown'>
      <textarea
        className='input'
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}></textarea>
      <article className='result'>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </main>
  );
}

export default App;
