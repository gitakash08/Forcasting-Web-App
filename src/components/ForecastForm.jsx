import React, { useState } from 'react';
import { Form, Input, Button, InputNumber, message } from 'antd';
import axios from 'axios';

const ForecastForm = ({ setForecastData }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/forecast', values);
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
        label="Month"
        name="month"
        rules={[{ required: true, message: 'Please enter the month' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Year"
        name="year"
        rules={[{ required: true, message: 'Please enter the year' }]}
      >
        <InputNumber min={2000} max={2100} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Number of Transporters"
        name="num_transporters"
        rules={[{ required: true, message: 'Please enter the number of transporters' }]}
      >
        <InputNumber min={1} max={20} style={{ width: '100%' }} />
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
