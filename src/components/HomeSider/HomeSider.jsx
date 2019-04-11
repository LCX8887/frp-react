import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

const HomeSider = ({ siderArr }) => {
  return (
    <Sider width={200} style={{ background: "#fff" }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {siderArr.map(item => (
          <SubMenu
            key={item.name}
            title={
              <span>
                <Icon type={item.icon} />
                {item.name}
              </span>
            }
          >
            {item.submenu.map(subitem => (
              <Menu.Item key={subitem}>{subitem}</Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Sider>
  );
};
export default HomeSider;
