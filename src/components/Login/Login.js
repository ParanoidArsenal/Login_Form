import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({history}) => {

    const [login, setLogin] = useState('');

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
    //   let users = await axios.get(`http://emphasoft-test-assignment.herokuapp.com/api/v1/users/`,
    //   { headers: {
    //     Authorization:`Token ${token}`,
    //   } 
    //   });
    //   console.log(users);
      history.push('/');
      
    };


    return (
        <div className="form-container">
        <form className="authorization-form">
            <label>
                <span><b>Логин:</b></span>
            <input type="text" name="name"  placeholder="Введите логин" 
                onChange={ e => setLogin(e.target.value)} />

            </label>
            <label>
            <span><b>Пароль:</b></span>
            <input type="text" name="name"  placeholder="Введите пароль"/>
            </label>
            <input type="submit" value="Отправить" onClick={submit}/>
        </form>
    </div>
    );
};

export { Login }