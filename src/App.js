import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import "./App.css";

import { HomeHeader } from "./components/HomeHeader/index.jsx";
import { HomeSider } from "./components/HomeSider/index.jsx";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  render() {
    const menuArr = ["nav1", "nav2", "nav3"];
    const siderArr = [
      { name: "subnav1", submenu: ["option1", "option2"], icon: "user" },
      { name: "subnav2", submenu: ["option1", "option2"], icon: "laptop" },
      { name: "subnav3", submenu: ["option1", "option2"], icon: "notification" }
    ];
    return (
      <Layout>
        <HomeHeader menuArr={menuArr} />
        <Layout>
          <HomeSider siderArr={siderArr} />
          <Content>Content</Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
