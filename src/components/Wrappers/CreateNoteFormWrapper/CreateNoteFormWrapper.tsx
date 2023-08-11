import { ReactNode } from 'react';
import s from './CreateNoteFormWrapper.module.scss';

export const CreateNoteFormWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <div className={s.container}>{children}</div>;
};
