import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom'
import {Button} from "react-bootstrap";

function Header(){
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        navigate('/')
    }
    return(
        <Navbar bg="dark" variant="ligth">
        <Container>
         <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={"outline-light"} onClick={() => navigate('/')} className="ml-1">Тур Іспанією</Button>
            </Nav>
            {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate('/weather')}>
                            Посмотреть погоду
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-1">
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate('/login')}>Авторизация</Button>
                    </Nav>
                }
        </Container>
    </Navbar>
    );
}

export default Header;