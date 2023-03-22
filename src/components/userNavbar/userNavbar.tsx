import React from 'react'
import { Link } from "react-router-dom"

import { 
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Navbar,
    Nav,
    Container,
    Media,
    Button
 } from 'reactstrap'
 import './userNav.css'

const userNavbar = () => {
    return (
        <>
            <Container>
                <Nav className='' navbar>
                    <UncontrolledDropdown >
                        <Button className='dropbtn'>
                        <DropdownToggle className='dropTog'nav>
                                <span className=''>
                                    รักชาติ เมืองไทย
                                </span>
                        </DropdownToggle>
                        <DropdownMenu className='dropdown-menu-arrow' right>
                            <DropdownItem className='noti-title' header tag="div">
                                <h6 className='text-overflow m-0'>menu!</h6>
                            </DropdownItem>
                            <DropdownItem to="/calendar">
                                
                                <span>Calendar</span>
                            </DropdownItem>
                            <DropdownItem to="/calendar">
                                <i className='' />
                                <span>Teachload History</span>
                            </DropdownItem>
                            <DropdownItem to="/calendar" className='signout'>
                                <i className='signout' />
                                <span>Sign Out!</span>
                            </DropdownItem>
                        </DropdownMenu>
                        </Button>
                    </UncontrolledDropdown>
                </Nav>
            </Container>
        </>
    )
}

export default userNavbar;
