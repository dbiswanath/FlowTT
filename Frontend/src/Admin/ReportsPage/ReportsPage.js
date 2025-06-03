import React from 'react';
import { Card, CardBody } from "reactstrap";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/Navbar';

const revenueData = [
  { name: "Jan", revenue: 2000 },
  { name: "Feb", revenue: 2500 },
  { name: "Mar", revenue: 3000 },
  { name: "Apr", revenue: 3500 },
];

const ReportsPage = () => {
  return (
    <div className="p-6">
      <NavBar/>
      <h1 className="text-2xl font-bold mb-6">Reports</h1>
      
      <Card>
        <CardBody>
          <h2 className="text-xl font-semibold mb-4">Revenue Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#ff6f61" />
            </BarChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>
    </div>
  );
};

export default ReportsPage;
