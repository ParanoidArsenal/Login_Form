import React, { useState, useEffect} from 'react';
import './Main.css';


const Main = ({history}) => {
    useEffect(() =>{
            const token = localStorage.getItem('token');
            if(!token){
                history.push('/Login');
            }

    }, []);
    // history.push('/Login');
    return(
        <div className = 'page-container'>
        <h1>
            Авторизация проведена успешно!
        </h1>
        <button className='user-list-btn' onClick = {() => history.push('/user-list')}>
            Отобразить список пользователей
        </button>

        </div>
    );
    
};
export {Main};