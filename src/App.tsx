import './App.css'
import ClosingSection from './components/ClosingSection'
import DressCodeSection from './components/DressCodeSection'
import HeroSection from './components/HeroSection'
import LocationSection from './components/LocationSection'
import RsvpSection from './components/RsvpSection'
import TimelineSection from './components/TimelineSection'

function App() {
  return (
    <div className="page">
      <div className="grain" aria-hidden="true" />
      <main className="invitation-column">
        <HeroSection />
        <TimelineSection />
        <LocationSection />
        <DressCodeSection />
        <RsvpSection />
        <ClosingSection />
      </main>
    </div>
  )
}

export default App
