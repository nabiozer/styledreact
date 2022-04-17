import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import logoSrc from '../../assets/logo.png'

import {
    Nav,
    NavbarContainer,
    NavLogo,
    Logo ,
    MobileIcon,
    NavItem,
    NavLinks,
    NavMenu,
    Number,
    Hr,
    border
 
} from './Navbar.elements'



const Navbar = () => {
    const [click , setClicked] = useState(false);

    const clickHandler =() => {
        setClicked(!click)
    }

  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/home">
                    <Logo src={logoSrc} />
                </NavLogo>
                <MobileIcon onClick={clickHandler}>
                    {click ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
                </MobileIcon>
                <Hr></Hr>
                <NavMenu onClick={clickHandler} click={click}>
                        <NavItem>
                            
                            <NavLinks to='/home'><Number>00</Number>HOME<span></span></NavLinks>
                        </NavItem>

                        <NavItem>
                            
                            <NavLinks to='/destination'><Number>01</Number>DESTINATION<span></span></NavLinks>
                        </NavItem>

                        <NavItem>
                            
                            <NavLinks to='/crew' ><Number>02</Number>CREW<span></span></NavLinks>
                        </NavItem>

                        <NavItem>
                            
                            <NavLinks to='/technology'><Number>03</Number>TECHNOLOGY<span></span></NavLinks>
                        </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar