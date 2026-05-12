import Header from '../components/Header'
import Hero from '../components/Hero'
import Description from '../components/Description'
import Services from '../components/Services'
import Works from '../components/Works'
import HowWeWork from '../components/HowWeWork'
import Pricing from '../components/Pricing'
import Advantages from '../components/Advantages'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Description />
      <Services />
      <Works />
      <HowWeWork />
      <Pricing />
      <Advantages />
      <About />
      <Contacts />
      <Footer />
    </div>
  )
}