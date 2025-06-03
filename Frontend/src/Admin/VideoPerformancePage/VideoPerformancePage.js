import React from 'react';
import { Card, CardBody } from "reactstrap";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/Navbar';

const videoPerformanceData = [
  { name: "Video 1", views: 10000 },
  { name: "Video 2", views: 15000 },
  { name: "Video 3", views: 20000 },
  { name: "Video 4", views: 25000 },
];

const VideoPerformancePage = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="p-6">
      <NavBar/>
      <h1 className="text-2xl font-bold mb-6">Video Performance</h1>

      <Card>
        <CardBody>
          <h2 className="text-xl font-semibold mb-4">Video Views Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={videoPerformanceData}
                dataKey="views"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
              >
                {videoPerformanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>
    </div>
  );
};

export default VideoPerformancePage;
