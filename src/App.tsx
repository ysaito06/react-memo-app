import React from 'react';
import { Detail } from './pages/Detail';
import { List } from './pages/List';

const screenType = 0;

const App: React.FC = () => {
  return (
    <main style={{ width: '544px', padding: '20px' }}>
      <h1>メモアプリ</h1>
      {screenType === 0 ? <List /> : <Detail />}
    </main>
  );
};

export default App;
