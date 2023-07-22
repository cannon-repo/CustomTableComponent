import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Table from './Components/Table/Table';

const data = [
  { Id: 1, Name: 'John Doe', Age: 30, Occupation: 'Engineer', Department: 'IT', Location: 'New York' },
  { Id: 2, Name: 'Jane Smith', Age: 25, Occupation: 'Designer', Department: 'Design', Location: 'Los Angeles' },
  { Id: 3, Name: 'Bob Johnson', Age: 40, Occupation: 'Manager', Department: 'HR', Location: 'Chicago' },
  { Id: 4, Name: 'Alice Williams', Age: 28, Occupation: 'Software Developer', Department: 'IT', Location: 'San Francisco' },
  { Id: 5, Name: 'Michael Brown', Age: 35, Occupation: 'Product Manager', Department: 'Product', Location: 'Seattle' },
  { Id: 6, Name: 'Emily Davis', Age: 32, Occupation: 'UX/UI Designer', Department: 'Design', Location: 'Boston' },
  { Id: 7, Name: 'Alex Martinez', Age: 27, Occupation: 'Data Analyst', Department: 'Analytics', Location: 'Austin' },
  { Id: 8, Name: 'Sophia Lee', Age: 38, Occupation: 'Finance Manager', Department: 'Finance', Location: 'San Diego' },
  { Id: 9, Name: 'William Wilson', Age: 33, Occupation: 'Sales Executive', Department: 'Sales', Location: 'Denver' },
  { Id: 10, Name: 'Olivia Miller', Age: 29, Occupation: 'Marketing Specialist', Department: 'Marketing', Location: 'Miami' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Table data={data} />
  </React.StrictMode>
);