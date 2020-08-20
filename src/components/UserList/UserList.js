import React, { useState, useEffect} from 'react';
import './UserList.css';
import axios from 'axios';
import {Dropdown} from '../Dropdown/Dropdown';
import {homeURL} from '../../helper';

const UserList = ({history}) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const sortTypes = [
        'По умолчанию',
        'По возрастанию id',
        'По убыванию id',
    ];

    const [sortType, setSort] = useState(sortTypes[0]);

    const [filterValue, setFilterValue] = useState('');


    const filterUsers = (usersToFilter, filter) => {
        if(!filter){
            return usersToFilter;
        }

        return usersToFilter.filter(item => item.username.match(filter));
    };

    const sortUsers = (usersToSort, sort) => {
        switch(sort){
            case 'По умолчанию':
                usersToSort.sort( (a,b) => a.defaul_index - b.defaul_index)
                break;
            case 'По возрастанию id':
                usersToSort.sort( (a,b) => a.id - b.id)
                break;
            case 'По убыванию id':
                usersToSort.sort( (a,b) => b.id - a.id)
                break;
            default:
                break;
        };
        return usersToSort;
    };

    useEffect(() =>{
            setLoading(true);
            const token = localStorage.getItem('token');
            if(!token){
                history.push(homeURL + '/Login');
            }
            else{
                axios.get(`https://emphasoft-test-assignment.herokuapp.com/api/v1/users/`,
                { headers: {
                    Authorization:`Token ${token}`,
                    } 
                }).then(res => {
                    setUsers(res.data.map( (user,index) => {user['defaul_index'] = index; return user}));
                    setLoading(false);
                });
            };

    }, [history]);
    
    if(loading){
        return(
            <div className = 'page-container'>
                <h3>Загрузка...</h3>
            </div>
        )
    }
    else{
        let userList = users;
        userList = sortUsers(users, sortType);
        userList = filterUsers(users, filterValue);
        userList = userList.map((user, index) =>
        <tr key={index}>
            <td> {user.id} </td>
            <td> {user.username} </td>
            <td> {user.first_name} </td>
            <td> {user.last_name} </td>
        </tr>);


        return(
           <div className = 'page-container'>
                <div className = 'bar-container'>

                        <span>Сортировать:</span>
                        <Dropdown activeItem = {sortType} items = {sortTypes} setActive = {setSort} />

                        <span>Фильтрация по логину:</span>
                        <input type = 'text' value = {filterValue} onChange = {(e) => setFilterValue( e.target.value)}/>

                </div>
                <div className = 'table-container'>
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Логин</th>
                                <th>Имя</th>
                                <th>Фамилия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList}  
                        </tbody>
                    </table>
                </div>
            </div> 
        );
    };
    
};
export {UserList};