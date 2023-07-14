import React from 'react';

import { Layout } from 'antd';

const { Content } = Layout;

export default function DashboardLayout({ children }) {
  return (
    <Layout className="site-layout">
      <Content
        style={{
          padding: '10px 15px',
          margin: '15px auto',
          width: '100%',
          //maxWidth: '1100px',
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}
