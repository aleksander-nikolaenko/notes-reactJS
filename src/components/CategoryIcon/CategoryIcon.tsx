import { Categories } from 'constants/types';
import s from './CategoryIcon.module.scss';
import { CATEGORY_LIST } from 'constants/consts';
import { ICONS } from 'components/icons';

interface CategoryIconProps {
  className?: string;
  category: Categories;
}

export const CategoryIcon = ({
  className = '',
  category,
}: CategoryIconProps) => {
  let icon;
  switch (category) {
    case CATEGORY_LIST[0]:
      icon = <ICONS.CART className={s.icon} />;
      break;
    case CATEGORY_LIST[1]:
      icon = <ICONS.THINKING className={s.icon} />;
      break;
    case CATEGORY_LIST[2]:
      icon = <ICONS.IDEA className={s.icon} />;
      break;

    default:
      icon = null;
      break;
  }

  return icon && <div className={`${s.wrapper} ${className}`}>{icon}</div>;
};
