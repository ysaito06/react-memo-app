import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { MemoList } from '../components/MemoList';
import { RegisterMemoModal } from '../components/modal/RegisterMemoModal';
import { useMemoList } from '../hooks/useMemoList';
import { useRegisterModal } from '../hooks/useRegisterModal';

export const List: React.FC = () => {
  const {
    //memoList,
    setMemoList,
  } = useMemoList();

  const loadMemoList = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const storageMemoList: any[] = [];
    //JSON.parse(localStorage.getItem('memoList')) || [];

    setMemoList(storageMemoList);
  };

  const {
    isOpen: isOpenRegisterModal,
    open: openRegisterModal,
    close: closeRegisterModal,
  } = useRegisterModal();

  useEffect(() => {
    loadMemoList();
  }, []);
  return (
    <>
      <div>
        <div style={{ marginTop: '12px' }}>
          <button
            type="button"
            style={{ width: '120px' }}
            onClick={openRegisterModal}
          >
            メモを登録
          </button>
          <div style={{ marginTop: '20px' }}>
            <MemoList />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpenRegisterModal}>
        <RegisterMemoModal onClose={closeRegisterModal} />
      </Modal>
    </>
  );
};
