import React from 'react'
// install icon ini dengan menginstall package 'npm i react icons'
import { BiMinusCircle, BiChevronDownCircle, BiChevronUpCircle } from 'react-icons/bi'

import style from './controller.module.css'

const MapItem = (props) => {
    return (
        <div className={style.map_item}>
            <h6>{props.label}</h6>
            <div className={style.map_controller}>
                {/* Icon digunakan sebagai button untuk menghapus ingredients*/}
                <BiMinusCircle onClick={props.removeHandler} className={style.remove_button} />
                {/* Icon digunakan sebagai button untuk menaikkan ingredients, ditampilkan bila props.firstItem = false*/}
                { !props.firstItem && <BiChevronUpCircle onClick={props.upHandler} className={style.order_button} /> }
                {/* Icon digunakan sebagai button untuk menurunkan ingredients, ditampilkan bila props.lastItem = false*/}
                { !props.lastItem && <BiChevronDownCircle onClick={props.downHandler} className={style.order_button} /> }
            </div>
        </div>
    )
}

export default MapItem