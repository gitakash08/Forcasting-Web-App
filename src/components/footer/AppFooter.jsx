import React from 'react';
import { Layout, Typography, Space } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter = () => {
  return (
    <Footer style={{ 
      textAlign: 'center', 
      backgroundColor: '#001529', 
      color: 'white', 
      position: 'fixed', 
      bottom: 0, 
      width: '100%',
      height: '48px', 
      lineHeight: '52px', 
      padding: '0 24px' 
    }}>
      <Space direction="vertical">
        <Text style={{ color: 'white' }}>
          &copy; {new Date().getFullYear()} Powered by ML INFOMAP. All Rights Reserved.
        </Text>
      </Space>
    </Footer>
  );
};

export default AppFooter;
