import { useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { getActiveNotes, getArchivedNotes } from 'redux/notesSelectors';
import { getSummaryData } from 'utils/getSummaryData';

import { ICONS } from 'components/icons';

import { PageWrapper } from 'components/Wrappers/PageWrapper';
import { Table } from 'components/Table';
import { NoteForm } from 'components/NoteForm';
import { CreateNoteFormWrapper } from 'components/Wrappers/CreateNoteFormWrapper';
import { MainButton } from 'components/Buttons/MainButton';
import { ButtonList } from 'components/ButtonList';

import s from './HomePageComponent.module.scss';
import { Modal } from 'components/Modal';

const headerListMain = [
  { key: 'name', value: 'Name' },
  { key: 'created', value: 'Created' },
  { key: 'category', value: 'Category' },
  { key: 'content', value: 'Content' },
  { key: 'dates', value: 'Dates' },
  {
    key: 'buttons',
    value: (
      <ButtonList
        listData={[
          {
            id: 'active',
            className: s.buttonHeader,
            icon: <ICONS.ARCHIVE className={s.icon} />,
            onClick: () => {
              console.log('activeBtn');
            },
          },
          {
            id: 'archive',
            className: s.buttonHeader,
            icon: <ICONS.TRASH className={s.icon} />,
            onClick: () => {
              console.log('archiveBtn');
            },
          },
        ]}
      />
    ),
  },
];

const headerListSummary = [
  { key: 'category', value: 'Category' },
  { key: 'active', value: 'Active' },
  { key: 'archived', value: 'Archived' },
];

export const HomePageComponent = () => {
  const activeNotes = useAppSelector(getActiveNotes);
  const archivedNotes = useAppSelector(getArchivedNotes);
  const dispatch = useAppDispatch();

  const [showForm, setShowForm] = useState(false);

  return (
    <PageWrapper>
      <Table
        tableData={activeNotes}
        headerList={headerListMain}
        caption='Active Notes'
      />

      <MainButton
        className={s.createNoteButton}
        text='Create note'
        onClick={() => setShowForm(true)}
      />

      <Table
        tableData={getSummaryData(activeNotes, archivedNotes)}
        headerList={headerListSummary}
        caption='Summary Table'
      />
      <Modal
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
        }}
      >
        <p className={s.modalText}>Create New Note</p>
        <NoteForm
          onClickSave={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log('save');
            setShowForm(false);
          }}
          onClickClose={() => {
            setShowForm(false);
          }}
        />
      </Modal>
    </PageWrapper>
  );
};
