import SectionCard from './SectionCard'

const timeline = [
  { time: '15:20', event: 'Начало церемонии в ЗАГСе', note: 'Лучше приехать немного заранее' },
  { time: '17:00', event: 'Сбор гостей' },
  { time: '17:30', event: 'Начало банкета' },
  { time: '23:00', event: 'Окончание банкета' },
]

function TimelineSection() {
  return (
    <SectionCard title="Тайминг дня">
      <ol className="timeline" aria-label="Расписание дня">
        {timeline.map((item) => (
          <li key={item.time} className="timeline-item">
            <p className="timeline-time">{item.time}</p>
            <p className="timeline-event">{item.event}</p>
            {item.note ? <p className="timeline-note">{item.note}</p> : null}
          </li>
        ))}
      </ol>
    </SectionCard>
  )
}

export default TimelineSection
