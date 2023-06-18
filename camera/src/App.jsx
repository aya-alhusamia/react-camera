import "./assets/style/style.scss";
import "./assets/s2.png";
import {
  MenuFoldOutlined,
  BarChartOutlined,
  UserOutlined,
  AlertOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Link,BrowserRouter as Router, Route, Routes } from "react-router-dom";


import AdminPage from "./AdminPage";
import CameraPage from "./CameraPage";


const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return (
    <Router>
    <Layout className="main-page">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical"  >
        <h2 style={{ color:"#ee661c" ,  textAlign:"center"}}>SUI</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Admin 1",
              link: <Link to="/adminPage"/>
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Camer 1",
              link:<Link to="/camera">Camera Page</Link>
            },
            {
              key: "3",
              icon: <AlertOutlined />,
              label: "Emergency",
            },
            {
              key: "4",
              icon: <BarChartOutlined />,
              label: "Reports",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube-nocookie.com/embed/Jqf9haCd6mM" 
          ></iframe>
           <Routes>
               <Route path="/" element={AdminPage} />
               <Route path="/adminPage" element={AdminPage} />
               <Route path="/cameraPage" element={<h1>Camera Page</h1>} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
    </Router>
    );
};
export default App;
