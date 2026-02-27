import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Books from './components/Books'
import AndroidProject from './components/AndroidProject'
import Games from './components/Games'
import OtherProjects from './components/OtherProjects'
import Social from './components/Social'
import Contact from './components/Contact'
import Quote from './components/Quote'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Books />
        <div className="divider" />
        <AndroidProject />
        <div className="divider" />
        <Games />
        <div className="divider" />
        <OtherProjects />
        <div className="divider" />
        <Social />
        <div className="divider" />
        <Contact />
        <Quote />
      </main>
      <Footer />
    </>
  )
}
