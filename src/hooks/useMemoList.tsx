import { useState } from 'react';

export interface memo {
  title: string;
  context: string;
  date: string;
}

export const useMemoList = () => {
  const [screenType, setScreenType] = useState<number>(0);
  const [showDeleteMemoModalFlg, setShowDeleteMemoModalFlg] =
    useState<boolean>(false);
  const [showRegisterMemoModalFlg, setShowRegisterMemoModalFlg] =
    useState<boolean>(false);
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const [memoList, setMemoList] = useState<memo[]>([]);

  return {
    screenType,
    setScreenType,
    showDeleteMemoModalFlg,
    setShowDeleteMemoModalFlg,
    showRegisterMemoModalFlg,
    setShowRegisterMemoModalFlg,
    selectIndex,
    setSelectIndex,
    memoList,
    setMemoList,
  };
};
