import './App.css'
import ClosingSection from './components/ClosingSection'
import DateSection from './components/DateSection'
import DressCodeSection from './components/DressCodeSection'
import GiftsSection from './components/GiftsSection'
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
        <DateSection />
        <TimelineSection />
        <LocationSection />
        <DressCodeSection />
        <GiftsSection />
        <RsvpSection />
        <ClosingSection />
      </main>
    </div>
  )
}

export default App
