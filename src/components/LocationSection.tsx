import SectionCard from './SectionCard'

const venues = [
  {
    title: 'Регистрация',
    place: 'Советский ЗАГС',
    address: 'проспект Мира, 100А',
    mapUrl:
      'https://yandex.ru/maps/org/sovetskiy_otdel_upravleniya_zags_glavnogo_gosudarstvenno_pravovogo_upravleniya_omskoy_oblasti/1036434433',
    widgetUrl:
      'https://yandex.ru/map-widget/v1/?ll=73.249213%2C55.030242&z=16&pt=73.249213,55.030242,pm2rdm',
  },
  {
    title: 'Банкет',
    place: 'Банкетный зал "Рафаэль"',
    address: 'ул. Лукашевича, 10В',
    mapUrl:
      'https://yandex.ru/maps/org/rafael/236462922271/?ll=73.272383%2C54.995066&z=15',
    widgetUrl:
      'https://yandex.ru/map-widget/v1/?ll=73.272383%2C54.995066&z=16&pt=73.272383,54.995066,pm2rdm',
  },
]

function LocationSection() {
  return (
    <SectionCard title="Место проведения">
      <div className="venues" aria-label="Адреса свадьбы">
        {venues.map((venue) => {
          return (
            <article key={venue.title} className="venue-card">
              <p className="venue-kicker">{venue.title}</p>
              <h3 className="venue-title">{venue.place}</h3>
              <p className="venue-address">{venue.address}</p>
              <div className="venue-map-wrap">
                <iframe
                  className="venue-map"
                  title={`${venue.title} на карте`}
                  src={venue.widgetUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a className="btn venue-btn" href={venue.mapUrl} target="_blank" rel="noreferrer">
                Открыть на карте
              </a>
            </article>
          )
        })}
      </div>
    </SectionCard>
  )
}

export default LocationSection
