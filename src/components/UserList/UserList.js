import React, { useState, useEffect} from 'react';
import './UserList.css';
import axios from 'axios';
import {Dropdown} from '../Dropdown/Dropdown';

const UserList = ({history}) => {
    const [users, setUsers] = useState([]);
    const [usersToPrint, setUsersToPrint] = useState([]);
    const [loading, setLoading] = useState(false);

    const sortTypes = [
        'По умолчанию',
        'По возрастсанию id',
        'По убыванию id',
    ];

    const [sortType, setSort] = useState(sortTypes[0]);

    // const sortTable = (sort) =>{
    //     setSort(sort);
    //     let usersToSort = users;
    //     switch(sort){
    //         case 'По умолчанию':
    //             usersToSort.sort( (a,b) => a.defaul_index - b.defaul_index)
    //             break;
    //         case 'По возрастсанию id':
    //             usersToSort.sort( (a,b) => a.id - b.id)
    //             break;
    //         case 'По убыванию id':
    //             usersToSort.sort( (a,b) => b.id - a.id)
    //             break;
    //         default:
    //             break;
    //     };
    //     setUsers(usersToSort);
    // };

    const [filterValue, setFilterValue] = useState('');


    const filterUsers = (usersToFilter, filter) => {
        if(!filter){
            console.log(`it's empty!`);
            return usersToFilter;
        }
        // setUsers(
        //     usersToFilter.filter(item => item.username.match(filter))
        // );
        // setFilterValue(filter);
        return usersToFilter.filter(item => item.username.match(filter));
    };

    const sortUsers = (usersToSort, sort) => {
        switch(sort){
            case 'По умолчанию':
                usersToSort.sort( (a,b) => a.defaul_index - b.defaul_index)
                break;
            case 'По возрастсанию id':
                usersToSort.sort( (a,b) => a.id - b.id)
                break;
            case 'По убыванию id':
                usersToSort.sort( (a,b) => b.id - a.id)
                break;
            default:
                break;
        };
        // setUsers(usersToSort);
        return usersToSort;
    };


    // useEffect(() =>{
    //     console.log(users);
    //     if(users.length > 0){
    //         let usersToChange = users;
    //         console.log(sortType);
    //         usersToChange = sortUsers(usersToChange, sortType);
    //         usersToChange = filterUsers(usersToChange, filterValue);
    //         setUsersToPrint(usersToChange);
    //         console.log(usersToChange);
    //         console.log('rrrr');
    //     };
    // }, [users, sortType, filterValue]);

    const handleFilterUpdate = (filter) =>{
        // updateUsersToPrint(sortType, filter);
        setFilterValue(filter);
    }

    const handleSortUpdate = (sort) =>{
        // updateUsersToPrint(sort, filterValue);
        setSort(sort);
    }

    // const updateUsersToPrint = (sort, filter) => {
    //     if(users.length > 0){
    //         let usersToChange = users;
    //         console.log(sortType);
    //         usersToChange = sortUsers(usersToChange, sortType);
    //         // usersToChange = filterUsers(usersToChange, filterValue);
    //         setUsersToPrint(usersToChange);
    //         console.log(usersToChange);
    //         console.log('rrrr');
    //     };
    // }

    useEffect(() =>{
            setLoading(true);
            const token = localStorage.getItem('token');
            console.log(token);
            if(!token){
                history.push('/Login');

            }
            else{
                axios.get(`http://emphasoft-test-assignment.herokuapp.com/api/v1/users/`,
                { headers: {
                    Authorization:`Token ${token}`,
                    } 
                }).then(res => {
                    setUsers(res.data.map( (user,index) => {user['defaul_index'] = index; return user}));
                    setLoading(false);
                });
                // let users_fetched = await axios.get(`http://emphasoft-test-assignment.herokuapp.com/api/v1/users/`,
                // { headers: {
                //     Authorization:`Token ${token}`,
                //     } 
                // });
            };

    }, []);
    
    if(loading){
        return(
            <div className = 'home-page-container'>
                <h1>Загрузка...</h1>
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
                    <Dropdown activeItem = {sortType} items = {sortTypes} setActive = {handleSortUpdate} />
                    <span>Фильтрация по логину:</span>
                    <input type = 'text' value = {filterValue} onChange = {(e) => handleFilterUpdate( e.target.value)}/>
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