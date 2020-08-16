import React, { useEffect} from 'react';
import './Main.css';


const Main = ({history}) => {
    useEffect(() =>{
            const token = localStorage.getItem('token');
            if(!token){
                history.push('/Login');
            }
    }, [history]);

    return(
        <div className = 'page-container'>
        <h1>
            Авторизация проведена успешно!
        </h1>
        <button className='btn user-list-btn' onClick = {() => history.push('/user-list')}>
            Отобразить список пользователей
        </button>

        </div>
    );
    
};
export {Main};