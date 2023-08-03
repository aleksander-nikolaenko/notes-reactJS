import { PageWrapper } from 'components/Wrappers/PageWrapper';
import { Table } from 'components/Table';
import { TableHeader } from 'components/Table/TableHeader';

import s from './HomePageComponent.module.scss';

export const HomePageComponent = () => {
  return (
    <PageWrapper>
      <Table caption='Main Table'>
        <TableHeader
          headerList={['Name', 'Created', 'Category', 'Content', 'Dates', '']}
        />
      </Table>
    </PageWrapper>
  );
};
