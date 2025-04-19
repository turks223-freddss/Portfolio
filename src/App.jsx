import { useState } from 'react'
import pythonLogo from './assets/python.svg'
import CLogo from './assets/c.svg'
import React from './assets/react.svg'
import mySQL from './assets/mySQL.svg'
import postres from './assets/postgres.svg'
import django from './assets/django.svg'
import profile from './assets/profile.jpg'
import background from './assets/background.svg'
import ikiyo from './assets/Ikiyo.jpg'
import maze from './assets/maze.jpg'
import pygame from './assets/pygame.jpg'
import './App.css'
import Section from './section.jsx';
import RotatingImage from './rotatingImage.jsx'

function App() {
  
  const [isRotating, setIsRotating] = useState(false);
  
  const [activeCard, setActiveCard] = useState(0);
  
  const handleNext = () => {
    setActiveCard((prev) => (prev + 1) % 3); // assuming 3 cards
  };

  const handlePrev = () => {
    setActiveCard((prev) => (prev - 1 + 3) % 3);
  };

  const handleRotate = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000); // Reset after animation
  };

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth "
    style={{ backgroundImage: `url(${background})` }}>

      <Section id="entry" color="">
      <div className="text-center">
        <button1>
            Helloo, I'm Marfred James Deen
            <span class="hover-text"></span>
        </button1>
        <p className="text-xl text-[#FF6B35]">"Focus on the present and learn from the past"</p>
        <div className='grid grid-cols-4 w-70% h-20  gap-4 p-5'>
          {/* skills */}
          <div className='flex items-center justify-center'>
            <button  onClick={() => {
              const skills = document.getElementById('skills');
              skills?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gray-900 blur-xs size-full font-serif text-2xl font-bold hover:text-[#753602] hover:blur-none hover:bg-[#FF6B35] active:scale-95 transition rounded-full"
            >
              SKILL
            </button>
          </div>
            {/* HERO */}
          <div className=' flex items-center justify-center'>
          <button  onClick={() => {
              const hero = document.getElementById('hero');
              hero?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gray-900 blur-xs size-full font-serif text-2xl font-bold hover:text-[#753602] hover:blur-none hover:bg-[#FF6B35] active:scale-95 transition rounded-full"
            >
              WELCOME
            </button>
          </div>
          {/* project */}
          <div className='flex items-center justify-center'>
          <button  onClick={() => {
              const projects = document.getElementById('projects');
              projects?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gray-900 blur-xs size-full font-serif text-2xl font-bold hover:text-[#753602] hover:blur-none hover:bg-[#FF6B35] active:scale-95 transition rounded-full"
            >
              PROJECTS
            </button>
          </div>
            {/* CONTACTS */}
          <div className=' flex items-center justify-center'>
          <button  onClick={() => {
              const contact = document.getElementById('contact');
              contact?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gray-900 blur-xs size-full font-serif text-2xl font-bold hover:text-[#753602] hover:blur-none hover:bg-[#FF6B35] active:scale-95 transition rounded-full"
            >
              CONTACT
            </button>
          </div>

        </div>
      </div>


      </Section>
      <Section id="hero" color="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-6 py-8 max-w-screen-xl mx-auto">

          <div className='md:row-span-2 flex items-center justify-center'>
            <img src={profile} alt="profile" className='size-auto mask-t-from-90% mask-r-from-90%' />
          </div>
          <div className='md:col-span-2 md:row-span-2 flex flex-col gap-5 p-5'>
            <h1 className='text-4xl md:text-6xl font-bold text-center font-serif text-white drop-shadow-[0_0_10px_#ffffff]'>
              Professional Summary
            </h1>
            <p className='text-base md:text-lg leading-relaxed mt-4 font-mono text-justify text-white'>
            Motivated and detail-oriented Computer Science student from the University of the Philippines Cebu, 
            seeking opportunities to apply programming, problem-solving, 
            and project development skills in a dynamic and professional working environment. Passionate about 
            software development, with a strong interest in both frontend and backend technologies, as well as user-centered design. 
            Eager to gain hands-on industry experience, collaborate with experienced professionals, and contribute innovative and efficient solutions to real-world challenges. 
            Demonstrates a proactive attitude, strong communication skills, and a willingness to continuously learn and adapt in fast-paced environments. 
            Open to internships, part-time roles, and project-based engagements that will allow for personal and technical growth.
            </p>
          </div>

          <div className=' p-6'>
            <p className='font-serif text-lg md:text-xl font-semibold italic text-white '>
              "Goals are like planets, they may be far but their light will eventually reach us, so do not give up
              and keep on closing the distance between you and your goal "
            </p>

          </div>
          <div className='md:col-span-2 text-stone-300 flex items-center p-5 font-mono text-sm md:text-lg'>
          Bachelor of Science in Computer Science<br/>
          University of the Philippines-Cebu  2022 – present<br/>
          Relative Coursework: Data Structures, File Processing and Database Systems, Software Engineering 1, 
          Fundamentals of Programming, Design and Analysis of Algorithms.<br/>
          </div>
        </div>
      
      </Section>
      <Section id="skills" color="">
        <div className='font-serif text-8xl absolute self-baseline text-[#F8F8F2] font-bold 
                        hover:drop-shadow-[0_0_15px_#F8F8F2] transition duration-300 '>
          Skills
        </div>
        <div className='grid grid-cols-2 grid-rows-3 gap-10 w-250 h-200 p-30'>

          <div className='grid grid-cols-2 size-full flex items-center justify-center'>
            <div className='flex items-center justify-center max-w-[300px] max-h-[300px] w-full h-full' onClick={handleRotate}>
              <RotatingImage
                src={pythonLogo}
                alt='Python'
                
              />
            </div>
            <div className='flex items-center justify-center font-serif font-bold text-4xl pr- text-[#FFC857] 
                            hover:drop-shadow-[0_0_10px_#FFC857] transition duration-300'>
              Python
            </div>
          </div>
          
          <div className='flex items-center justify-center  w-full h-full ' onClick={handleRotate}>
            <RotatingImage
              src={CLogo}
              alt='C'
              
            />
          </div>

          <div className='grid grid-cols-2 size-full flex items-center justify-center'>
            <div className='flex items-center justify-center max-w-[300px] max-h-[300px] w-full h-full ' onClick={handleRotate}>
              <RotatingImage
                src={React}
                alt='react'
                
              />
            </div>
            <div className='flex items-center justify-center font-serif font-bold text-4xl pr- text-[#FFC857] 
                            hover:drop-shadow-[0_0_10px_#FFC857] transition duration-300'>
              React
            </div>
          </div>

          <div className='grid grid-cols-2 size-full flex items-center justify-center'>
            <div className='flex items-center justify-center max-w-[300px] max-h-[300px] w-full h-full '>
              <RotatingImage
                src={django}
                alt='django'
                
              />
            </div>
            <div className='flex items-center justify-center font-serif font-bold text-4xl pr- text-[#FFC857] 
                            hover:drop-shadow-[0_0_10px_#FFC857] transition duration-300'>
              django
            </div>
          </div>

          <div className='grid grid-cols-2 size-full flex items-center justify-center'>
            <div className='flex items-center justify-center max-w-[300px] max-h-[300px] w-full h-full '>
              <RotatingImage
                src={mySQL}
                alt='mySQL'
                
              />
            </div>
            <div className='flex items-center justify-center font-serif font-bold text-4xl pr- text-[#FFC857] 
                            hover:drop-shadow-[0_0_10px_#FFC857] transition duration-300'>
              MySQL
            </div>
          </div>

          <div className='grid grid-cols-2 size-full flex items-center justify-center'>
            <div className='flex items-center justify-center max-w-[300px] max-h-[300px] w-full h-full '>
              <RotatingImage
                src={postres}
                alt='postgres'
                
              />
            </div>
            <div className='flex items-center justify-center font-serif font-bold text-4xl pr- text-[#FFC857] 
                            hover:drop-shadow-[0_0_10px_#FFC857] transition duration-300'>
              PostgreSQL
            </div>
          </div>

        </div>
      </Section>
      <Section id="projects" color="">
        <div className='h-screen w-screen mt-20 mb-10 mr-8 ml-8'>
          <div className="w-full max-w-8xl h-full px-6 py-10 flex flex-row items-center justify-center gap-6">
            <button
                onClick={handlePrev}
                className="bg-black text-white px-4 py-2 rounded cursor-pointer"
              >
                Prev
              </button>
            {/* Card Container */}
            <div className="w-full relative h-full">
              <div id="card-1" className={`${activeCard === 0 ? 'block' : 'hidden'} h-full bg-[#FF6B35] p-6 rounded shadow-lg grid grid-rows-7 grid-cols-6 gap-2 drop-shadow-[0_0_10px_#FFC857]`}>
                <div className='bg-red-500  flex items-center justify-center row-span-3 col-span-2 cursor-pointer'>
                <img src={ikiyo} alt="Ikiyo" className="size-full self-center justify-self-center" />
                </div>
                
                <div className='  flex items-center justify-center col-span-4'> 
                  <h1 onClick={() => window.open('https://github.com/turks223-freddss/Ikiyo', '_blank')}
                  className='font-mono font-bold text-[#2A2A2A] underline decoration-white text-4xl 
                                hover:overline hover:text-white hover:scale-110
                                flex items-center justify-center

                                transition-colors duration-300 ease-in-out 
                                transition-[text-decoration] duration-500 ease-in-out 
                                transition-transform duration-700 ease-linear cursor-pointer'>
                  iKiyo: Lifestyle Gamification App
                  </h1>
                </div>

                <div className='flex items-center justify-center col-span-4 row-span-2 p-3'>
                  <div className='grid grid-rows-2 grid-cols-2 size-full gap-1 p-2 bg-orange-700/30 backdrop-blur-md rounded-xl drop-shadow-[0_0_10px_#c2410c] '>
                    <div className='flex flex-row '>
                      <div className='w-[30%] '>
                        <img src={React} alt="React_logo" className="w-25 h-25 self-center justify-self-center -scale-75" />
                      </div>
                      <div className='w-[60%]  font-mono font-bold text-4xl self-center justify-self-center ml-5'>
                        React Native
                      </div>
                      
                    </div>
                    <div className='flex flex-row '>
                      <div className='w-[30%]  '>
                        <img src={django} alt="django_logo" className="w-25 h-25 self-center justify-self-center scale-150" />
                      </div>
                      <div className='w-[60%]  font-mono font-bold text-5xl self-center justify-self-center ml-5'>
                        Django
                      </div>
                      
                    </div>
                    <div className='flex flex-row '>
                      <div className='w-[30%]  '>
                        <img src={postres} alt="Postres_logo" className="w-25 h-25 self-center justify-self-center " />
                      </div>
                      <div className='w-[60%]  font-mono font-bold text-5xl self-center justify-self-center ml-5'>
                        PostgreSQL
                      </div>
                      
                    </div>
                    <div className='font-mono text-2xl felx items-center justify-center  '>
                      These are the frameworks and databases used for the project, react native for the front end and Django for the backend.
                    </div>

                  </div>
                </div>
                <div className='bg-orange-700/30 backdrop-blur-md rounded-xl drop-shadow-[0_0_10px_#c2410c] flex col-span-6 row-span-2 flex-col '>  
                  <h1 className=' font-mono text-4xl self-center font-bold'>
                    Features
                  </h1>
                  <p className='font-mono text-1xl font-semibold pl-3 line-through'>
                    Authentication System, users can create, login, and change their password.  
                  </p>
                  <p className='font-mono text-1xl font-semibold pl-3 line-through'>
                    Item & Inventory System, using the shop, users can acquire items that will dynamically update their inventory after purchasing.  
                  </p>
                  <p className='font-mono text-1xl font-semibold pl-3'>
                    Partner System 
                  </p>
                  <p className='font-mono text-1xl font-semibold pl-3'>
                    Task system, partners can give and receive tasks from their partners, and upon completing they receive some reward.  
                  </p>
                  <p className='font-mono text-1xl font-semibold pl-3'>
                    Avatar and Environment customization, users can equip their items to their avatar and room to personalize them.  
                  </p>
                </div>
                <div className='bg-red-500  flex items-center justify-center col-span-6 row-span-2 font-mono text-2xl'>
                  Photos soon to be added
                </div>
              </div>

              <div id="card-2" className={`${activeCard === 1 ? 'block' : 'hidden'} h-full bg-[#FF6B35] p-6 rounded shadow-lg grid grid-rows-7 grid-cols-6 gap-2 drop-shadow-[0_0_10px_#FFC857]`}>
                <div className='bg-red-500  flex items-center justify-center row-span-3 col-span-2 cursor-pointer'>
                <img src={maze} alt="maze" className="size-full self-center justify-self-center" />
                </div>
                
                <div className='  flex items-center justify-center col-span-4'> 
                  <h1 onClick={() => window.open('https://github.com/turks223-freddss/170_maze_runner', '_blank')}
                  className='font-mono font-bold text-[#2A2A2A] underline decoration-white text-4xl 
                                hover:overline hover:text-white hover:scale-110
                                flex items-center justify-center

                                transition-colors duration-300 ease-in-out 
                                transition-[text-decoration] duration-500 ease-in-out 
                                transition-transform duration-700 ease-linear cursor-pointer'>
                  Maze Runner
                  </h1>
                </div>

                <div className='flex items-center justify-center col-span-4 row-span-2 p-3'>
                  <div className='grid grid-rows-2 grid-cols-2 size-full gap-1 p-2 bg-orange-700/30 backdrop-blur-md rounded-xl drop-shadow-[0_0_10px_#c2410c] '>
                    <div className='flex flex-row '>
                      <div className='w-[30%] '>
                        <img src={pythonLogo} alt="ppython" className="w-25 h-25 self-center justify-self-center" />
                      </div>
                      <div className='w-[60%]  font-mono font-bold text-4xl self-center justify-self-center ml-5'>
                        Python
                      </div>
                      
                    </div>
                    <div className='flex flex-row '>
                      <div className='w-[30%]  '>
                        <img src={pygame} alt="pygame" className="w-25 h-25 self-center justify-self-center scale-75" />
                      </div>
                      <div className='w-[60%]  font-mono font-bold text-5xl self-center justify-self-center ml-5'>
                        Pygame
                      </div>
                      
                    </div>
                    <div className='font-mono text-2xl felx items-center justify-center col-span-2 '>
                      These are the used tech stack for this project. Python is the main language and Pygame is the library used to make the game
                    </div>

                  </div>
                </div>
                <div className='bg-orange-700/30 backdrop-blur-md rounded-xl drop-shadow-[0_0_10px_#c2410c] flex col-span-6 row-span-2 flex-col '>  
                  <h1 className=' font-mono text-4xl self-center font-bold'>
                    Features
                  </h1>
                  <p className='font-mono text-1xl font-semibold pl-3 line-through'>
                    2 player mode 
                  </p>
                  <p className='font-mono text-1xl font-semibold pl-3 line-through'>
                    Added AI to make moves automatic
                  </p>
                  <p className='font-mono text-1xl font-semibold pl-3 line-through'>
                    Used A star algo to get the shortest path between the player and the goal then the AI will choose base on that.
                  </p>
                  <p className='font-mono text-1xl font-semibold pl-3 line-through'>
                    Implemented Alpha-Beta pruning
                  </p>
                  <p className='font-mono text-1xl font-semibold pl-3'>
                    optimize skill usage 
                  </p>
                </div>
                <div className='bg-red-500  flex items-center justify-center col-span-6 row-span-2 font-mono text-2xl'>
                  Photos soon to be added
                </div>
              </div>

              <div id="card-3" className={`${activeCard === 2 ? 'block' : 'hidden'} bg-white p-6 rounded shadow-lg`}>
                <h2 className="text-3xl font-bold">Project 3</h2>
                <p>comming soon 3.</p>
              </div>
            </div>
            <button
                onClick={handleNext}
                className="bg-black text-white px-4 py-2 rounded cursor-pointer"
              >
                Next
              </button>
          </div>
        </div>
      </Section>
      <Section id="contact" color="">
        <div className="w-full max-w-4xl px-6 py-12 mx-auto flex flex-col gap-8 text-white font-serif">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Contact Me</h1>
          
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-semibold">Email</h2>
                <p className="text-base md:text-lg">marfred.deen02@gmail.com</p>
                <p className="text-base md:text-lg">mpdeen@up.edu.ph</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold">Phone</h2>
                <p className="text-base md:text-lg">+63 915 766 8570</p>
                <p className="text-base md:text-lg">+63 993 992 1082</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-semibold">Address</h2>
                <p className="text-base md:text-lg">0348 sunset drive lahug, Cebu City</p>
                <p className="text-base md:text-lg">Poog, Toledo City</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold">GitHub</h2>
                <a 
                  href="https://github.com/turks223-freddss" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-base md:text-lg underline hover:text-blue-500 transition-colors duration-300 ease-in-out"
                >
                  github.com/turks223-freddss/Ikiyo
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default App
