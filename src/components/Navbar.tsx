import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar({roleId} : {roleId: any}) {
    return (
        <NavbarBs className="app"> 
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/loadCheck" as={NavLink}>
                        LoadCheck
                    </Nav.Link>
                    <Nav.Link to="/summary" as={NavLink}>
                        Summary
                    </Nav.Link>
                    { roleId == '2' || roleId == '3' || roleId == '4' || roleId == '5' ? (
                    <>
                    <Nav.Link to="/teachload" as={NavLink}>
                        Teachload
                    </Nav.Link>
                    </>):(<></>)}
                    
                </Nav>
            </Container>
        </NavbarBs>
    )

}