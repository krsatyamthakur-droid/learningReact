import React from 'react'
import style from './Header.module.css'
const Header = () => {
  return (
    <div className={style.Header}>
      <h1>Satyam Kumar</h1>
      <button className={style.bond}>click me </button>
    </div>
  )
}

export default Header
