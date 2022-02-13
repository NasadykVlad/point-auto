import React from 'react'
import './navbar.scss'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import i18n from "../../i18n";
import {Link} from 'react-router-dom'

const NavBars = () => {

    function changeLanguage(lng) {
        if (lng) {
            i18n.changeLanguage(lng);
        }
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link className="navbar-brand" to="/">Point Auto</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/used-cars">Вживані авто</Link>
                        <Link className="nav-link" to="/news">Новини</Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Мова" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" onClick={() => changeLanguage('uk')}>Українска</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" onClick={() => changeLanguage('ru')}>Російська</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" onClick={() => changeLanguage('en')}>Англійська</NavDropdown.Item>
                        </NavDropdown>
                        <Link className="nav-link" to="/register">Реєстрація</Link>
                        <Link className="nav-link" to="/login">Вхід</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBars;
