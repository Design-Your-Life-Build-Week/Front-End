import React from "react";
import styled from "styled-components";

import { NavColor, MainFontFamily } from './Styling';
import PageIcon from '../images/page-icon.png';
import SearchIcon from '../images/search-icon.png';
import DotsIcon from '../images/dots-icon.png';
import ToggleIcon from '../images/toggle-icon.png';

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

    // wrapper for icons in top right
    const IconWrapper = styled.div`
        display: flex;
        height: 100%;
        align-items: center;
        margin 0 20px 0 0;
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

    return (
        <NavWrapper>
            <LogoWrapper>
                <Icon src={PageIcon} alt="file icon"/>
                <LogoTitle>dESign YoUr lIFe</LogoTitle>
            </LogoWrapper>
            <IconWrapper>
                <Icon src={SearchIcon} alt="search icon"/>
                <Icon src={DotsIcon} alt="dots icon"/>
                <Icon src={ToggleIcon} alt="toggle icon"/>
            </IconWrapper>
        </NavWrapper>
    )
}