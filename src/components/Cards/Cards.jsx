import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import api from '../../api';
import Sciletons from '../Sciletons/Sciletons';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../../redux/slices/errorReducer';
import ErrorNothingFounded from '../ErrorNothingFounded/ErrorNothingFounded';
import './Cards.css'

export default function Cards() {
    //стейт для полчения всех пользователей
    const [users, setUsers] = useState([]);
    //стейт для загрузки
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    //стейт переменная, которая хранит в себе департаменты
    // const [departments, setDepartments] = useState('all')

    //использую useSelector, чтобы достать из стейта редакс значения
    const departments = useSelector((state) => state.department.departmentUser)

    const sort = useSelector((state) => state.department.sort)

    const search = useSelector((state) => state.search.search);

    useEffect(() => {
        setLoading(true);
        //обращаюсь к экземляру класса Api и методом getAllUser получаю всех пользователей. Т.к. это запрос на сервер
        //т.е. ассинхронное действие, нужно дождаться полчение данных, поэтому пишу .then
        api.getAllUserDepart(departments).then((data) => {
            // console.log(data.items);
            setUsers(data.items.sort((a, b) => {
                //сортировка по алфавиту
                if (sort === "alphabet") {
                    return a.firstName.localeCompare(b.firstName)
                } else {
                    return Date.parse(a.birthday) - Date.parse(b.birthday)
                }
            })
                .filter((elem) => {
                    return (elem.firstName.toLowerCase() + elem.lastName.toLowerCase()).includes(search.toLowerCase()) //элементы, которые содержат в себе search(то, что мы ввели в строку поиска), 
                        || elem.userTag.toLowerCase().includes(search.toLowerCase())
                        || elem.department.toLowerCase().includes(search.toLowerCase())


                    //они вернуться в новый массив
                })) //по ключу(см.в консоли) сохраняю массив в стэйт переменную
            //переключаю стейт загрузки на фолс
            setLoading(false);
        }).catch((error) => {
            dispatch(setError(true))
        })
    }, [departments, search]) //нужно добавлять в массив зависимостей, чтобы когда менялись данные, обновлялся массив


    //создаю новый массив скиллетонов из 10-ти элементов,разворачиваю его и заполняю разметкой скилетона
    const scilletons = [...new Array(10)].map((elem, index) => {
        return <Sciletons key={index} />
    })
    return (
        <div className='cards'>
            {loading ? scilletons :
                users.length === 0 ? <ErrorNothingFounded /> :
                    <ul className='card'>
                        {users.map((elem) => {
                            return <Card key={elem.id} item={elem} users={users} />
                        })}
                    </ul>

            }
        </div>
    )
}