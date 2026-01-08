import React from 'react';
import Timer from './components/Timer/Timer'
import Template1 from './components/Template/Template1';
import Template2 from './components/Template/Template2';

function App() {
  return (
    <div>
      <Template1 />
      <Template1 expiredIn={new Date(Date.now() + 23 * 60 * 60 * 1000).toISOString()} />
      <Template2 />

      <h1>Timer test</h1>
      <Timer expiredIn={new Date(2026, 2, 10).toISOString()} />
      <Timer expiredIn={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()} />
      <Timer expiredIn={new Date(Date.now() + 23 * 60 * 60 * 1000).toISOString()} />
      <Timer expiredIn={new Date().toISOString()} />
    </div>
  );
}

export default App;
