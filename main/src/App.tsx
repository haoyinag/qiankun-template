/** @format */

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import { Home } from "./pages/Home";

import "./App.less";

const { Header, Sider, Content } = Layout;

// eslint-disable
const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "";

function App() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    // 设置路由命名空间
    <Router basename={BASE_NAME}>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["main"]}>
            <Menu.Item key="main" icon={<UploadOutlined />}>
              <Link to={"/"}>Main App</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to={"/react"}>React App</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to={"/vue"}>Vue App</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Route exact path="/" component={Home} />
            <div id="microContainer"></div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
