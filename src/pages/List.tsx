import React, { useEffect } from 'react';
import { MemoList } from '../components/MemoList';
import { useMemo } from '../hooks/useMemo';

export const List: React.FC = () => {
  const {
    //memoList,
    setMemoList,
    //showRegisterMemoModalFlg,
    setShowRegisterMemoModalFlg,
    //showDeleteMemoModalFlg,
    //setShowDeleteMemoModalFlg,
  } = useMemo();

  const loadMemoList = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const storageMemoList: any[] = [];
    //JSON.parse(localStorage.getItem('memoList')) || [];

    setMemoList(storageMemoList);
  };

  useEffect(() => {
    loadMemoList();
  }, []);
  return (
    <div>
      <div style={{ marginTop: '12px' }}>
        <button
          type="button"
          style={{ width: '120px' }}
          onClick={() => setShowRegisterMemoModalFlg(true)}
        >
          メモを登録
        </button>
        <div style={{ marginTop: '20px' }}>
          <MemoList />
        </div>
      </div>
    </div>
  );
};
