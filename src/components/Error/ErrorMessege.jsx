import React from 'react'
import './ErrorMessege.css'
import error from '../../image/flying-saucer_1f6f8.png'
import { useDispatch } from 'react-redux'
import { setError } from '../../redux/slices/errorReducer';
import Header from '../Header/Header';

export default function ErrorMessege() {
    const dispatch = useDispatch();

    return (
        <>
            <Header />
            <section className="error">
                <img className='error__img' src={error} />
                <h2 className="error__title">Какой-то сверхразум все сломал</h2>
                <p className="error__subtitle">Постараемся быстро починить</p>
                <button className="error__btn"
                    onClick={() => dispatch(setError(false))}>
                    Попробовать снова
                </button>
            </section >
        </>


    )
}
