import React, {useState} from "react"

import Burger from '../Components/Burger/Burger'
import Controller from '../Components/Burger/Controller'

import style from './burgerMaker.module.css'

const BurgerMaker = () => {

    const [ingredients,setIngredients] = useState([])

    const addIngredientsHandler = (ingredients) => {
        setIngredients( prevState => {
            const newState = [ingredients, ...prevState]
            return newState
        })

    }

    return (
        <div className={style.burgermaker_container}>
            <div className={style.controller}>
                <Controller  ingredients={ingredients} addIngredientsHandler={addIngredientsHandler}/>
            </div>
            <div className={style.burger_display}>
                <Burger ingredients={ingredients}/>
            </div>
        </div>
    )
}

export default BurgerMaker