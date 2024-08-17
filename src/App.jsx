import React, { useState } from 'react';
import ForecastForm from './components/ForecastForm';
import ForecastResults from './components/ForecastResults';
import { Layout, Typography, Row, Col } from 'antd';
import AppFooter from './components/footer/AppFooter';

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  const [forecastData, setForecastData] = useState([]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header" style={{ 
        position: 'fixed', 
        width: '100%', 
        zIndex: 1,
        height: '64px', 
        lineHeight: '64px', 
        backgroundColor: '#001529', 
        padding: '0 24px'
      }}>
        <div className="logo">
          <Title level={3} style={{ color: 'white', margin: 0 }}>Forecastly.AI</Title>
        </div>
      </Header>
      <Layout>
        <Content style={{ 
          padding: '4px 16px', 
          marginTop: 64, 
          overflow: 'auto',
        }}>
          <Row gutter={[16, 16]} style={{ height: 'calc(100vh - 128px)', overflowY: 'auto' }}>
            <Col xs={24} md={8} lg={6} style={{ paddingRight: 0 }}>
              <div className="form-container" style={{ 
                background: '#fff', 
                padding: 16 
              }}>
                <ForecastForm setForecastData={setForecastData} />
              </div>
            </Col>
            <Col xs={24} md={16} lg={18}>
              <div className="table-container" style={{ 
                background: '#fff', 
                padding: 16 
              }}>
                <ForecastResults data={forecastData} />
              </div>
            </Col>
          </Row>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default App;
