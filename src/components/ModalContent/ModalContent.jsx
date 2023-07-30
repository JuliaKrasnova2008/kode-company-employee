import React from 'react'
import './ModalContent.css'
import { useDispatch, useSelector } from 'react-redux'
import { setSort } from '../../redux/slices/departmentReducer';

export default function ModalContent({ closeModal }) {
    const dispatch = useDispatch();

    const sort = useSelector((state) => state.department.sort)

    return (
        <div className='modalContent'>
            <h2 className='modalContent__title'>Сортировка</h2>
            <div className='modalContent__checkbox_alphabet'>
                <label>
                    <input
                        onChange={() => {
                            dispatch(setSort("alphabet"))
                        }}
                        className="modalContent__checkbox"
                        type="radio"
                        checked={sort === "alphabet"}
                        id="alphabet"
                        name="radio__old"
                        value="По алфавиту"
                    />
                    <span className="modalContent__subtitle">По алфавиту</span>
                </label>
            </div>
            <div className='modalContent__checkbox_birthday'>
                <label>
                    <input
                        onChange={() => {
                            dispatch(setSort("birthday"))
                        }}
                        className="modalContent__checkbox"
                        type="radio"
                        checked={sort === "birthday"}
                        id="birthday"
                        name="radio"
                        value="По дню рождения" />
                    <span className="modalContent__subtitle">По дню рождения</span>
                </label>
            </div>
            <button className='navigation__close-button' onClick={() => closeModal()}></button>
        </div>
    )
}
