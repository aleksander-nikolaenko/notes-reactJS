import React from 'react';
import s from './PageWrapper.module.scss';

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={s.container}>{children}</div>;
};
