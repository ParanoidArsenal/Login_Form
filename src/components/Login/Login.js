import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import {homeURL} from '../../helper';

const Login = ({history}) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginIsFailled, setloginIsFailled] = useState(false);

    const submit = (e) => {
      e.preventDefault();
      axios.post('https://emphasoft-test-assignment.herokuapp.com/api-token-auth/',
        { username:  `${login}`,
          password: `${password}`, }
      ).then(
          res => {
            let token = res.data.token;
            localStorage.setItem('token', token);
            history.push(homeURL + '/');
          },
          err => {
            setloginIsFailled(true);
            setTimeout(() => setloginIsFailled(false), 1000);
          }
      );
      
    };

    const handleChange = (value, setFunc) => {
        const matched_value = value.match(/\S+/);
        if(matched_value)
            setFunc(`${matched_value}`);
        else
            setFunc(``);
    };
    
    const isActive = (password && login) ?  ``: 'inactive';
    const handleClick = (password && login) ? submit : (e) => e.preventDefault();
    const notification = (password && login) ? null : <span className= "notification">  *Все поля необходимы для заполнения</span>;

    const alert =  loginIsFailled ? (
    <div className = 'modal-window'>
        <div className = 'alert-message'>
            <h3> Неверный логин или пароль! </h3>
        </div>
    </div> )
    : null;

    return (
        <div className="form-container">
            {alert}
            <form className="authorization-form">
                <label>
                    <span><b>Логин:</b></span>
                <input type="text" name="login"  placeholder="Введите логин"
                    value = {login}
                    onChange={ e => handleChange(e.target.value, setLogin)} />
                </label>
                <label>
                <span><b>Пароль:</b></span>
                <input type="text" name="password"  placeholder="Введите пароль"
                    value = {password}
                    onChange = {(e) => handleChange( e.target.value, setPassword)}/>
                </label>
                {notification}
                <input className = {`btn ${isActive}`} type="submit" value="Отправить" onClick={handleClick} />
            </form>
        </div>
    );
};

export { Login }