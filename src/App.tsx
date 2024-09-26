// import { useState } from 'react'
import './App.css'
import useSWR from 'swr'

import Header from './components/Header/Header'
import Title from './components/Title/Title'
import Project from './components/Project/Project'

import { projectProps } from './components/Project/Project'

const ENDPOINT = '/data/data.json'

async function fetcher(endpoint: string) {
  const response = await fetch(endpoint)
  const json = await response.json()

  if (!json.length) {
    throw json
  }

  return json
}

function App() {
  const { data, isLoading, error } = useSWR(ENDPOINT, fetcher)
  if (isLoading) {
    return <p>Loading…</p>
  }

  if (error) {
    return <p>Something's gone wrong</p>
  }

  // Create the typescript object for data
  const dataObjects: projectProps[] = data === 'undefined' ? [] : data

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
            {dataObjects?.map((item) => {
              return (
                <Project
                  key={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  shortDesc={item.shortDesc}
                  link={item.link}
                  linkText={item.linkText}
                  repoLink={item.repoLink}
                  image={item.image}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
