import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar() {
    return (
        <NavbarBs className="app"> 
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/teachload" as={NavLink}>
                        Teachload
                    </Nav.Link>
                    <Nav.Link to="/conclusion" as={NavLink}>
                        Summary
                    </Nav.Link>
                    <Nav.Link to="/loadCheck" as={NavLink}>
                        LoadCheck
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )

}