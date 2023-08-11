import { HeaderList, Note, SummaryData } from 'constants/types';
import s from './Table.module.scss';
import { ButtonList } from 'components/ButtonList';
import { ICONS } from 'components/icons';
import { CategoryIcon } from 'components/CategoryIcon';

interface TableProps {
  caption: string;
  tableData: SummaryData[] | Note[] | [];
  headerList: HeaderList[];
}

export const Table = ({ caption, tableData, headerList }: TableProps) => {
  return (
    <table className={s.table}>
      <caption className={s.caption}>{caption}</caption>

      <thead className={s.thead}>
        <tr className={s.headerRow}>
          {headerList.map((item, index) => (
            <th key={index} className={s.headerCol}>
              {item.value}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {tableData.map(rowData => {
          return (
            <tr key={rowData.id} className={s.tableRow}>
              {headerList.map((col, index) => {
                const key = (col.key as keyof typeof rowData) || 'buttons';
                if (key === 'buttons') {
                  return (
                    <td key={index} className={s.tableCol}>
                      <ButtonList
                        listData={[
                          {
                            id: 'edit',
                            className: s.buttonRow,
                            icon: <ICONS.EDIT className={s.icon} />,
                            onClick: () => {
                              console.log(`edit btn ${rowData.id}`);
                            },
                          },
                          {
                            id: 'archive',
                            className: s.buttonRow,
                            icon: <ICONS.ARCHIVE className={s.icon} />,
                            onClick: () => {
                              console.log(`archive btn ${rowData.id}`);
                            },
                          },
                          {
                            id: 'delete',
                            className: s.buttonRow,
                            icon: <ICONS.TRASH className={s.icon} />,
                            onClick: () => {
                              console.log(`delete btn ${rowData.id}`);
                            },
                          },
                        ]}
                      />
                    </td>
                  );
                }
                return (
                  <td key={index} className={s.tableCol}>
                    <div className={s.colWrapper}>
                      {index === 0 && (
                        <CategoryIcon
                          className={s.colIcon}
                          category={rowData.category}
                        />
                      )}
                      <p title={rowData[key]} className={s.tableText}>
                        {rowData[key]}
                      </p>
                    </div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
