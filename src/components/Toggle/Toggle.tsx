import './toggle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { setTheme } from '../../helpers/themes'
import { useState, useEffect } from 'react'

function Toggle() {
  const [isChecked, setChecked] = useState<boolean>(false)
  // const theme: string = localStorage.getItem('theme') || 'theme-light'

  const handleOnClick = () => {
    if (localStorage.getItem('theme') === 'theme-light') {
      setTheme('theme-dark')
      setChecked(true)
    } else {
      setTheme('theme-light')
      setChecked(false)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('theme') === 'theme-light') {
      setChecked(false)
    } else if (localStorage.getItem('theme') === 'theme-dark') {
      setChecked(true)
    }
  }, [isChecked])

  return (
    <div className='toggle'>
      <input
        type='checkbox'
        id='toggle-theme'
        className='toggle__input'
        checked={isChecked}
        onClick={handleOnClick}
      />
      <label htmlFor='toggle-theme' className='toggle__label'>
        <div className='toggle__wrapper'>
          <span className='visually-hidden'>Toggle theme color</span>
          {isChecked ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </div>
      </label>
    </div>
  )
}

export default Toggle
