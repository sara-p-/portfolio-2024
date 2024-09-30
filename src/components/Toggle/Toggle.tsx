import './toggle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { setTheme } from '../../helpers/themes'
import { useState, useEffect, useId } from 'react'

function Toggle() {
  const [isChecked, setChecked] = useState<boolean>(false)
  // const theme: string = localStorage.getItem('theme') || 'theme-light'
  // Set a unique ID for the input/label since it will be used twice (in the menu and the mobile menu)
  const id: string = useId()
  const inputId: string = `${id}-input`

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
      {/* <div className='toggle-wrapper'> */}
      <input
        type='checkbox'
        id={inputId}
        checked={isChecked}
        onClick={handleOnClick}
      />
      <label htmlFor={inputId}>
        <div className='label-wrapper'>
          <span className='visually-hidden'>Theme</span>
          {isChecked ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </div>
      </label>
      {/* </div> */}
    </div>
  )
}

export default Toggle
