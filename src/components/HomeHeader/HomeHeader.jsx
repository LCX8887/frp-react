import React, { Component } from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const HomeHeader = ({ menuArr }) => {
  return (
    <Header className="header">
      <Menu theme="dark" mode="horizontal">
        {menuArr.map(item => (
          <Menu.Item key={item}>{item}</Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};
export default HomeHeader;
