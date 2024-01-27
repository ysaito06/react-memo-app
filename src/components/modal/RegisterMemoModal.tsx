import React, { useState } from 'react';
import { useMemoList } from '../../hooks/useMemoList';

interface Props {
  onClose: () => void;
}

export const RegisterMemoModal = ({ onClose }: Props) => {
  const { setMemoList } = useMemoList();
  const [memoTitle, setMemoTitle] = useState<string>('');
  const [memoContext, setMemoContext] = useState<string>('');

  /**
   * メモを登録
   */
  const registerMemo = () => {
    const localStorageMemoList: string = localStorage.getItem('memoList') ?? '';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newMemoList: any[] = localStorageMemoList
      ? JSON.parse(localStorageMemoList)
      : [];
    const now: Date = new Date();

    newMemoList.push({
      title: memoTitle,
      context: memoContext,
      date: `${String(now.getFullYear())}年${String(
        now.getMonth() + 1
      )}月${String(now.getDate())}日`,
    });

    localStorage.setItem('memoList', JSON.stringify(newMemoList));

    setMemoList(newMemoList);
  };

  const handleInputChangeTitle = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMemoTitle(event.target.value);
  };
  const handleInputChangeContext = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMemoContext(event.target.value);
  };

  return (
    <div className="modal">
      <div className="modal-background">
        <div className="modal-contents">
          <span className="close" onClick={onClose}>
            ×
          </span>
          <h2 className="title">メモを登録</h2>
          <div className="contents">
            <label className="input-title">
              <p>タイトル</p>
              <input
                value={memoTitle}
                type="text"
                onChange={(e) => handleInputChangeTitle(e)}
              />
            </label>
            <label className="input-context">
              <p>内容</p>
              <textarea
                value={memoContext}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e: any) => handleInputChangeContext(e)}
              />
            </label>
          </div>
          <div className="buttons">
            <button className="btn" onClick={onClose}>
              キャンセル
            </button>
            <button className="btn" onClick={registerMemo}>
              登録
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
