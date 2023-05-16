import React, { useEffect, useState } from 'react';
import "./main-layout.css"
import {
    HomeOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from "react-router-dom";
import { useStatusQuery } from "../../service/user-api.service";

import Navbar1 from '../../components/nav/navbar1';



const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true);
    const navigate = useNavigate()

    const { isLoading, error }: any = useStatusQuery({ path: 'status' })

    useEffect(() => {
        if (error?.status === 401) {
            navigate('/login')
        }
    }, [error])

    return (
        <>
            {isLoading ? <h1>Loading...</h1> :
                <Layout className={"h-screen"}>
                    <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: "blue" }}>
                        <div className="logo">Logo Name</div>
                        <Menu
                            style={{ background: "blue" }}
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            items={[
                                {
                                    key: '1',
                                    icon: <HomeOutlined />,
                                    label: 'nav 1',
                                    onClick: () => navigate("/")
                                },
                                {
                                    key: '2',
                                    icon: <VideoCameraOutlined />,
                                    label: 'nav 2',
                                },
                                {
                                    key: '3',
                                    icon: <UploadOutlined />,
                                    label: 'nav 3',
                                },
                            ]}
                        />
                    </Sider>
                    <Layout className="site-layout">
                        <Navbar1/>
                        
                        <Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                                background: "white",
                                overflow: "scroll"
                            }}
                        >
                            <Outlet />
                        </Content>
                    </Layout>
                </Layout>
            }
        </>
    );
};

export default MainLayout;
