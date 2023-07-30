import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Scroll from '../Scroll/Scroll'
import './Header.css'

export default function Header() {
    return (
        <section className='header'>
            <h1 className="page__content-title">Поиск</h1>
            <SearchForm />
            <Scroll />
        </section>
    )
}
