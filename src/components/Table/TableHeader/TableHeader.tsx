import s from './TableHeader.module.scss';

interface TableHeaderProps {
  headerList: (string | JSX.Element)[];
}

export const TableHeader = ({ headerList }: TableHeaderProps) => {
  return (
    <thead className={s.thead}>
      <tr className={s.row}>
        {headerList.map((item, index) => (
          <th key={index} className={s.col}>
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};
