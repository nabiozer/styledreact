import styled from "styled-components";
import { Link ,NavLink } from "react-router-dom";
export const Hr = styled.hr`
  display: none;

  @media screen and (min-width: 1336px) {
    display: inline-block;
    background-color: #383b4b;
    position: absolute;
    right: 800px;
    background-color: #383b4b;

    border: none;
    height: 1px;
    width: 32.85%;
  }
`;
export const Nav = styled.nav`
  position: sticky;
  color: white;
  height: 5.5rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 6rem;
    padding-left: 2.438rem;
    padding-right: 0rem;
  }

  @media screen and (min-width: 1336px) {
    height: 6rem;
    padding-left: 3.438rem;
    margin-top: 2.5rem;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.5rem;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 6rem;
  }
`;

export const NavLogo = styled(Link)`
  background: white;
  border-radius: 50%;

  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const MobileIcon = styled.div`
  width: 1.5rem;
  height: 1.313rem;
  display: flex;
  justify-content: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    display: none;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`


    
  @media  screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    right: 0;
    width: 68.08%;
    height: 100vh;
    top: 0px;
    position: absolute;
    padding-top:7.375rem; 
    background-color: black;
    list-style: none;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    background: rgba(255, 255, 255, 0.04);
    opacity: 1;
    right: ${({ click }) => (click ? 0 : "-100%")};
    transition: all 0.5s ease;
   
    /* From https://css.glass */



    
    backdrop-filter: blur(81.5485px);



    
  }

  /* identical to box height */

  

  @media  screen and (min-width: 768px) {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    min-width: 354px;
    
    padding-left: 3rem;
    padding-right: 3rem;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    

    letter-spacing: 2.3625px;

    color: #ffffff;,

  }

  @media screen and (min-width: 1336px) {
    padding-left: 7.688rem;
    padding-right: 7.688rem;
    width:36.5rem;
  }
`;

export const NavItem = styled.li`
  color: white;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-left: 2rem;
    margin-bottom: 2rem;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    display: flex;
    color: #ffffff;
  }
  @media screen and (min-width: 1336px) {
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
      
    color: #ffffff;
    & :hover {
      
      border-bottom: 3px solid rgba(255, 255, 255, 0.5);;
      display: inline;
      padding-top:36.5px;
      padding-bottom:33px;

      
    }
    & span:hover {
      border:none;
     
    }

   
   
  }
`;

export const NavLinks = styled(NavLink)`
  @media screen and (min-width: 768px) {
    vertical-align: middle;
    text-decoration: none;
    color: #ffffff;
    &.active {
      padding-top:39px;
      border-bottom: 3px solid white;
      display: inline-block;
      padding-bottom:36px;
    }

   
  }

  @media screen and (max-width: 767px) {
    margin-left: 0.688rem;
    text-decoration: none;
    color: #ffffff;
    &.active {

        & span:nth-child(2){ {
            display: inline-block;
            position: absolute;
            right: 0;
            height:31px;
            border-right: 3px solid;
        
        }
      
    }
  }
`;



export const Number = styled.span`
  display: none;
  @media screen and (max-width: 767px) {
    display: inline-block;
    margin-right: 0.688rem;
  }

  @media screen and (min-width: 1336px) {
    display: inline-block;
    margin-right: 0.688rem;
    ont-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;

    color: #ffffff;
  }
`;
