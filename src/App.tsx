import React from 'react';
import Template1 from './components/Template/Template1';
import Template2 from './components/Template/Template2';

function App() {
  return (
    <div>
      <Template1 bgImage={'/assets/wows-japan.png'} expiredIn={new Date(Date.now() + 23 * 60 * 60 * 1000).toISOString()} />
      <Template1 img={'/assets/present.png'} bgImage={'/assets/wallhaven.jpg'} />
      <Template2 bgImage={'/assets/ships.jpg'} />
      <Template2 img={'/assets/present.png'} bgImage={'/assets/wows-japan.png'} expiredIn={new Date(2026, 2, 10).toISOString()} />
    </div>
  );
}

export default App;
