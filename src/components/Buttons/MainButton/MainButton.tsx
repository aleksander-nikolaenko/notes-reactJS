import { memo } from 'react';

import s from './MainButton.module.scss';

interface MainButtonProps {
  className?: string;
  type?: 'button' | 'submit';
  text: string;
  onClick?: () => void;
}

export const MainButton = memo(
  ({ type = 'button', onClick, text, className }: MainButtonProps) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${s.button} ${className}`}
      >
        {text}
      </button>
    );
  }
);

MainButton.displayName = 'MainButton';
