import React from 'react';
import { Table } from 'antd';

const ForecastResults = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const sortedData = [...data].sort((a, b) => a.Predicted_Violations - b.Predicted_Violations);

  const columns = [
    { title: 'Transporters Name', dataIndex: 'TransportersName', key: 'TransportersName' },
    // { title: 'Truck Count', dataIndex: 'Truck_Count', key: 'Truck_Count' },
    { title: 'Predicted Avg. Violations', dataIndex: 'Predicted_Violations', key: 'Predicted_Violations' },
    // { title: 'Invoice Count', dataIndex: 'Invoice_Count', key: 'Invoice_Count' },
    // { title: 'Route Violation Count', dataIndex: 'Route_Violation_Count', key: 'Route_Violation_Count' },
    // { title: 'Speed Violation Count', dataIndex: 'Speed_Violation_Count', key: 'Speed_Violation_Count' },
    // { title: 'Stoppage Violation Count', dataIndex: 'Stoppage_Violation_Count', key: 'Stoppage_Violation_Count' },
    // { title: 'Night Violation Count', dataIndex: 'Night_Violation_Count', key: 'Night_Violation_Count' },
  ];

  return (
    <Table
      columns={columns}
      dataSource={sortedData}
      rowKey="Predicted_Violations"
      pagination={false}
      style={{ marginTop: 20 }}
    />
  );
};

export default ForecastResults;
