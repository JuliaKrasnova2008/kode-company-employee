import React, { useState } from 'react'
import './SearchForm.css'
import Filter from '../Filter/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../../redux/slices/searchReducer'

export default function SearchForm() {
    const search = useSelector((state) => state.search.search);
    const dispatch = useDispatch();

    const [active, setActive] = useState(false)


    return (
        <section className="search">
            <div className='search-form'>
                <div className='search-form__input'>
                    <span className={active ? 'search-form__img_active' : 'search-form__img'} />
                    <input
                        className="search-form__enter"
                        id="input-enter"
                        name="enter"
                        type="text"
                        autoComplete="off"
                        placeholder="Введите имя, тег или департамент..."
                        value={search}
                        onChange={(event) => dispatch(setSearch(event.target.value))}
                        //когда взаимод с любым полем формы
                        onFocus={() => setActive(true)}
                        //когда выходит из фокуса
                        onBlur={() => setActive(false)}
                    />
                </div>
                <Filter />
            </div>

        </section>
    )
}

