import React from 'react'
import './Card.css'
import avatar from '../../image/avatar.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Card({ item, users }) {
    const sort = useSelector((state) => state.department.sort)

    const options = {
        month: "short",
        day: "numeric",
    };

    return (
        <li className='card__element'>
            <div className='card__user-info'>
                <Link to={`/${item.id}`}>
                    <img className='card__foto' src={avatar} />
                </Link>
                <div className='card__about'>
                    <div className='card__user'>
                        <h1 className='card__name'>{item.firstName} {item.lastName}</h1>
                        <p className='card__tag'>{item.userTag}</p>
                    </div>
                    <p className='card__desc'>{item.position}</p>
                </div>
            </div>

            <div className='card__date'>
                {sort === "birthday" && <p className='card__birthday'>{`${new Date(item.birthday).toLocaleDateString("ru", options).slice(0, -1)}`}</p>}
            </div>
        </li>
    )
}

//{sort &&} - имеется ввиду "если sort = true", тогда в условии не нужно :