import s from './Table.module.scss';

interface TableProps {
  caption: string;
  children?: JSX.Element;
}

export const Table = ({ caption, children }: TableProps) => {
  return (
    <table className={s.table}>
      <caption className={s.caption}>{caption}</caption>
      {children}
    </table>
  );
};
