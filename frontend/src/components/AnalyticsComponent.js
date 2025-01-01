// 18. AnalyticsComponent.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import '../styles/Dashboard.css';

const data = [
  { name: 'Day 1', orders: 30 },
  { name: 'Day 2', orders: 45 },
  { name: 'Day 3', orders: 60 },
];

function AnalyticsComponent() {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="orders" fill="#8884d8" />
    </BarChart>
  );
}

export default AnalyticsComponent;