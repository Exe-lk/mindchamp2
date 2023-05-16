import React from 'react';
import { Layout } from 'antd';
import { Outlet } from "react-router-dom";
import NavbarDynamic from '../../components/nav/navbardynamic';
import Navbar from '../../components/nav/navbarstatic';

const { Content } = Layout;

const SubLayout: React.FC = () => {

    return (
        <>
            <Layout>
                {/* <NavbarDynamic/> */}
                <Navbar/>
                <Content>
                    <Outlet />
                </Content>
            </Layout>

        </>
    );
};

export default SubLayout;
