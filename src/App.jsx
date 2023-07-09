import React from 'react';
import Head from './Components/Head';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Head />
    </div>
  );
};

export default App;
