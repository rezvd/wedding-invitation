import { useEffect, useRef, useState } from 'react'
import SectionCard from './SectionCard'

const timeline = [
  { time: '15:20', event: 'Начало церемонии в ЗАГСе', note: 'Лучше приехать немного заранее' },
  { time: '17:00', event: 'Сбор гостей' },
  { time: '17:30', event: 'Начало банкета' },
  { time: '23:00', event: 'Окончание банкета' },
]

function TimelineSection() {
  const [isVisible, setIsVisible] = useState(false)
  const timelineRef = useRef<HTMLOListElement | null>(null)

  useEffect(() => {
    const node = timelineRef.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <SectionCard title="Тайминг дня">
      <ol
        ref={timelineRef}
        className={`timeline timeline-layout${isVisible ? ' timeline-visible' : ''}`}
        aria-label="Расписание дня"
      >
        {timeline.map((item, index) => (
          <li
            key={item.time}
            className={`timeline-item timeline-row${item.note ? '' : ' timeline-row-no-note'}`}
            style={{ transitionDelay: `${index * 180}ms` }}
          >
            <div className="timeline-time-wrap">
              <p className="timeline-time">{item.time}</p>
              {index < timeline.length - 1 ? <span className="timeline-stem" aria-hidden="true" /> : null}
            </div>
            <div className="timeline-content">
              <p className="timeline-event">{item.event}</p>
              {item.note ? <p className="timeline-note">{item.note}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </SectionCard>
  )
}

export default TimelineSection
