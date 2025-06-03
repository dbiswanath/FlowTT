import React, { useState } from "react";
import { Card, CardBody, Table } from "reactstrap";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../NavBar/Navbar";
import './index.css';
import { useNavigate } from 'react-router-dom';

const userData = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 600 },
  { name: "Mar", users: 800 },
  { name: "Apr", users: 750 },
];

const videoViewsData = [
  { name: "Jan", views: 10000 },
  { name: "Feb", views: 12000 },
  { name: "Mar", views: 15000 },
  { name: "Apr", views: 18000 },
];

const initialVideos = [
  { id: 1, title: "The Great Adventure", views: 12000, status: "Published" },
  { id: 2, title: "Mystery of Time", views: 8000, status: "Draft" },
  { id: 3, title: "Space Odyssey", views: 15000, status: "Published" },
];

const initialUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", subscribed: true },
  { id: 2, name: "Bob Smith", email: "bob@example.com", subscribed: false },
  { id: 3, name: "Charlie Rose", email: "charlie@example.com", subscribed: true },
];

const AdminDashboard = () => {
  const [authenticated, setAuthenticated] = useState(true);
  const [users, setUsers] = useState(initialUsers);
  const [videos, setVideos] = useState(initialVideos);
  const [videoFilter, setVideoFilter] = useState("All");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newVideo, setNewVideo] = useState({ title: "", status: "Published", views: 0, link: "" });

  const navigate = useNavigate();

  const handleToggleSubscription = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, subscribed: !user.subscribed } : user
      )
    );
  };



  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'admin123') {
      localStorage.setItem('isAdmin', true);
      navigate('/admin');
    } else {
      alert("Invalid credentials");
    }
  };

  const filteredVideosByStatus = videos.filter(
    (video) => videoFilter === "All" || video.status === videoFilter
  );

  if (!authenticated) {
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
        <h2>Login</h2>
        <input
          className="form-control mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-control mb-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => setAuthenticated(true)}>
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
<NavBar/>

      <h1 className="display-4 mb-3">OTT Admin Dashboard</h1>

      {/* User Analytics */}
      <Card className="mb-3">
        <CardBody>
          <h2>User Analytics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>

      {/* Video Views Analytics */}
      <Card className="mb-4">
        <CardBody>
          <h2 className="h5">Video Views Analytics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={videoViewsData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="views" fill="#34d399" />
            </BarChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>

      {/* Video Filter */}
      <div className="mb-4">
        <label className="form-label">Filter Videos:</label>
        <select
          className="form-select"
          onChange={(e) => setVideoFilter(e.target.value)}
          value={videoFilter}
        >
          <option value="All">All</option>
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
        </select>
      </div>

      {/* Add New Video */}
      <Card className="mb-4">
        <CardBody>
          <h2 className="h5 mb-3">Add New Video</h2>
          <div className="mb-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Title"
              value={newVideo.title}
              onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Video Link (URL)"
              value={newVideo.link}
              onChange={(e) => setNewVideo({ ...newVideo, link: e.target.value })}
            />
            <select
              className="form-select mb-2"
              value={newVideo.status}
              onChange={(e) => setNewVideo({ ...newVideo, status: e.target.value })}
            >
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
            <button
              className="btn btn-success"
              onClick={() => {
                if (newVideo.title && newVideo.link) {
                  setVideos([ ...videos, { id: Date.now(), ...newVideo } ]);
                  setNewVideo({ title: "", status: "Published", views: 0, link: "" });
                }
              }}
            >
              Add Video
            </button>
          </div>
        </CardBody>
      </Card>

      {/* Filtered Videos Table */}
      <Card className="mb-4">
        <CardBody>
          <h2 className="h5 mb-4">Videos ({videoFilter})</h2>
          {filteredVideosByStatus.length === 0 ? (
            <p className="text-muted">No videos to display.</p>
          ) : (
            <Table striped>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Views</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredVideosByStatus.map((video) => (
                  <tr key={video.id}>
                    <td>{video.title}</td>
                    <td>{video.views}</td>
                    <td>{video.status}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => setVideos(videos.filter((v) => v.id !== video.id))}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      {video.link && (
                        <video width="200" controls>
                          <source src={video.link} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </CardBody>
      </Card>

      {/* User Management */}
      <Card>
        <CardBody>
          <h2 className="h5">User Management</h2>
          <Table striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subscribed</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className={`btn ${user.subscribed ? "btn-outline-primary" : "btn-danger"}`}
                      onClick={() => handleToggleSubscription(user.id)}
                    >
                      {user.subscribed ? "Unsubscribe" : "Subscribe"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default AdminDashboard;
