import React from 'react'
import './Scroll.css'
import { useDispatch, useSelector } from 'react-redux'
import { setDepartment } from '../../redux/slices/departmentReducer'


export default function Scroll({ depart }) {
    //создаем функцию-обертку для вызова редаксовских функций, все функции редакса должны быть обернуты в dispatch
    const dispatch = useDispatch()

    //использую useSelector, чтобы достать из стейта редакс значения
    const departments = useSelector((state) => state.department.departmentUser)

    //через функцию-обертку вызываем функцию, которую создали в departmentReducer, передаем в нее значение, котрое указано
    //в спецификации API(в данном случае "design"/"analytics" и тд)
    return (
        <ul className='scroll'>
            <li className={
                departments === "all" ? 'scroll__element scroll__element_active' : 'scroll__element'} onClick={() => dispatch(setDepartment("all"))}>Все</li>
            <li className={
                departments === "design" ? 'scroll__element scroll__element_active' : 'scroll__element'} onClick={() => dispatch(setDepartment("design"))}>Designers</li>
            <li className={
                departments === "analytics" ? 'scroll__element scroll__element_active' : 'scroll__element'} onClick={() => dispatch(setDepartment("analytics"))}>Analysts</li>
            <li className={
                departments === "management" ? 'scroll__element scroll__element_active' : 'scroll__element'} onClick={() => dispatch(setDepartment("management"))}>Managers</li>
            <li className={
                departments === "ios" ? 'scroll__element scroll__element_active' : 'scroll__element'} onClick={() => dispatch(setDepartment("ios"))}>iOS</li>
            <li className={
                departments === "android" ? 'scroll__element scroll__element_active' : 'scroll__element'} onClick={() => dispatch(setDepartment("android"))}>Android</li>
        </ul>

    )
}
