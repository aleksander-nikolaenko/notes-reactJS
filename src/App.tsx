import { Suspense } from 'react';
import HomePage from 'pages/HomePage';

import './styles/global.scss';
import './styles/variables.scss';

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  );
};
