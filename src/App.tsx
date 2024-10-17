// import { useState } from 'react'
import './App.css'
import useSWR from 'swr'

import Header from './components/Header/Header'
import Section from './components/Section/Section'
import Project, { projectProps } from './components/Project/Project'
import Footer from './components/Footer/Footer'
import { useEffect } from 'react'
import { keepTheme } from './helpers/themes'
import { fetcher } from './helpers/utils'
import { handleScrollDownClick } from './helpers/events'
import { ENDPOINT } from './globals/global-variables'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Title from './components/Title/Title'
import gsap from 'gsap'

function App() {
  // ************** Setting the Theme mode ***************//
  useEffect(() => {
    keepTheme()
  }, [])
  // *************** FETCHING THE DATA *****************//
  const { data } = useSWR(ENDPOINT, fetcher)

  // Create the typescript object for data
  const dataObjects: projectProps[] =
    data === undefined ? [] : [...data].reverse()

  // only include the projects with {include: "show"}
  const projects: projectProps[] = dataObjects.length
    ? dataObjects.filter((item) => item.include === 'show')
    : []

  // *************** GSAP config *****************//
  gsap.config({
    nullTargetWarn: false,
  })

  return (
    <>
      <Header></Header>
      <Section id={'home'}>
        <Title firstLine='Hello' secondLine='Beautiful' />
        <div className='outro'>
          <h2>My name is Sara Pitt</h2>
          <p>I'm a web developer and artist</p>
          <button
            className='icon-button scroll-down-button'
            onClick={handleScrollDownClick}
          >
            <span className='visually-hidden'>Scroll down</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </Section>
      <Section id={'work'}>
        <Title firstLine='Work' />
        <div className='projects'>
          {projects.length &&
            projects.map((item, index) => {
              let imageSide = 'right'
              if (index % 2 === 0) {
                imageSide = 'left'
              }
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
                  imageClass={imageSide}
                />
              )
            })}
        </div>
      </Section>
      <Section id={'about'}>
        <Title firstLine='About' />
        <div className='content'>
          <h2>I’VE DONE SEVERAL THINGS</h2>
          <p>
            Over 10 years ago (yikes), I was a newly graduated artist who needed
            a portfolio website and for some reason decided I was going to build
            it myself. According to Amazon, I purchased a book on HTML and CSS
            for “visual learners” on May 10, 2012.
          </p>
          <h3>
            THAT WAS THE BEGINNING OF MY DEEP AND ABIDING LOVE FOR CODING.
          </h3>
          <p>
            As my artistic career grew, I began freelancing as a developer to
            supplement my income. This was an exciting time spent having art
            shows, residencies, national fellowships, and doing some creative
            consulting with a multinational corporation. Meanwhile, my
            freelancing business afforded me incredible opportunities like
            touring around the US with bands and the time/freedom to really
            explore my art.
          </p>
          <h3>The Allure...</h3>
          <p>
            At some point the allure of code was stronger than the allure of the
            art world, and I began freelancing as a developer full-time. The
            steady income and flexibility allowed me to travel the world for a
            year with a group of 40 strangers in a program called Remote Year
            (10/10).
          </p>
          <h3>The Jump...</h3>
          <p>
            After successfully running my own freelancing business for 5 years,
            I decided that I wanted to jump in a little deeper, and have since
            worked at both an incredible ad agency named Mightily, and an
            amazing corporation called Heartland Payment Systems.
          </p>
          <p>
            Over the course of my career I’ve experienced freelancing, agency,
            and corporate working environments that have equipped me to handle a
            variety of situations, both technical and social.
          </p>
          <p>
            I’ve now been a developer for over 10 years now and absolutely love
            it.
          </p>
          <h3 className='h2'>LET’S MAKE SOMETHING BEAUTIFUL TOGETHER.</h3>
        </div>
      </Section>
      <Footer />
    </>
  )
}

export default App
