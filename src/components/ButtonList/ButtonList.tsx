import { IconButton } from 'components/Buttons/IconButton';
import s from './ButtonList.module.scss';
import { ButtonListProp } from 'constants/types';

interface ButtonListProps {
  listData: ButtonListProp[];
}

export const ButtonList = ({ listData }: ButtonListProps) => {
  return (
    <ul className={s.list}>
      {listData.map(button => {
        return (
          <li className={s.item} key={button.id}>
            <IconButton
              className={button.className}
              icon={button.icon}
              onClick={button.onClick}
            />
          </li>
        );
      })}
    </ul>
  );
};
