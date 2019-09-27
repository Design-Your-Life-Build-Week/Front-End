mport React from "react";
import styled from "styled-components";

import { NavColor, ButtonBackground, ButtonFont, 
    ButtonHover, ButtonHoverFont, MainFontFamily } from './Styling';
import {NavLink} from "react-router-dom";

export default function NavBar() {
    // wrapper for nav bar
    const NavWrapper = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-image: ${NavColor};
        width: 100%;
        height: 80px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `;

    // Icon styling
    const Icon = styled.img`
        height: 60px; 
        margin: 0 20px`;

    // wrapper for logo in top left
    const LogoWrapper = styled.div`
        display: flex;
        align-items: center;
        margin: 0 20px;
    `;

    // logo title in top left
    const LogoTitle = styled.h2`
        font-size: 2.0rem;
        font-family: ${MainFontFamily};
    `;

    // wrapper for NavItems in top right
    const NavItemWrapper = styled.div`
        display: flex;
        height: 100%;
        align-items: center;
        margin 0 20px 0 0;
    `;

    // Links to Login and Register Pages
    const NavItem = styled.div`
        display: flex;
        width: 100px;
        height: 50px;
        background-image: ${ButtonBackground};
        justify-content: center;
        align-items: center;
        color: ${ButtonFont};
        text-decoration: none;
        border-radius: 12px;
        margin 10px;
        font-size: 1.3rem;

        :hover{
        background-image: ${ButtonHover};
        color: ${ButtonHoverFont};
        }
    `;

    return (
        <NavWrapper>
            <NavLink style={{textDecoration: "none"}} to="/">
                <LogoWrapper>
                    <LogoTitle>dESign YoUr lIFe</LogoTitle>
                </LogoWrapper>
            </NavLink> 
            <NavItemWrapper>
                <NavLink style={{textDecoration: "none"}} to="/categories">
                    <NavItem>Categories</NavItem>
                </NavLink>
                <NavLink style={{textDecoration: "none"}} to="/login">
                    <NavItem>Logout</NavItem>
                </NavLink>
            </NavItemWrapper>
        </NavWrapper>
    )
}