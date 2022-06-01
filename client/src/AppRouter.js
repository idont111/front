import {Routes, Route} from 'react-router-dom';
import React, {useContext} from 'react';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Auth from './Components/Auth';
import going from './data/going.json';
import eating from './data/eating.json';
import living from './data/living.json';
import shopping from './data/shopping.json';
import AppWeath from './Components/weather/Search'

import {Context} from './index'

export default function App() {
  const {user} = useContext(Context)
  return (
      <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/login" element = {<Auth/>}/>
          <Route path = "/registration" element = {<Auth/>}/>
          <Route path = "/weather" element = {user.isAuth && <AppWeath/>}/>
          <Route path = "/going" element = {going.map(item =><Main title = {item.title} paragraph = {item.paragraph} urlimg = {item.urlimg}/>)}/>
          <Route path = "/eating" element = {eating.map(item =><Main title = {item.title} paragraph = {item.paragraph} urlimg = {item.urlimg}/>)}/>
          <Route path = "/living" element = {living.map(item =><Main title = {item.title} paragraph = {item.paragraph} urlimg = {item.urlimg}/>)}/>
          <Route path = "/shopping" element = {shopping.map(item =><Main title = {item.title} paragraph = {item.paragraph} urlimg = {item.urlimg}/>)}/>
          <Route path = "*" element = {<Home/>}/>
        </Routes>
  );
}