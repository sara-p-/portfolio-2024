// import { useState } from 'react'
import './App.css'
import useSWR from 'swr'

import Header from './components/Header/Header'
import Title from './components/Title/Title'
import Project from './components/Project/Project'

import { projectProps } from './components/Project/Project'
import Footer from './components/Footer/Footer'

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
  const dataObjects: projectProps[] =
    data === 'undefined' ? [] : [...data].reverse()

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
      <section id='about' className='section'>
        <div className='wrapper'>
          <Title firstLine='About' />
          <div className='content'>
            <h2>I’VE DONE SEVERAL THINGS</h2>
            <p>
              Over 10 years ago (wow) I was an eager young artist, newly
              graduated with a MFA in 3D Fine Art. At some point I decided I
              needed a portfolio site, so I bought a wonderful book about HTML
              and CSS.
            </p>
            <h3>
              THAT WAS THE BEGINNING OF MY DEEP AND ABIDING LOVE FOR CODING.
            </h3>
            <p>
              I began freelancing as a web developer while continuing to work as
              an artist. This was an exciting time spent having art shows,
              participating in artist residencies and fellowships, touring the
              States with bands, and creative consulting with a multinational
              corporation.
            </p>
            <p>
              At some point the allure of code was stronger than the allure of
              the art world, and I began freelancing as a developer full-time.
              This afforded me the chance to travel the world for a year with 40
              strangers on Remote Year.
            </p>
            <p>
              After successfully running my own freelancing business for 5
              years, I decided that I wanted to jump in a little deeper, and got
              a job at an incredible ad agency called Mightily.
            </p>
            <p>
              Mightily is known for its incredible work and creativity. Working
              with such talented designers and developers on some truly
              challenging sites took my skillset to a whole new level.
            </p>
            <p>
              I’ve now been a developer for over 7 years and absolutely love it.
            </p>
            <h3 className='h2'>LET’S MAKE SOMETHING BEAUTIFUL TOGETHER.</h3>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
