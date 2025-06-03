import React from 'react';
import { Card, CardBody } from "reactstrap";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/Navbar';

const userSignupsData = [
  { name: "Jan", signups: 120 },
  { name: "Feb", signups: 150 },
  { name: "Mar", signups: 200 },
  { name: "Apr", signups: 250 },
];

const UserActivityPage = () => {
  return (
    <div className="p-6">
      <NavBar/>
      <h1 className="text-2xl font-bold mb-6">User Activity</h1>
      <Card>
        <CardBody>
          <h2 className="text-xl font-semibold mb-4">User Sign-ups Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userSignupsData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="signups" stroke="#4f46e5" />
            </LineChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserActivityPage;
