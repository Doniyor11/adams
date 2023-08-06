import { Outlet } from 'react-router-dom';

import { Layout } from '@/widgets/layout';


export const PublicRoute = () => {

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
