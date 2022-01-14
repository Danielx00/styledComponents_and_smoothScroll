import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SideBarStyles";
const SideBar = ({ isOpen, toggleSideBar }) => {
  return (
    <>
      <SideBarContainer isOpen={isOpen}>
        <Icon onClick={toggleSideBar}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarLink
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              to="about"
              onClick={toggleSideBar}
            >
              About
            </SideBarLink>
            <SideBarLink
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              to="discover"
              onClick={toggleSideBar}
            >
              Discover
            </SideBarLink>
            <SideBarLink
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              to="services"
              onClick={toggleSideBar}
            >
              Services
            </SideBarLink>
            <SideBarLink
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              to="signup"
              onClick={toggleSideBar}
            >
              Sign Up
            </SideBarLink>
          </SideBarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          </SideBtnWrap>
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
