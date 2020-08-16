import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({history}) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
      e.preventDefault();
      // console.log('!');
      let res = await axios.post('http://emphasoft-test-assignment.herokuapp.com/api-token-auth/',
      { username:  'test_super',
        password: 'Nf<U4f<rDbtDxAPn', }
      );
      console.log(res);
      let token = res.data.token;
      localStorage.setItem('token', token);
      history.push('/');
      
    };
    
    const isActive = (password && login) ?  `active`: 'inactive';
    const handleClick = (password && login) ? submit : (e) => e.preventDefault();
    const notification = (password && login) ? null : <span className= "notification">  *Все поля необходимы для заполнения</span>;

    return (
        <div className="form-container">
        <form className="authorization-form">
            <label>
                <span><b>Логин:</b></span>
            <input type="text" name="login"  placeholder="Введите логин"
                value = {login}
                onChange={ e => setLogin(e.target.value.match(/\w+/))} />
            </label>
            <label>
            <span><b>Пароль:</b></span>
            <input type="text" name="password"  placeholder="Введите пароль"
                value = {password}
                onChange = {(e) => setPassword( e.target.value.match(/\w+/))}/>
            </label>
            {notification}
            <input className = {isActive} type="submit" value="Отправить" onClick={handleClick} />
        </form>
    </div>
    );
};

export { Login }