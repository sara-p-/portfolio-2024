// import { useState } from 'react'
import './App.css'
import useSWR from 'swr'

import Header from './components/Header/Header'
import Title from './components/Title/Title'

const ENDPOINT = '/data/data.json'

async function fetcher(endpoint: string) {
  const response = await fetch(endpoint)
  const json = await response.json()

  return json
}

function App() {
  const { data, error } = useSWR(ENDPOINT, fetcher)

  console.log({ data, error })

  return (
    <>
      <Header></Header>
      <section id='home' className='section'>
        <div className='wrapper'>
          <Title firstLine='Hello' secondLine='Beautiful' />
          <div className='outro'>
            <h2>My name is Sara Pitt</h2>
            <p>I'm a web developer and artist</p>
            <button className='icon-button scroll-down-button'>
              <span className='visually-hidden'>Scroll down</span>
              <img
                src={'/icons/chevron-down.svg'}
                alt='Arrow icon pointing down'
              />
            </button>
          </div>
        </div>
      </section>
      <section id='work' className='section'>
        <div className='wrapper'>
          <Title firstLine='Work' />
          <div className='projects'>
            {/* {data.map((item) => {

            })} */}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
