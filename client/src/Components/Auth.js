import React, {useContext, useState}from 'react';
import {Container, Form} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation, useNavigate} from 'react-router-dom';
import {Context} from "../index";
import {registration, login} from '../http/userApi';


const Auth = () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === '/login'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try{
            if (isLogin){
            await login(email, password);
            } else {
            await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate('/')
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    
    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}>
            <Card variant="outlined" style={{width: 600, backgroundColor: 'rgba(242, 246, 246, 0.3)'}} className="p-5">
                <h2 className="m-auto">{isLogin? 'Авторизация': 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder="Введите email..." value={email}
                    onChange={e => setEmail(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder="Введите password..." value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"/>
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    {isLogin ?
                        <div>
                        Нет аккаунта? <NavLink to = '/registration'>Зарегейстрируйся</NavLink>
                        </div>
                        :
                        <div>
                        Есть аккаунт? <NavLink to = '/login'>Войти</NavLink>
                        </div>
                    }
                    <Button variant={"outline-success"} onClick={click}>
                    {isLogin ? 'Войти' : 'Регистрация'}
                    </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
        
    );
};

export default Auth;