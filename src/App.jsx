import React, { useState } from 'react';
import ForecastForm from './components/ForecastForm';
import ForecastResults from './components/ForecastResults';
import { Layout, Typography } from 'antd';

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  const [forecastData, setForecastData] = useState([]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        <div className="logo">
          <Title level={2} style={{ color: 'white' }}>Transporter Forecast</Title>
        </div>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 20 }}>
        <div className="site-layout-content">
          <ForecastForm setForecastData={setForecastData} />
          <ForecastResults data={forecastData} />
        </div>
      </Content>
    </Layout>
  );
};

export default App;
