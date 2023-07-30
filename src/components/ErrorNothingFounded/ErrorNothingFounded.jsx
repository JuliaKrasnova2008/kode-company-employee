import React from 'react'
import nothingFounded from '../../image/nothingFounded.png'

export default function ErrorNothingFounded() {
    return (
        <>
            <section className="error">
                <img className='error__img' src={nothingFounded} />
                <h2 className="error__title">Мы никого не нашли</h2>
                <p className="error__subtitle">Попробуй скорректировать запрос</p>
            </section >
        </>


    )
}
