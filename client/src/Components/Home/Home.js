import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

function Main() {
    return (
    <div className="slide1">
        <div className="welcome">
        <section>
            <h2>Ласкаво просимо до Іспанії</h2>
            <p>Іспанія – один з найпопулярніших туристичних напрямків Європи. 
                Країна славнозвісна своїми пляжами й морем, кухнею і нічним життям, особливою атмосферою і приязністю місцевих жителів. 
                Крім цього, це країна з великим географічним і культурним розмаїттям.</p>
            <p> Приїжджайте і переконайтеся в цьому самі, а ми подбаємо про те, щоб ніщо не відволікало вас від споглядання унікальної природи.</p>
        </section>
        </div>
        
    <div id="express">
    </div>
    
    <div className="living">
        <section>
            <h2>Проживання</h2><br/>
            <p>Готель, хостел, чи кемпінг? Ще не знаєш, яке обрати місце для відпочинку? Тоді гайда обирати!</p><br/>
            <div className="my-buttons"><Link to="/living">Далі</Link></div>
        </section>
    </div>
    
    <div className="eating">
        <section>
            <h2>Їжа</h2><br/>
            <p>Традиційна іспанська кухня — що їдять в Іспанії. Що потрібно обов'язково скуштувати та в який ресторан піти</p><br/>
            <div className="my-buttons"><Link to="/eating">Далі</Link></div>
        </section>
    </div>
    
    <div className="going">
        <section>
            <h2>Тури</h2><br/>
            <p>Запрошуємо відвідати місця, в яких ви переконаєтесь, що рай все ж таки існує!</p><br/>
            <div className="my-buttons"><Link to="/going">Далі</Link></div>
        </section>
    </div>
    
    <div className="shopping">
        <section>
            <h2>Шопінг</h2><br/>
            <p>Усі їздять до Франції або Італії за пакунками, але чомусь забувають про 3 столиці іспанського шопінгу, 
                де можливо придбати речі дуже вигідно.</p><br/>
            <div className="my-buttons"><Link to="/shopping">Далі</Link></div>
        </section>
    </div>
</div>
    );
  }
  
  export default Main;