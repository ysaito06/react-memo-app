import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { MemoList } from '../components/MemoList';
import { DeleteMemoModal } from '../components/modal/DeleteMemoModal';
import { RegisterMemoModal } from '../components/modal/RegisterMemoModal';
import { useDeleteModal } from '../hooks/useDeleteModal';
import { memo, useMemoList } from '../hooks/useMemoList';
import { useRegisterModal } from '../hooks/useRegisterModal';

export const List: React.FC = () => {
  const { memoList, setMemoList } = useMemoList();

  const loadMemoList = () => {
    const storageMemoList: memo[] = localStorage.getItem('memoList')
      ? JSON.parse(localStorage.getItem('memoList') || '{}')
      : [];

    setMemoList(storageMemoList);
  };

  const {
    isOpen: isOpenRegisterModal,
    open: openRegisterModal,
    close: closeRegisterModal,
  } = useRegisterModal();

  const {
    isOpen: isOpenDeleteModal,
    open: openDeleteModal,
    close: closeDeleteModal,
  } = useDeleteModal();

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
            <MemoList onOpen={openDeleteModal} memoList={memoList} />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpenRegisterModal} ariaHideApp={false}>
        <RegisterMemoModal
          onClose={closeRegisterModal}
          setMemoList={setMemoList}
        />
      </Modal>
      <Modal isOpen={isOpenDeleteModal} ariaHideApp={false}>
        <DeleteMemoModal onClose={closeDeleteModal} />
      </Modal>
    </>
  );
};
