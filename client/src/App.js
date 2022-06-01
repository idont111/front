import React, {useContext, useEffect, useState} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer/Footer';
import AppRouter from './AppRouter';
import {Context} from './index';
import { check } from './http/userApi';
import { Spinner } from 'react-bootstrap';

function App() {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
      return <Spinner animation={"grow"}/>
  }
  return (
    <div>
        <Header/>
          <AppRouter/>
        <Footer/>
    </div>
  );
}

export default App;
