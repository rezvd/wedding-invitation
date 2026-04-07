import SectionCard from './SectionCard'

function LocationSection() {
  return (
    <SectionCard title="Место проведения">
      <p className="location-status">Ещё уточняется</p>
      <a className="btn" href="#" aria-disabled="true" onClick={(e) => e.preventDefault()}>
        Локация скоро появится
      </a>
    </SectionCard>
  )
}

export default LocationSection
