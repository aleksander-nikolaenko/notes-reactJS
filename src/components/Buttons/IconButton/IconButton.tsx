import { memo } from 'react';

import s from './IconButton.module.scss';

interface IconButtonProps {
  className?: string;
  type?: 'button' | 'submit';
  icon: JSX.Element;
  onClick?: () => void;
}

export const IconButton = memo(
  ({
    className = '',
    type = 'button',
    icon,
    onClick = null,
  }: IconButtonProps) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${s.button} ${className}`}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
