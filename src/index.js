import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Table from './Components/Table/Table';

const data = [
  { id: 1, name: 'John Doe', age: 30, occupation: 'Engineer', department: 'IT', location: 'New York' },
  { id: 2, name: 'Jane Smith', age: 25, occupation: 'Designer', department: 'Design', location: 'Los Angeles' },
  { id: 3, name: 'Bob Johnson', age: 40, occupation: 'Manager', department: 'HR', location: 'Chicago' },
  { id: 4, name: 'Alice Williams', age: 28, occupation: 'Software Developer', department: 'IT', location: 'San Francisco' },
  { id: 5, name: 'Michael Brown', age: 35, occupation: 'Product Manager', department: 'Product', location: 'Seattle' },
  { id: 6, name: 'Emily Davis', age: 32, occupation: 'UX/UI Designer', department: 'Design', location: 'Boston' },
  { id: 7, name: 'Alex Martinez', age: 27, occupation: 'Data Analyst', department: 'Analytics', location: 'Austin' },
  { id: 8, name: 'Sophia Lee', age: 38, occupation: 'Finance Manager', department: 'Finance', location: 'San Diego' },
  { id: 9, name: 'William Wilson', age: 33, occupation: 'Sales Executive', department: 'Sales', location: 'Denver' },
  { id: 10, name: 'Olivia Miller', age: 29, occupation: 'Marketing Specialist', department: 'Marketing', location: 'Miami' },
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Table data={data} />
  </React.StrictMode>
);