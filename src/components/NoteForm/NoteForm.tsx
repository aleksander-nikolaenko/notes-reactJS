import { MainButton } from 'components/Buttons/MainButton';
import s from './NoteForm.module.scss';
import { CATEGORY_LIST } from 'constants/consts';

interface NoteFormProps {
  onClickClose?: () => void;
  onClickSave?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const NoteForm = ({ onClickClose, onClickSave }: NoteFormProps) => {
  return (
    <form onSubmit={onClickSave} className={s.form}>
      <div className={s.formField}>
        <label className={s.formInputLabel}>Name*</label>
        <input
          className={s.noteNameInput}
          id='noteName'
          type='text'
          placeholder='Enter note name'
          required
        />
      </div>

      <div className={s.formField}>
        <label className={s.formInputLabel}>Category*</label>
        <select className={s.noteCategorySelect} required id='noteCategory'>
          {CATEGORY_LIST.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className={s.formField}>
        <label className={s.formInputLabel}>Content*</label>
        <textarea
          className={s.noteContentInput}
          id='noteContent'
          rows={1}
          placeholder='Enter note content'
          required
        ></textarea>
      </div>

      <div className={s.buttonWrapper}>
        <MainButton type='submit' text='Save' />
        <MainButton onClick={onClickClose} text='Close' />
      </div>
    </form>
  );
};
