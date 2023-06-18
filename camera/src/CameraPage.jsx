import React from "react";
import "./assets/style/style.scss";

import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";




const { Header, Content } = Layout;

const CameraPage = () => {
    const {
    token: { colorBgContainer },
  } = theme.useToken();
  // const [collapsed, setCollapsed] = useState(false);
  // const [selectedMenuItem, setSelectedMenuItem] = useState("2");
  
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

    return (
      <Layout className="main-inner-page">

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube-nocookie.com/embed/Jqf9haCd6mM" 
          ></iframe>
          
        </Content>
    </Layout>
      );
};

export default CameraPage;