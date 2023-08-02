import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import api from '../../api';
import './Profile.css'
import back from '../../image/vector-back.svg'
import avatar from '../../image/avatar.png'
import star from '../../image/star.svg'
import phone from '../../image/phone-alt.svg'
import { parsePhoneNumber } from 'libphonenumber-js'
import Preloader from '../../Preloader/Preloader';

export default function Profile() {
    //стейт для загрузки
    const [loading, setLoading] = useState(false);

    //достаем id  c помощью деструктуризации,тк id как параметр указан в App.js. Вытаскиваем его из строки поиска
    const { id } = useParams();

    const [userInfo, setUserInfo] = useState({});

    //у api методом getAllUser получаем всех пользователей и с помощью метода find нашли того, с кем совпадает id в строке поиска
    useEffect(() => {
        setLoading(true)
        api.getAllUser().then((data) => {
            setUserInfo(data.items.find((elem) => elem.id === id))
            setLoading(false)
        })
    }, [])

    const options = {
        month: "long",
        day: "numeric",
        year: "numeric",
    };

    //считаем возраст
    function getAge() {
        var today = new Date();
        var birthDate = new Date(userInfo.birthday);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    //прибавляем 'год', 'года', 'лет'
    function declOfNum(number, words) {
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
    }

    //распарсить номер телефона
    // const phoneNumber = parsePhoneNumber(userInfo.phone, 'RU').formatInternational()

    return loading ? <Preloader /> :
        < section className='profile' >
            <div className='profile__header'>
                <Link className='profile__back' to='/'>
                    <img className='profile__vector' src={back}></img>
                </Link>
                <div className='card__about card__about_profile'>
                    <img className='card__foto card__foto_profile' src={avatar} />
                    <div className='card__user'>
                        <h1 className='card__name card__name_profile'>{userInfo.firstName} {userInfo.lastName}</h1>
                        <p className='card__tag card__tag_profile'>{userInfo.userTag}</p>
                    </div>
                    <p className='card__desc'>{userInfo.position}</p>
                </div>
            </div>


            <div className='profile__add-info'>
                <div className='profile__add-info_date'>
                    <img className='profile__icon' src={star} />
                    <p className='profile__birthday'>{`${new Date(userInfo.birthday).toLocaleDateString("ru", options).slice(0, -2)}`}</p>
                </div>
                <p className='profile__years'>{getAge() + ' ' + declOfNum(getAge(), ['год', 'года', 'лет'])}</p>
            </div>

            <div className='profile__add-info profile__add-info_phone'>
                <img className='profile__icon' src={phone} />
                <a className='profile__mobile-numb' href="tel:{userInfo.phone}">{userInfo.phone && parsePhoneNumber(userInfo.phone, 'RU').formatInternational()}</a>
            </div>
        </section>

}
