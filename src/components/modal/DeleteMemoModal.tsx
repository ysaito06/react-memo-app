import React, { Dispatch, SetStateAction } from 'react';
import { memo } from '../../hooks/useMemoList';

interface Props {
  onClose: () => void;
  memoList: memo[];
  selectIndex: number;
  setMemoList: Dispatch<SetStateAction<memo[]>>;
}

export const DeleteMemoModal = ({
  onClose,
  memoList,
  selectIndex,
  setMemoList,
}: Props) => {
  const memoTitle = memoList[selectIndex].title;
  function deleteMemo() {
    const localStorageMemoList: string | null =
      localStorage.getItem('memoList');
    const newMemoList: memo[] = localStorageMemoList
      ? JSON.parse(localStorageMemoList)
      : [];

    newMemoList.splice(selectIndex, 1);

    localStorage.setItem('memoList', JSON.stringify(newMemoList));

    setMemoList(newMemoList);
    onClose();
  }
  return (
    <div className="modal">
      <div className="modal-background">
        <div className="modal-contents">
          <span className="close" onClick={onClose}>
            ×
          </span>
          <h2 className="title">メモを削除</h2>
          <div className="contents">
            <p>『{memoTitle}』のメモを削除してもよろしいですか</p>
          </div>
          <div className="buttons">
            <button className="btn" onClick={onClose}>
              キャンセル
            </button>
            <button className="btn" onClick={deleteMemo}>
              削除
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
