import React from 'react';
import { memo, useMemoList } from '../hooks/useMemoList';

interface Props {
  onOpen: () => void;
  memoList: memo[];
}

export const MemoList = ({ onOpen, memoList }: Props) => {
  const { setScreenType, setSelectIndex } = useMemoList();
  const showMemoDetailPage = (index: number) => {
    setSelectIndex(index);
    setScreenType(1);
  };
  const showDeleteMemoModal = (index: number) => {
    setSelectIndex(index);
    onOpen();
  };

  return memoList.length > 0 ? (
    <ul className="memo-list">
      {memoList.map((memo: memo, i: number) => {
        return (
          <li
            onClick={() => showMemoDetailPage(i)}
            key={`${memo.title}_${memo.context}_${memo.date}_${i}`}
          >
            <p className="title">{memo.title}</p>
            <p className="date">登録日：{memo.date}</p>
            <span className="delete" onClick={() => showDeleteMemoModal(i)}>
              ×
            </span>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>メモは１件も登録されていません</p>
  );
};
