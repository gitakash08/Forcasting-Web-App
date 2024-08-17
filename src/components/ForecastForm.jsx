import React, { useState } from 'react';
import { Form, InputNumber, Button, message } from 'antd';
import axios from 'axios';

const ForecastForm = ({ setForecastData }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      setForecastData([]);
      const response = await axios.post('https://mlinfomap.org/forecasting/forecast', values);
      setForecastData(response.data);
    } catch (error) {
      message.error('Error fetching forecast data');
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{ num_transporters: 10 }}
      style={{ maxWidth: 600, margin: '0 auto' }}
    >
      <Form.Item
        label="Month (Any Future Month)"
        name="month"
        rules={[
          { required: true, message: 'Please enter the month' },
          { type: 'number', min: 1, max: 12, message: 'Month must be between 1 and 12' }
        ]}
      >
      <InputNumber min={1} max={12} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Year"
        name="year"
        rules={[
          { required: true, message: 'Please enter the year' },
          { type: 'number', min: 2024, max: 2100, message: 'Year must be between 2024 and 2100' }
        ]}
      >
      <InputNumber min={2024} max={2100} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Number of Transporters"
        name="num_transporters"
        rules={[
          { required: true, message: 'Please enter the number of transporters' },
          { type: 'number', min: 1, max: 10, message: 'Number of transporters must be between 1 and 10' }
        ]}
      >
      <InputNumber min={1} max={10} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Get Forecast
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ForecastForm;
