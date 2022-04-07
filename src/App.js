import React , {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import BurgerContex from './Contex/BurgerContex'

import Layout from './Layouts/Layout'
import Home from './Pages/Home'
import BurgerMaker from './Pages/BurgerMaker'

function App() {

  // Menginisiasi state 'ingredients' & setter 'setIngredients'
  const [ingredients,setIngredients] = useState([])

  // Handler untuk menambahkan ingredients
  const addIngredientsHandler = (ingredients) => {
      // Menjalankan setter 'setIngredients' dengan callback funtion
      setIngredients( prevState => {
          // Menduplikasi state 'ingredients' lama dan menambahkan ingredients baru pada inedx 0
          const newState = [ingredients, ...prevState]
          // Me-return data baru untuk state 'ingredients'
          return newState
      })

  }

  // Handler untuk mengurangi ingredients
  const removeIngredientsHandler = (index) => {
      // Menjalankan setter 'setIngredients' dengan callback funtion
      setIngredients ( prevState => {
          // Menduplikasi state 'ingredients' lama
          const newState = [...prevState]
          // Menghapus ingredient pada state 'ingredients' berdasarkan indexnya
          newState.splice( index, 1 )
          // Me-return data baru untuk state 'ingredients'
          return newState
      })
  }

  // Handler untuk menggeser ingredients ke atas 1 tingkat
  const moveUpIngredientsHandler = (index) => {
      // Menjalankan setter 'setIngredients' dengan callback function
      setIngredients ( prevState => {
          // Menduplikasi state 'ingredients' lama
          const newState = [...prevState]
          // Menduplikasi item pada index sebelum index ingredient yag akan digeser ke atas dan disimpan di variable 'temp'
          const temp = newState[index-1]
          // Meng-assign ingredient yang akan digeser ke index sebelum index saat ini
          newState[index-1] = newState[index]
          // Meng-assign variable 'temp' ke index saat ini
          newState[index] = temp
          // Me-return state baru
          return newState
      })
  }

  // Handler untuk menggeser ingredients ke bawah 1 tingkat
  const moveDownIngredientsHandler = (index) => {
      // Menjalankan setter 'setIngredients' dengan callback function
      setIngredients ( prevState => {
          // Menduplikasi state 'ingredients' lama
          const newState = [...prevState]
          // Menduplikasi item pada index sebelum index ingredient yag akan digeser ke bawah dan disimpan di variable 'temp'
          const temp = newState[index+1]
          // Meng-assign ingredient yang akan digeser ke index setelah index saat ini
          newState[index+1] = newState[index]
          // Meng-assign variable 'temp' ke index saat ini
          newState[index] = temp
          // Me-return state baru
          return newState
      })
    }

  return (
    <BurgerContex.Provider value={ {ingredients,setIngredients,addIngredientsHandler, removeIngredientsHandler, moveUpIngredientsHandler, moveDownIngredientsHandler} }>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/burger-maker" element={<BurgerMaker />} />
      </Routes>
    </Layout>
    </BurgerContex.Provider>
  );
}

export default App;
