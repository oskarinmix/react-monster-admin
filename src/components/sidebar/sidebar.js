import React from 'react'
import UserProfile from './userprofile';
import SideBarFooter from './sidebarfooter';
import Menu from './menu';

const SideBar = () => {
    return (
        <aside className="left-sidebar">
            <div className="scroll-sidebar">
                <UserProfile />
                <Menu />
            </div>
            <SideBarFooter />
        </aside>
    );
}
export default SideBar;