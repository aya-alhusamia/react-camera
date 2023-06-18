import React from "react";
import "./assets/style/style.scss";

import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";

const AdminPage = () => {
    return (
        <Layout className="main-page">
          
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            >
              
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
             <h1>Admin page </h1>
              
            </Content>
          </Layout>
        </Layout>
      );
};

export default AdminPage;