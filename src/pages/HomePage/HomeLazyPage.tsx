import { lazy } from 'react';

const LazyHomePage = lazy(() => import('./HomePage'));

const HomeLazyPage = () => <LazyHomePage />;

export default HomeLazyPage;
