import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section from './section.jsx';

function App() {
  
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <Section id="entry" color="bg-blue-500">
      <div className="text-center">
        <h1 className="text-6xl font-bold font-serif mb-4">Helloo, I'm Marfred James Deen</h1>
        <p className="text-xl">"Focus on the present and learn from the past"</p>
        <button  onClick={() => {
            const hero = document.getElementById('hero');
            hero?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 active:scale-95 transition rounded-full"
        >
          welcome
        </button>
      </div>
      </Section>
      <Section id="hero" color="bg-red-500">
        <div className='grid grid-cols-3 grid-rows-3 gap-4 w-300 h-150 '>
          <div className='row-span-3 bg-blue-500 flex items-center justify-center'>
            1
          </div>
          <div className='row-span-2 col-span-2 bg-blue-700 flex items-center justify-center'>
            2
          </div>
          <div className='col-start-2 col-span-2 bg-blue-900 flex items-center justify-center'>
            3
          </div>
        </div>
      
      </Section>
      <Section id="skills" color="bg-gray-500">
        <div className='grid grid-cols-2 grid-rows-3 gap-10 w-250 h-200 p-30'>
          <div className='flex items-center justify-center bg-red-400'>Python</div>
          <div className='flex items-center justify-center bg-red-500'>C/C++</div>
          <div className='flex items-center justify-center bg-red-600'>React</div>
          <div className='flex items-center justify-center bg-red-700'>Django</div>
          <div className='flex items-center justify-center bg-red-800'>MySQL</div>
          <div className='flex items-center justify-center bg-red-900'>PostgreSQL</div>

        </div>
      </Section>
      <Section id="projects" color="bg-green-500">Projects</Section>
      <Section id="contact" color="bg-orange-500">Contact</Section>
    </div>
  )
}

export default App
