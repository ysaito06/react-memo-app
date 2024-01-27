import React from 'react';
import Detail from './components/Detail';
import List from './components/List';

const screenType = 0;

const App: React.FC = () => {
  return (
    <>
      <h1>メモアプリ</h1>
      {screenType === 0 ? <List /> : <Detail />}
    </>
  );
};

export default App;
