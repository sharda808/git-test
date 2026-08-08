
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Education from './components/Education'
import Extracurricular from './components/Extracurricular'
import Header from './components/Header'
import Hobbies from './components/Hobbies'
import Projects from './components/project/Projetcs'

import Skills from './components/Skills'

function App() {
  return (
       <div className='bg-gray-100 px-3 py-8'>
    <div className='bg-white max-w-4xl mx-auto rounded-xl shadow-lg'>
<Header />

<AboutMe />
<Projects />
<Skills/>
<Education />
<Hobbies />

<Extracurricular />
<Contact />
    </div>
   </div>
  )
}

export default App
